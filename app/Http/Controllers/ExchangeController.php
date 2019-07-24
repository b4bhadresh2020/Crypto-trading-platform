<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;
use App\Currency;
use App\Currency_pair;
use App\User;
use App\Wallets;
use Carbon\Carbon;
class ExchangeController extends Controller
{
    public function createTestOrder()
    {
        echo "<pre>";
        $request = new Request;
        $request->setMethod('POST');
        $orderAmount = 2.10000000;
        for ($i=1; $i <= 200; $i++) { 
            $orderAmount -= 0.01;
            echo "$i => $orderAmount<br>";
            $request->request->add([
                'user_id' => 1,
                'currency_pair_id'=> 1,
                'amount' => 1,
                'price' => $orderAmount,
                'order_type' => "LIMIT",
                'side' => "BUY",
            ]);
            $response = app('App\Http\Controllers\OrderController')->store($request);
            print_r($response->getData());  
        }
        // die;
    }

    public function getAllOrders()
    {
        $orders = Order::all();
        $response['data'] = (count($orders) > 0) ? $orders : null;
        $response['success'] = true;
        return response()->json($response, 200);
    }

    public function getActiveOrders()
    {
        $orders = Order::where('order_status',"Pending")->get();
        $response['data'] = (count($orders) > 0) ? $orders : null;
        $response['success'] = true;
        return response()->json($response, 200);
    }

    public function getCloseOrders()
    {
        $orders = Order::where('order_status',"Confirmed")->get();
        $response['data'] = (count($orders) > 0) ? $orders : null;
        $response['success'] = true;
        return response()->json($response, 200);
    }

    public function getCurrencies()
    {
        $currencies = Currency::all();
        $response['data'] = (count($currencies) > 0) ? $currencies : null;
        $response['success'] = true;
        return response()->json($response, 200);
    }

    public function getCurrencyPair($currencyId = null)
    {
        try {
            if(!is_numeric($currencyId) || $currencyId <= 0){
                $response = array('success' => false,'data' => null); 
            return response()->json($response, 200);    
            }

            $currency = Currency::find($currencyId);

            if(!$currency){
                $response = array('success' => false,'data' => null);
                return response()->json($response, 200);
            }
            // $currency_pairs = Currency_pair::where('from_asset',$currencyId)->with('fromAsset')->with('toAsset')->get();
            $currency_pairs = Currency_pair::with('fromAsset')->with('toAsset')->get();
            
            
            $response['data'] = (count($currency_pairs) > 0) ? $this->getCurrencyChange($currency_pairs) : null;        
            $response['success'] = true;
            return response()->json($response, 200);
        } catch (\Exception $ex) {
            $response = array('success' => false,'output' => $ex->getMessage(),'data' => null);
            return response()->json($response, 200);
        }
    }

    public function getCurrencyPairByName($currencyPairName = null)
    {
        try {
            if($currencyPairName == null){
            $response = array('success' => false,'data' => null); 
            return response()->json($response, 200);    
            }
            // Convert Pair into Array
            $pair = explode('_',$currencyPairName);
           
            if(isset($pair[1])){
                $fromCurrency = Currency::where('asset',$pair[1])->first();
                // Check From Currency is exist or not
                if($fromCurrency){
                    /* $currency_pairs = Currency_pair::
                            where('from_asset',$fromCurrency->id)
                            ->with('fromAsset')->with('toAsset')->get(); */

                    $currency_pairs = Currency_pair::with('fromAsset')->with('toAsset')->get();
                    $response['data'] = (count($currency_pairs) > 0) ? $this->getCurrencyChange($currency_pairs) : null; 
                    $response['success'] = true;
                }else{
                    $response = array('success' => false,'data' => null);
                }
            }else{
                $response = array('success' => false,'data' => null);
            }
            return response()->json($response, 200);
        } catch (\Exception $ex) {
            $response = array('success' => false,'output' => $ex->getMessage(),'data' => null);
            return response()->json($response, 200);
        }
    }

    public function getCurrencyPairs()
    {
        $currency_pairs = Currency_pair::with('fromAsset')->with('toAsset')->get();
        $response['data'] = (count($currency_pairs) > 0) ? $this->getCurrencyChange($currency_pairs) : null;
        $response['success'] = true;
        return response()->json($response, 200);
    }

