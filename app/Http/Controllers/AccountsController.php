<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
class AccountsController extends Controller
{
    public function index(){

      return view('account/index');
    }
    public function wallet(){
      $wallets = \App\Wallets::get_all_wallets(Auth::id());
      return view('account/wallet', ['wallets' => $wallets] );
    }
    
}
