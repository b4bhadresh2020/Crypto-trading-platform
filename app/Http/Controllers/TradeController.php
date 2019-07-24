<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TradeController extends Controller
{
    protected $title = 'Cryptocurrency Exchange';
    public function index(){
      return view('trade/index', ['title' => $this->title]);
    }
}