    public function getCurrencyChange($currency_pairs)
    {
        foreach ($currency_pairs as $key => $currency_pair) {
            $currentTrade = Order::orderBy('id','desc')
                                ->where('currency_pair_id',$currency_pair->id)
                                ->where('order_status','Confirmed')
                                ->whereDate('updated_at',date('Y-m-d'))
                                ->limit(1)
                                ->get()->first();
            
            $previousTrade = Order::orderBy('id','desc')
                                ->where('currency_pair_id',$currency_pair->id)
                                ->where('order_status','Confirmed')
                                ->whereDate('updated_at',date('Y-m-d',strtotime("-1 days")))
                                ->limit(1)
                                ->get()->first();

            $data[$key]['id'] = $currency_pair->id;
            $data[$key]['name'] = $currency_pair->toAsset->asset."/".$currency_pair->fromAsset->asset;
            $data[$key]['base_currency_id'] = $currency_pair->from_asset;
            
            if($currentTrade){
                if($previousTrade){
                    $price = (($currentTrade->price - $previousTrade->price)/$previousTrade->price)*100;
                    $data[$key]['change'] = $price;
                }else{
                    $data[$key]['change'] = $currentTrade->price;
                }
                $data[$key]['price'] = $currentTrade->price;
            }else{
                if($previousTrade){
                    $data[$key]['change'] = $previousTrade->price;
                }else{
                    $data[$key]['change'] = 0.00000000;
                }
                $data[$key]['price'] = 0.00000000;
            }
        }
        return $data;
    }

    public function getTradeHistory($pairId = null)
    {   
        try {
            if(!is_numeric($pairId) || $pairId <= 0){
                $response = array('success' => false,'data' => null); 
                return response()->json($response, 200);    
            }

            $currencyPair = Currency_pair::find($pairId);
            if(!$currencyPair){
                $response = array('success' => false,'data' => null);
                return response()->json($response, 200);
            }
            
            $orders = Order::
                where('currency_pair_id',$pairId)
                ->where('order_status',"Confirmed")
                ->orderBy('updated_at','DESC')
                ->get();

            $response['data'] = (count($orders) > 0)? $orders : null;
            $response['success'] = true;
            return response()->json($response, 200);
        } catch (\Exception $ex) {
            $response = array('success' => false,'output' => $ex->getMessage(),'data' => null);
            return response()->json($response, 200);
        }
    }

    public function getSellOrders($pairId = null)
    {
        try {
            if(!is_numeric($pairId) || $pairId <= 0){
                $response = array('success' => false,'data' => null); 
                return response()->json($response, 200);    
            }
            
            $currencyPair = Currency_pair::find($pairId);
            if(!$currencyPair){
                $response = array('success' => false,'data' => null);
                return response()->json($response, 200);
            }

            $orders = Order::
                    selectRaw('price,SUM(amount) as amount,side')
                    ->where('currency_pair_id',$pairId)
                    ->where('order_status',"Pending")
                    ->where('side',"SELL")
                    ->orderBy('price')
                    ->groupBy('price')
                    ->groupBy('side')
                    ->limit(100)
                    ->get();
            $response['data'] = (count($orders) > 0)? $orders : null;
            $response['success'] = true;
            return response()->json($response, 200);
        } catch (\Exception $ex) {
            $response = array('success' => false,'output' => $ex->getMessage(),'data' => null);
            return response()->json($response, 200);
        }
    }

