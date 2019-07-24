<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Wallets;

class WalletController extends Controller
{
    public function getWallets(Request $request)
    {
        return Wallets::get_all_wallets(\Auth::user()->id);
    }

    public function getWallet(Request $request)
    {
        return Wallets::get_wallet(\Auth::user()->id,$request->currency_id);
    }
}
