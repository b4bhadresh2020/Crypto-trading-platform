<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    protected $title = 'Rentomoon';


    public function __invoke(){
      //var_dump(config('constants.opening_hours_date'));
      return view('index', ['title' => $this->title]);
    }
}