    public function getBuyOrders($pairId = null)
    {
        try {
            if(!is_numeric($pairId) || $pairId <= 0){
                $response = array('success' => false,'data' => null); 
                return response()->json($response, 200);    
            }
            
            $currencyPair = Currency_pair::find($pairId);
            if(!$currencyPair){
                $response = array('success' => false,'data' => null);
                return response()->json($response, 200);
            }

            $orders = Order::
                    selectRaw('price,SUM(amount) as amount,side')
                    ->where('currency_pair_id',$pairId)
                    ->where('order_status',"Pending")
                    ->where('side',"BUY")
                    ->orderBy('price','DESC')
                    ->groupBy('price')
                    ->groupBy('side')
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

    public function getDailyExchange($pairId)
    {
        try {
            if(!is_numeric($pairId) || $pairId <= 0){
                $response = array('success' => false,'data' => null); 
                return response()->json($response, 200);    
            }
            
            $currencyPair = Currency_pair::find($pairId);
            if(!$currencyPair){
                $response = array('success' => false,'data' => null);
                return response()->json($response, 200);
            }

            $currentTrade = Order::orderBy('id','desc')
                        ->where('currency_pair_id',$pairId)
                        ->where('order_status','Confirmed')
                        ->whereDate('updated_at',date('Y-m-d'))
                        ->limit(1)
                        ->get()->first();
                
            $previousTrade = Order::orderBy('id','desc')
                        ->where('currency_pair_id',$pairId)
                        ->where('order_status','Confirmed')
                        ->whereDate('updated_at',date('Y-m-d',strtotime("-1 days")))
                        ->limit(1)
                        ->get()->first();

            $last24Hour = Order::selectRaw('MIN(price),MAX(price),SUM(price*amount)')
                        ->where('currency_pair_id',$pairId)
                        ->where('order_status','Confirmed')
                        ->where('created_at', '>=', Carbon::now()->subDay())
                        ->first();
            
            $data['highest24hours'] = ($last24Hour->max) ? $last24Hour->max : 0.00000000;
            $data['lowest24hours'] = ($last24Hour->min) ? $last24Hour->min : 0.00000000;
            $data['volume24hours'] = ($last24Hour->sum) ? $last24Hour->sum : 0.00000000;
            
            if($currentTrade){
                if($previousTrade){
                    $price = (($currentTrade->price - $previousTrade->price)/$previousTrade->price)*100;
                    $data['dailyChange'] = $price;
                }else{
                    $data['dailyChange'] = $currentTrade->price;
                }
                $data['lastPrice'] = $currentTrade->price;
            }else{
                if($previousTrade){
                    $data['dailyChange'] = $previousTrade->price;
                }else{
                    $data['dailyChange'] = 0.00000000;
                }
                $data['lastPrice'] = 0.00000000;
            }
            
            $response['success'] = true;
            $response['data'] = $data;
            
            return response()->json($response, 200);
        } catch (\Exception $ex) {
            $response = array('success' => false,'output' => $ex->getMessage(),'data' => null);
            return response()->json($response, 200);
        }
    }

    public function getChartData($pairId,$interval)
    {
        try {
            // 1m,3m,5m,15m,30m,1h,2h,4h,6h,8h,12h,24h,1w,1m
            $intervals = array(
                60,180,300,900,1800,3600,7200,14400,21600,28800,43200,86400,604800,2592000
            );

            if(!is_numeric($pairId) || $pairId <= 0){
                $response = array('success' => false,'data' => null); 
                return response()->json($response, 200);    
            }
            if(!is_numeric($interval) || $interval <= 0){
                $response = array('success' => false,'data' => null); 
                return response()->json($response, 200);    
            }
            if(!in_array($interval,$intervals)){
                $response = array('success' => false,'data' => null); 
                return response()->json($response, 200);
            }
            $currencyPair = Currency_pair::find($pairId);
            if(!$currencyPair){
                $response = array('success' => false,'data' => null);
                return response()->json($response, 200);
            }

            $chart = \DB::select("SELECT  
                            to_timestamp(floor((extract('epoch' from created_at) / $interval )) * $interval) 
                            AT TIME ZONE 'UTC' as time_interval,
                            (array_agg(price ORDER BY created_at ASC))[1] o,
                            (array_agg(price ORDER BY created_at DESC))[1] c,
                            MAX(price) h,
                            MIN(price) l,
                            SUM(amount) vol
                        FROM orders  
                        where currency_pair_id = $pairId AND
                        order_status = 'Confirmed'
                        GROUP BY time_interval
                        ORDER BY time_interval");
            $response = array('success'=> true,'data'=>$chart);
            return response()->json($response, 200);
        } catch (\Exception $ex) {
            $response = array('success' => false,'output' => $ex->getMessage(),'data' => null);
            return response()->json($response, 200);
        }
    }
}
