<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order_stop_limit extends Model
{
    protected $guarded=[];
    
    public function user(){
      return $this->belongsTo('\App\User');
    }

    public function currencyPair(){
      return $this->belongsTo('\App\Currency_pair');
    }
}
