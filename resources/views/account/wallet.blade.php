@extends('layouts/app')
@section('more_css')
  <link href="{{ asset('css/wallet.css') }}" rel="stylesheet">
@endsection
@section('content')
  <div class="wallet-page">
    <div class="listWrap">
      <h3>Wallet Balances</h3>
      <ul class="float-right">
      <li class="total">
        <label class="ng-binding">Estimated Value</label>： <strong class="ng-binding">0.00000000 BTC</strong> /
        <!-- ngIf: cur_lang=='cn' -->
        <!-- ngIf: cur_lang!='cn' --><strong ng-if="cur_lang!='cn'" class="ng-binding ng-scope">$0.00</strong><!-- end ngIf: cur_lang!='cn' -->
      </li>
      <li class="limit">
        <span class="ng-binding">
          24h Withdrawal Limit：2BTC
        </span>
        <span class="ng-binding">In Use：0BTC</span>
      </li>
    </ul>
       <ul class="list">

           <li>
               <span>Coin</span>
               <span>Name</span>
               <span>Total Balance</span>
               <span>Available Balance</span>
               <span>In Order</span>
               <span>BTC Value</span>
               <span></span>
           </li>
           @foreach ($wallets as $wallet)
             <li>
                 <span>{{ $wallet['asset'] }}</span>
                 <span>{{ $wallet['name'] }}</span>
                 <span>{{ number_format($wallet['balance'] + $wallet['balance_lock'],$wallet['decimal_after']) }}</span>
                 <span>{{ number_format($wallet['balance'], $wallet['decimal_after']) }}</span>
                 <span>{{ number_format($wallet['balance_lock'],$wallet['decimal_after']) }}</span>
                 <span>0.00000000</span>
                 <span>
                   <div class="action">
                     <a class="badge badge-primary" target="_blank" href="/account/deposit/{{ $wallet['type'] }}">Deposit</a>
                     <a class="badge badge-warning" target="_blank" href="/account/withdrawal/{{ $wallet['type'] }}">Withdrawal</a>
                    </div>
                 </span>
             </li>
           @endforeach

       </ul>

   </div>

  </div>
@endsection
