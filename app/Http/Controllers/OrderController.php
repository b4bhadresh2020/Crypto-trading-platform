<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Config;
use App\Currency_pair;
use App\Currency;
use App\Order;
use App\Order_stop_limit;
use App\User;
use App\Wallets;
use DB;
use App\Events\PendingOrder;
use App\Events\BuyOrder;
use App\Events\SellOrder;
use App\Events\UserConfirmOrder;
use App\Events\UserOpenOrder;
use App\Events\Chart;
use App\Events\CurrencyPair;
use App\Events\DailyExchange;
use App\Events\TradeHistory;
use App\Events\WalletAmount;
use App\Events\OrderCancel;
use Validator;
use Illuminate\Validation\Rule;
class OrderController extends Controller
{

    /**
     * Display a listing of the Order By Status.
     *
     * @return \Illuminate\Http\Response
     */
    public function tradeOrders(Request $request)
    {   
        $validator = Validator::make($request->all(), 
        [
            'currency_pair_id' => ['numeric','min:1'],
            'order_status' => ['alpha',Rule::in(['Confirmed','Pending','Canceled'])]
        ],
        [
            'currency_pair_id.numeric' => 'Currency Pair Must be an Ineteger.',
            'currency_pair_id.min' => 'Currency Pair Must be Greate Then 0.',
            'order_status.alpha' => 'Invalid Order Status.'
        ]);

        if ($validator->fails()) {
            $response = array('success'=> false,'output'=>$validator->errors(),'data'=>null);
            return response()->json($response, 200);
        }
        try {
            if(!is_numeric($request->currency_pair_id) || $request->currency_pair_id <= 0){
                $response = array('success' => false,'data' => null); 
                return response()->json($response, 200);    
            }
            
            $currencyPair = Currency_pair::find($request->currency_pair_id);
            if(!$currencyPair){
                $response = array('success' => false,'data' => null);
                return response()->json($response, 200);
            }

            $orders = Order::where('user_id',\Auth::user()->id)
                        ->where('order_status',$request->order_status)
                        ->where('currency_pair_id',$request->currency_pair_id)
                        ->orderBy('updated_at','DESC')
                        ->limit(100)
                        ->get();
            $response['data'] = (count($orders) > 0) ? $orders : null;
            $response['success'] = true;
            return response()->json($response, 200);
        } catch (\Exception $ex) {
            $response = array('success' => false,'output' => $ex->getMessage(),'data' => null);
            return response()->json($response, 200);
        }  
    }

    /**
     * Store a newly created Order.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // \Auth::loginUsingId(1);

        // Check Authenticated User
        if(!\Auth::check()){
            $output = "You are not authorized User.";
            $response = array('success'=> false,'output'=>$output,'data'=>null);
            return response()->json($response, 200);
        }

        $regex = "/^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/";

        if($request->has('price') && $request->order_type != "MARKET"){
            $validator = Validator::make($request->all(), 
            [
                'currency_pair_id' => ['numeric','min:1'],
                'amount' => ['regex:'.$regex],
                'price' => ['regex:'.$regex],
                'order_type' => ['alpha',Rule::in(['LIMIT','MARKET','STOP-LIMIT'])],
                'side' => ['alpha',Rule::in(['BUY','SELL'])],
            ],
            [
                'currency_pair_id.numeric' => 'Currency Pair Must be an Ineteger.',
                'currency_pair_id.min' => 'Currency Pair Must be Greate Then 0.',
                'amount.regex' => 'Amount Must be an Ineteger.',
                'price.regex' => 'Price Must be an Ineteger.',
                'order_type.alpha' => 'Invalid Order Name.',
                'side.alpha' => 'Invalid Order Type.'
            ]);
        }else{
            $validator = Validator::make($request->all(), 
            [
                'currency_pair_id' => ['numeric','min:1'],
                'amount' => ['regex:'.$regex],
                'order_type' => ['alpha',Rule::in(['LIMIT','MARKET','STOP-LIMIT'])],
                'side' => ['alpha',Rule::in(['BUY','SELL'])],
            ],
            [
                'currency_pair_id.numeric' => 'Currency Pair Must be an Ineteger.',
                'currency_pair_id.min' => 'Currency Pair Must be Greate Then 0.',
                'amount.regex' => 'Amount Must be an Ineteger.',
                'order_type.alpha' => 'Invalid Order Name',
                'side.alpha' => 'Invalid Order Type.'
            ]);
        }
        if ($validator->fails()) {
            $response = array('success'=> false,'output'=>$validator->errors(),'data'=>null);
            return response()->json($response, 200);
        }

        $output = "";

        try {
            DB::beginTransaction();

                // Get Currency Pair For Buyer
                $currencyPair = Currency_pair::find($request->currency_pair_id);

                // Get Currency Pair For Seller
                $sellerCurrencyPair = Currency_pair::
                        where('from_asset',$currencyPair->to_asset)
                        ->where('to_asset',$currencyPair->from_asset)->get()->first();
                
                // Get Currency Symbol For Insert Note into Remark 
                $fromCurSym = $currencyPair->fromAsset->asset; 
                $toCurSym = $currencyPair->toAsset->asset;
                
                // Get Configuration Setting
                $charge = Config::where('name','trade_fee')->get()->first()->value;
                $minTrade = Config::where('name','min_trade')->get()->first()->value;
                
                // Get User Wallet for Given Currency
                $walletAmount = Wallets::where('user_id',\Auth::user()->id)
                                ->where('currency_id',$currencyPair->from_asset)
                                ->get()->first();

                // Check User Wallet is Exist or Not
                if(!$walletAmount){
                    $output = "Wallet Not Found For Currency[".$currencyPair->fromAsset->asset."]";
                    $response = array('success'=> false,'output'=>$output,'data'=>null);
                    return response()->json($response, 200);
                } 

                // Check Request Quantity and Price is Greater Then 0
                if($request->has('price') && $request->order_type != "MARKET"){
                    if($request->price <= 0 || $request->amount <= 0){
                        $output = "Please enter valid amount.";
                        $response = array('success'=> false,'output'=>$output,'data'=>null);
                        return response()->json($response, 200);
                    }

                    // Check Trade Value is Greater or Equal Min. Trade
                    if(($request->price * $request->amount) < $minTrade){
                        $output = 'Please enter mininum price :'.$minTrade;
                        $response = array('success'=> false,'output'=>$output,'data'=>null);
                        return response()->json($response, 200);
                    }

                    // Check User Wallet Balance is Greater Then Trade Value For Buyer and Seller
                    if(($request->side == "BUY" && $walletAmount->balance < ($request->price * $request->amount)) || 
                        ($request->side == "SELL" && $walletAmount->balance < $request->amount)){
                            $output = 'You have not sufficient fund to do this trade.';
                            $response = array('success'=> false,'output'=>$output,'data'=>null);
                            return response()->json($response, 200);
                    }
                }else{
                    if($request->amount <= 0){
                        $output = "Please enter valid amount.";
                        $response = array('success'=> false,'output'=>$output,'data'=>null);
                        return response()->json($response, 200);
                    }
                }

                // Get Reuqested Quantity Into Another Variable
                $Remaining = $request->amount;

                // Loop continue till total quantities are buy or sell.
                while($Remaining > 0){
                    
                    if($request->side == "BUY"){ // For Buy Order
                        $toOrderId = NULL;
                        if($request->has('price') && $request->order_type != "MARKET"){
                            $order = Order::where('side','!=',$request->side)
                                ->where('price','<=',$request->price)
                                ->where('order_status',"Pending")
                                ->where('amount','>',0)
                                ->where('currency_pair_id',$request->currency_pair_id)
                                ->orderBy('price')
                                ->orderBy('id')
                                ->limit(1)
                                ->get()->first();
                        }else{
                            $order = Order::where('side','!=',$request->side)
                                ->where('order_status',"Pending")
                                ->where('amount','>',0)
                                ->where('currency_pair_id',$request->currency_pair_id)
                                ->orderBy('price','DESC')
                                ->orderBy('id')
                                ->limit(1)
                                ->get()->first();
                        }
                        if($order){
                            $availableAmount = $order->amount;
                            $toOrderId = $order->id;
                            $toUserId = $order->user_id;
                            $price1 = $order->price;
                        }else{
                            $toOrderId = 0;
                        }
                    }else{ // For Sell Order
                        $toOrderId = NULL;
                        if($request->has('price') && $request->order_type != "MARKET"){
                            $order = Order::where('side','!=',$request->side)
                                ->where('price','>=',$request->price)
                                ->where('order_status',"Pending")
                                ->where('amount','>' ,0)
                                ->where('currency_pair_id',$request->currency_pair_id)
                                ->orderBy('price','DESC')
                                ->orderBy('id')
                                ->limit(1)
                                ->get()->first();
                        }else{
                            $order = Order::where('side','!=',$request->side)
                                ->where('order_status',"Pending")
                                ->where('amount','>' ,0)
                                ->where('currency_pair_id',$request->currency_pair_id)
                                ->orderBy('price','DESC')
                                ->orderBy('id')
                                ->limit(1)
                                ->get()->first();
                        }
                        if($order){
                            $availableAmount = $order->amount;
                            $toOrderId = $order->id;
                            $toUserId = $order->user_id;
                            $price1 = $order->price;
                        }else{
                            $toOrderId = 0;
                        }
                    }

                    if($toOrderId > 0){
                        if($availableAmount >= $Remaining){ /* If order is less then available trade */
                            $givenAmount = $Remaining;
                            $Remaining = 0;
                        }else{
                            $givenAmount = $availableAmount;
                            $Remaining = $Remaining - $availableAmount;
                        }
                        
                        if($request->side == "BUY"){ // For Buyer Order

                            $total = $givenAmount * $price1;
                            $chargeAmount = $givenAmount * $charge / 100;
                            
                            /* Insert Confirm Trade With Charge */
                            $order = new Order;
                            $order->order_no = $this->getOrderNo();
                            $order->user_id = \Auth::user()->id;
                            $order->currency_pair_id = $request->currency_pair_id;
                            $order->amount = $givenAmount;
                            $order->price = $price1;
                            $order->side = $request->side;
                            $order->order_type = $request->order_type;
                            $order->order_status = "Confirmed";
                            $order->fee = $chargeAmount;
                            $order->fee_remark = "Charge:($charge)% $fromCurSym";
                            $order->save();
                            
                            // event(new ExchangeOrder($order));
                            event(new BuyOrder($order));
                            event(new SellOrder($order));
                            event(new UserOpenOrder($order));
                            event(new UserConfirmOrder($order));
                            event(new TradeHistory($order));
                            event(new CurrencyPair($order->currency_pair_id));
                            event(new DailyExchange($order->currency_pair_id));
                            event(new Chart($order->currency_pair_id));
                            
                            $remark1 = "Trade buy confirmed order no. : ".$order->order_no;
                            $total = $givenAmount * $price1;
                            $walletParam = array(
                                'currency_id' => $currencyPair->from_asset,
                                'user_id' => \Auth::user()->id,
                                'source' => "Order",
                                'context_id' => $order->id,
                                'transaction_type' => "SUB",
                                'amount' => $total,
                                'remark' => $remark1
                            );
                            $this->manageWallet($walletParam);

                            // Update Previous Order
                            DB::table('orders')
                                    ->where('id',$toOrderId)
                                    ->update(
                                        [
                                            'order_status' => DB::raw("CASE WHEN amount <=".$givenAmount." THEN 'Confirmed' ELSE 'Pending' END"),
                                            'amount' => DB::raw('amount - '.$givenAmount)
                                        ]
                                    );
                            
                            $walletParam = array(
                                'currency_id' => $currencyPair->to_asset,
                                'user_id' => \Auth::user()->id,
                                'context_id' => $order->id,
                                'source' => "Order",
                                'transaction_type' => "ADD",
                                'amount' => $givenAmount,
                                'remark' => $remark1
                            );
                            $this->manageWallet($walletParam);

                            $remark1 = "Charge buy for order no. : ".$order->order_no;
                            $walletParam = array(
                                'currency_id' => $currencyPair->to_asset,
                                'user_id' => \Auth::user()->id,
                                'context_id' => $order->id,
                                'source' => "Order",
                                'transaction_type' => "SUB",
                                'amount' => $chargeAmount,
                                'remark' => $remark1
                            );
                            $this->manageWallet($walletParam);

                            $output .= "Your Order(".$order->order_no." is confirmed for ".$givenAmount." ".$fromCurSym." of ".$price1." ".$toCurSym."\n";

                            $chargeAmount = $total * $charge / 100;

                            // Create New Order Entry For Seller Trade.
                            $order = new Order;
                            $order->order_no = $this->getOrderNo();
                            $order->user_id = $toUserId;
                            $order->currency_pair_id = $currencyPair->id;
                            $order->amount = $givenAmount;
                            $order->price = $price1;
                            $order->side = ($request->side == "BUY") ? "SELL" : "BUY";
                            $order->order_type = $request->order_type;
                            $order->order_status = "Confirmed";
                            $order->fee = $chargeAmount;
                            $order->fee_remark = "Charge:($charge)% $fromCurSym";
                            $order->save();
                            
                            event(new BuyOrder($order));
                            event(new SellOrder($order));
                            event(new UserOpenOrder($order));
                            event(new UserConfirmOrder($order));
                            event(new TradeHistory($order));
                            event(new CurrencyPair($order->currency_pair_id));
                            event(new DailyExchange($order->currency_pair_id));
                            event(new Chart($order->currency_pair_id));

                            $remark1 = "Trade sell confirmed order no: ".$order->order_no;

                            $walletParam = array(
                                'currency_id' => $currencyPair->from_asset,
                                'user_id' => $toUserId,
                                'context_id' => $order->id,
                                'source' => "Order",
                                'transaction_type' => "ADD",
                                'amount' => $total,
                                'remark' => $remark1
                            );
                            $this->manageWallet($walletParam);

                            $remark1 = "Charge sell for order no: ".$order->order_no;

                            $walletParam = array(
                                'currency_id' => $currencyPair->from_asset,
                                'user_id' => $toUserId,
                                'context_id' => $order->id,
                                'source' => "Order",
                                'transaction_type' => "SUB",
                                'amount' => $chargeAmount,
                                'remark' => $remark1
                            );
                            $this->manageWallet($walletParam);
                        
                        }else{ // Sell Order

                            $total = $givenAmount * $price1;
                            $chargeAmount = $total * $charge / 100;

                            $order = new Order;
                            $order->order_no = $this->getOrderNo();
                            $order->user_id = \Auth::user()->id;
                            $order->currency_pair_id = $currencyPair->id;
                            $order->amount = $givenAmount;
                            $order->price = $price1;
                            $order->side = $request->side;
                            $order->order_type = $request->order_type;
                            $order->order_status = "Confirmed";
                            $order->fee = $chargeAmount;
                            $order->fee_remark = "Charge:($charge)% $toCurSym";
                            $order->save();

                            event(new BuyOrder($order));
                            event(new SellOrder($order));
                            event(new UserOpenOrder($order));
                            event(new UserConfirmOrder($order));
                            event(new TradeHistory($order));
                            event(new CurrencyPair($order->currency_pair_id));
                            event(new DailyExchange($order->currency_pair_id));
                            event(new Chart($order->currency_pair_id));

                            $remark1 = "Trade sell confirmed order no: ".$order->order_no;
                            $total = $givenAmount * $price1;

                            $walletParam = array(
                                'currency_id' => $currencyPair->from_asset,
                                'user_id' => \Auth::user()->id,
                                'context_id' => $order->id,
                                'source' => "Order",
                                'transaction_type' => "SUB",
                                'amount' => $givenAmount,
                                'remark' => $remark1
                            );
                            $this->manageWallet($walletParam);

                            /* echo "<pre>";
                            print_r($walletParam);
                            die; */

                            DB::table('orders')
                                    ->where('id',$toOrderId)
                                    ->update(
                                        [
                                            'amount' => DB::raw('amount - '.$givenAmount),
                                            'order_status' => DB::raw("CASE WHEN amount <=".$givenAmount." THEN 'Confirmed' ELSE 'Pending' END")
                                        ]
                                    );

                            $walletParam = array(
                                'currency_id' => $currencyPair->to_asset,
                                'user_id' => \Auth::user()->id,
                                'context_id' => $order->id,
                                'source' => "Order",
                                'transaction_type' => "ADD",
                                'amount' => $total,
                                'remark' => $remark1
                            );
                            $this->manageWallet($walletParam);

                            $remark1  = 'Charge sell order no :'.$order->order_no;
                            $walletParam = array(
                                'currency_id' => $currencyPair->to_asset,
                                'user_id' => \Auth::user()->id,
                                'context_id' => $order->id,
                                'source' => "Order",
                                'transaction_type' => "SUB",
                                'amount' => $chargeAmount,
                                'remark' => $remark1
                            );
                            $this->manageWallet($walletParam);

                            $output .= 'Your Order(' .$order->order_no .') is confirmed for '.$givenAmount.' '.$fromCurSym.' of '.$price1.' '.$toCurSym ."\n";

                            $chargeAmount = $givenAmount * $charge / 100;

                            $order = new Order;
                            $order->order_no = $this->getOrderNo();
                            $order->user_id = $toUserId;
                            $order->currency_pair_id = $currencyPair->id;
                            $order->amount = $givenAmount;
                            $order->price = $price1;
                            $order->side = ($request->side == "BUY") ? "SELL" : "BUY";
                            $order->order_type = $request->order_type;
                            $order->order_status = "Confirmed";
                            $order->fee = $chargeAmount;
                            $order->fee_remark = "Charge:($charge)% $fromCurSym";
                            $order->save();

                            event(new BuyOrder($order));
                            event(new SellOrder($order));
                            event(new UserOpenOrder($order));
                            event(new UserConfirmOrder($order));
                            event(new TradeHistory($order));
                            event(new CurrencyPair($order->currency_pair_id));
                            event(new DailyExchange($order->currency_pair_id));
                            event(new Chart($order->currency_pair_id));

                            $remark1 ='Trade buy confirmed order no :'.$order->order_no;    
                            $walletParam = array(
                                'currency_id' => $currencyPair->from_asset,
                                'user_id' => $toUserId,
                                'context_id' => $order->id,
                                'source' => "Order",
                                'transaction_type' => "ADD",
                                'amount' => $givenAmount,
                                'remark' => $remark1
                            );
                            $this->manageWallet($walletParam);

                            $remark1  = 'Charge buy order no :'.$order->order_no;
                            $walletParam = array(
                                'currency_id' => $currencyPair->from_asset,
                                'user_id' => $toUserId,
                                'context_id' => $order->id,
                                'source' => "Order",
                                'transaction_type' => "SUB",
                                'amount' => $chargeAmount,
                                'remark' => $remark1
                            );
                            $this->manageWallet($walletParam);
                        }
                    }else{
                        if($request->has('price') && $request->order_type != "MARKET"){
                            $order = new Order;
                            $order->order_no = $this->getOrderNo();
                            $order->user_id = \Auth::user()->id;
                            $order->currency_pair_id = $currencyPair->id;
                            $order->amount = $Remaining;
                            $order->price = $request->price;
                            $order->side = $request->side;
                            $order->order_type = $request->order_type;
                            $order->order_status = "Pending";
                            $order->save();
                            event(new PendingOrder($order));
                            event(new UserOpenOrder($order));

                            if($request->side == "BUY"){
                                $total = $Remaining * $request->price;

                                $remark1 = ' Trade buy confirmed order no :'.$order->order_no;
                                $walletParam = array(
                                    'currency_id' => $currencyPair->from_asset,
                                    'user_id' => \Auth::user()->id,
                                    'context_id' => $order->id,
                                    'source' => "Order",
                                    'transaction_type' => "SUB",
                                    'amount' => $total,
                                    'remark' => $remark1
                                );
                                $this->manageWallet($walletParam);
                            }else{
                                $remark1 = ' Trade sell confirmed order no :'. $order->order_no;
                                $walletParam = array(
                                    'currency_id' => $sellerCurrencyPair->from_asset,
                                    'user_id' => \Auth::user()->id,
                                    'context_id' => $order->id,
                                    'source' => "Order",
                                    'transaction_type' => "SUB",
                                    'amount' => $Remaining,
                                    'remark' => $remark1
                                );
                                $this->manageWallet($walletParam);
                            }
                            $output .= 'Your Order(' .$order->order_no .') is pending.';    
                        }
                        /* else{
                            $output = "Last Trade Price not Fetch in this pair.";
                        } */
                        $toOrderId = 0;
                        $Remaining = 0;
                    }
                }
                DB::table('orders')->where('amount','<=',0)->delete();
            DB::commit();
            if($request->has('price') && $request->order_type != "MARKET"){
                $output .= $this->createOrderStopLimitConvert();
            }
            
            event(new WalletAmount($fromCurSym,$toCurSym));
            $response = array('success'=> true,'output'=>$output,'data'=>null);
            return response()->json($response, 201);

        } catch (\Exception $ex) {
            $response = array('success' => false,'output' => $ex->getMessage(),'data' => null);
            return response()->json($response, 200);
        }
    }

    public function manageWallet($walletParam)
    {
        if($walletParam['user_id'] > 0 && $walletParam['transaction_type'] == "ADD"){
            // Lock Row by PostgreSql when Updating Wallet Balance
            DB::table('wallets')
                ->where('user_id',$walletParam['user_id'])
                ->where('currency_id',$walletParam['currency_id'])
                ->update(['balance' => DB::raw('balance + '.$walletParam['amount'])]);

            // Track Wallet Transaction
            DB::insert('INSERT INTO wallet_histories(user_id,source,context_id,transaction_type,amount,remark) VALUES(?, ?, ?, ?, ?, ?)', [$walletParam['user_id'],$walletParam['source'], $walletParam['context_id'], $walletParam['transaction_type'], $walletParam['amount'], $walletParam['remark']]);

        }else if($walletParam['user_id'] > 0 && $walletParam['transaction_type'] == "SUB"){

            // Lock Row by PostgreSql when Updating Wallet Balance
            DB::table('wallets')
                ->where('user_id',$walletParam['user_id'])
                ->where('currency_id',$walletParam['currency_id'])
                ->update(['balance' => DB::raw('balance - '.$walletParam['amount'])]);
           /*  print_r(DB::getQueryLog());
            die; */
            // Track Wallet Transaction
            DB::insert('INSERT INTO wallet_histories(user_id,source,context_id,transaction_type,amount,remark) VALUES(?, ?, ?, ?, ?, ?)', [$walletParam['user_id'],$walletParam['source'], $walletParam['context_id'], $walletParam['transaction_type'], $walletParam['amount'], $walletParam['remark']]);
        }
    }

    public function getOrderNo($table = "orders",$prefix="T")
    {
        $datePart = date('Ym');
        $order = DB::table($table)->orderBy('id','DESC')->limit(1)->get()->first();
        if($order){
            $incrementPart =  str_pad(substr($order->order_no,7)+1, 8, "0", STR_PAD_LEFT);                
        }else{
            $incrementPart =  str_pad(1, 8, "0", STR_PAD_LEFT);
        }
        $orderNo = $prefix.$datePart.$incrementPart;
        return $orderNo;
    }

    public function createOrderStopLimit(Request $request)
    {
        try {
            DB::beginTransaction();
            

                $regex = "/^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/";

                $validator = Validator::make($request->all(), 
                [
                    'currency_pair_id' => ['numeric','min:1'],
                    'amount' => ['regex:'.$regex],
                    'stop' => ['regex:'.$regex],
                    'limit' => ['regex:'.$regex],
                    'side' => ['alpha',Rule::in(['BUY','SELL'])],
                ],
                [
                    'currency_pair_id.numeric' => 'Currency Pair Must be an Ineteger.',
                    'currency_pair_id.min' => 'Currency Pair Must be Greate Then 0.',
                    'amount.regex' => 'Amount Must be an Ineteger.',
                    'stop.regex' => 'Price Must be an Ineteger.',
                    'limit.regex' => 'Price Must be an Ineteger.',
                    'side.alpha' => 'Invalid Order Type.'
                ]);
                if ($validator->fails()) {
                    $response = array('success'=> false,'output'=>$validator->errors(),'data'=>null);
                    return response()->json($response, 200);
                }

                $total = 0.00000000;
                $remark = "";

                // Get Currency Pair For Buyer
                $currencyPair = Currency_pair::find($request->currency_pair_id);

                // Get Currency Pair For Seller
                $sellerCurrencyPair = Currency_pair::where('from_asset',$currencyPair->to_asset)->where('to_asset',$currencyPair->from_asset)->get()->first();

                // Get Currency Symbol For Insert Note into Remark 
                $fromCurSym = $currencyPair->fromAsset->asset; 
                $toCurSym = $currencyPair->toAsset->asset;

                if($request->stop < 0 || $request->limit < 0 || $request->amount < 0){
                    $output = 'Please enter valid amount.';
                    $response = array('success'=> false,'output'=>$output,'data'=>null);
                    return response()->json($response, 200);
                }

                if($request->side == "BUY"){
                    $orderStopLimit = new Order_stop_limit;
                    $orderStopLimit->user_id = \Auth::user()->id;
                    $orderStopLimit->order_no = $this->getOrderNo("order_stop_limits","SL");
                    $orderStopLimit->currency_pair_id = $request->currency_pair_id;
                    $orderStopLimit->stop = $request->stop;
                    $orderStopLimit->limit = $request->limit;
                    $orderStopLimit->amount = $request->amount;
                    $orderStopLimit->side = $request->side;
                    $orderStopLimit->order_status = "Pending";
                    $orderStopLimit->save();

                    $remark = "Stop/Limit buy order no:".$orderStopLimit->order_no;
                    $walletParam = array(
                        'currency_id' => $currencyPair->from_asset,
                        'user_id' => \Auth::user()->id,
                        'context_id' => $orderStopLimit->id,
                        'source' => "STOP-LIMIT",
                        'transaction_type' => "SUB",
                        'amount' => $total,
                        'remark' => $remark
                    );
                    $this->manageWallet($walletParam);
                }else{
                    $orderStopLimit = new Order_stop_limit;
                    $orderStopLimit->user_id = \Auth::user()->id;
                    $orderStopLimit->order_no = $this->getOrderNo("order_stop_limits","SL");
                    $orderStopLimit->currency_pair_id = $currencyPair->id;
                    $orderStopLimit->stop = $request->stop;
                    $orderStopLimit->limit = $request->limit;
                    $orderStopLimit->amount = $request->amount;
                    $orderStopLimit->side = $request->side;
                    $orderStopLimit->order_status = "Pending";
                    $orderStopLimit->save();

                    $remark = "Stop/Limit sell order no:".$orderStopLimit->order_no;
                    $walletParam = array(
                        'currency_id' => $currencyPair->to_asset,
                        'user_id' => \Auth::user()->id,
                        'context_id' => $orderStopLimit->id,
                        'source' => "STOP-LIMIT",
                        'transaction_type' => "SUB",
                        'amount' => $total,
                        'remark' => $remark
                    );
                    $this->manageWallet($walletParam);
                }
                $output = $remark;
            DB::commit();
            event(new WalletAmount($fromCurSym,$toCurSym));
            $response = array('success'=> true,'output'=>$output,'data'=>null);
            return response()->json($response, 201);
        } catch (\Exception $ex) {
            $response = array('success' => false,'output' => $ex->getMessage(),'data' => null);
            return response()->json($response, 200);
        }
    }

    public function createOrderStopLimitConvert()
    {
        $output ="";
        $orderStopLimits = Order_stop_limit::where('order_status','Pending')->get();
        foreach ($orderStopLimits as $orderStopLimit) {

            $order = Order::where('side',$orderStopLimit->side)
                    ->where('order_status',"Confirmed")
                    ->where('currency_pair_id',$orderStopLimit->currency_pair_id)
                    ->orderBy('id','DESC')
                    ->limit(1)
                    ->get()->first();

            /* echo "<pre>";
            print_r($orderStopLimit->toarray());
            print_r($order->toarray());
            die; */
            if(!$order){
                $output = "Last Trade Price not Fetch in this pair.";
                return $output;
            }

            $lastPrice = $order->price;

            if($lastPrice > 0){
                if($orderStopLimit->side == "Pending"){
                    if($lastPrice > $orderStopLimit->stop && $orderStopLimit->limit > $orderStopLimit->stop){
                        $remark = "Refund Stop/Limit buy confirm order no :".$orderStopLimit->order_no;
                        $total = $orderStopLimit->limit * $orderStopLimit->amount;
                        $walletParam = array(
                            'currency_id' => $orderStopLimit->currencyPair->from_asset,
                            'user_id' => $orderStopLimit->user_id,
                            'context_id' => $orderStopLimit->id,
                            'source' => "STOP-LIMIT",
                            'transaction_type' => "ADD",
                            'amount' => $total,
                            'remark' => $remark
                        );
                        $this->manageWallet($walletParam);

                        DB::table('order_stop_limits')->where('id',$orderStopLimit->id)->update(['order_status' => "Confirmed"]);

                        $request = new Request;
                        $request->setMethod('POST');
                        $request->request->add([
                            'user_id' => $orderStopLimit->user_id,
                            'currency_pair_id'=> $orderStopLimit->currency_pair_id,
                            'amount' => $orderStopLimit->amount,
                            'price' => $orderStopLimit->limit,
                            'order_type' => "STOP-LIMIT",
                            'side' => $orderStopLimit->side,
                        ]);
                        /* echo "<pre>";
                        print_r($request);
                        die; */
                        $this->store($request);
                    }
                }else{
                    if($lastPrice < $orderStopLimit->stop && $orderStopLimit->limit < $orderStopLimit->stop){
                        $remark = "Refund Stop/Limit sell confirm order no :".$orderStopLimit->order_no;
                        $total = $orderStopLimit->limit * $orderStopLimit->amount;
                        $walletParam = array(
                            'currency_id' => $orderStopLimit->currencyPair->from_asset,
                            'user_id' => $orderStopLimit->user_id,
                            'context_id' => $orderStopLimit->id,
                            'source' => "STOP-LIMIT",
                            'transaction_type' => "ADD",
                            'amount' => $total,
                            'remark' => $remark
                        );
                        $this->manageWallet($walletParam);

                        DB::table('order_stop_limits')->where('id',$orderStopLimit->id)->update(['order_status' => "Confirmed"]);

                        $request = new Request;
                        $request->setMethod('POST');
                        $request->request->add([
                            'user_id' => $orderStopLimit->user_id,
                            'currency_pair_id'=> $orderStopLimit->currency_pair_id,
                            'amount' => $orderStopLimit->amount,
                            'price' => $orderStopLimit->limit,
                            'order_type' => "STOP-LIMIT",
                            'side' => $orderStopLimit->side,
                        ]);
                        /* echo "<pre>";
                        print_r($request->toarray());
                        // print_r($order->toarray());
                        die; */
                        $this->store($request);
                    }
                }
            }
            // $output .= "Last Price: ".$lastPrice."\n";
            //$output .= "@Id : ".$orderStopLimit->id." @Stop ".$orderStopLimit->stop." @Limit ".$orderStopLimit->limit." @Amount ".$orderStopLimit->amount."\n";
        }
        
        return $output;
    }

    public function cancelOrder(Request $request)
    {
        $validator = Validator::make($request->all(), 
        [
            'order_id' => ['numeric','min:1']
        ],
        [
            'order_id.numeric' => 'Order ID  Must be an Ineteger.',
            'order_id.min' => 'Order ID Must be Greate Then 0.'
        ]);
        
        if ($validator->fails()) {
            $response = array('success'=> false,'output'=>$validator->errors(),'data'=>null);
            return response()->json($response, 200);
        }
        try {
            DB::beginTransaction();
                $order = Order::
                        with('currencyPair')
                        ->where('id',$request->order_id)
                        ->where('user_id',\Auth::user()->id)
                        ->where('order_status','Pending')
                        ->get()->first();

                if(!$order){
                    $output = 'Order Not Found..!';
                    $response = array('success'=> true,'output'=>$output,'data'=>null);
                    return response()->json($response, 200);
                }
                DB::table("orders")->where('id',$order->id)->update(['order_status' => "Canceled"]);
                event(new OrderCancel($order));
                event(new UserOpenOrder($order,"Canceled"));
                if($order->side == "BUY"){
                    $amount = $order->amount * $order->price;
                    $remark = "Cancel-Buy-Order No-".$order->order_no;
                }else{
                    $amount = $order->amount;
                    $remark = "Cancel-Sell-Order No-".$order->order_no;
                }
                
                $walletParam = array(
                    'currency_id' => $order->currencyPair->to_asset,
                    'user_id' => $order->user_id,
                    'context_id' => $order->id,
                    'source' => "Order",
                    'transaction_type' => "ADD",
                    'amount' => $amount,
                    'remark' => $remark
                );

                $this->manageWallet($walletParam);
                $output = "Trade canceled successfully.";


                // Get Currency Pair For Buyer
                $currencyPair = Currency_pair::find($order->currency_pair_id);

                // Get Currency Symbol For Insert Note into Remark 
                $fromCurSym = $currencyPair->fromAsset->asset; 
                $toCurSym = $currencyPair->toAsset->asset;

                event(new WalletAmount($fromCurSym,$toCurSym));
            DB::commit();
            $response = array('success'=> true,'output'=>$output,'data'=>null);
            return response()->json($response, 200);
        } catch (\Exception $ex) {
            $response = array('success' => false,'output' => $ex->getMessage(),'data' => null);
            return response()->json($response, 200);
        }
    }

    public function getWalletAmount(Request $request)
    {
        $validator = Validator::make($request->all(), 
        [
            'BaseCurrency' => 'alpha',
            'MainCurrency' => 'alpha'
        ],
        [
            'BaseCurrency.alpha' => 'Invalid Base Currency.',
            'MainCurrency.alpha' => 'Invalid Main Currency',
        ]);
        
        if ($validator->fails()) {
            $response = array('success'=> false,'output'=>$validator->errors(),'data'=>null);
            return response()->json($response, 200);
        }
        if($request->BaseCurrency == $request->MainCurrency){
            $response = array('success'=> false,'output'=>"Currency Not be Same!",'data'=>null);
            return response()->json($response, 200);
        }
        try {
            //code...
            $fromWalletAmt = Wallets::select('balance')
                ->join('currency','currency.id','wallets.currency_id')
                ->where('currency.asset',$request->BaseCurrency)
                ->where('wallets.user_id',\Auth::user()->id)
                ->get()->first();

            if($fromWalletAmt){
                $data["BaseCurrencyValue"] =  $fromWalletAmt->balance;
            }else{
                $data["BaseCurrencyValue"] =  "Wallet(".$request->BaseCurrency.") Not Found";
            }
            $toWalletAmt = Wallets::select('balance')
                ->join('currency','currency.id','wallets.currency_id')
                ->where('currency.asset',$request->MainCurrency)
                ->where('wallets.user_id',\Auth::user()->id)
                ->get()->first();
            if($toWalletAmt){
                $data["MainCurrencyValue"] =  $toWalletAmt->balance;
            }else{
                $data["MainCurrencyValue"] =  "Wallet(".$request->MainCurrency.") Not Found";
            }
            // Get Configuration Setting
            $tradeFee = Config::where('name','trade_fee')->get()->first();
            $minTrade = Config::where('name','min_trade')->get()->first();
            
            $data['TradeFees'] = ($tradeFee) ? $tradeFee->value : 0.00000000;
            $data['MinTrade'] = ($minTrade) ? $minTrade->value : 0.00000000;

            $response = array('success'=> true,'data'=>$data);
            return response()->json($response, 200);
        } catch (\Exception $ex) {
            $response = array('success' => false,'output' => $ex->getMessage(),'data' => null);
            return response()->json($response, 200);
        }
    }
}
