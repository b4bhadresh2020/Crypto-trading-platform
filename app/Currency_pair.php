<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Currency_pair extends Model
{
    public function fromAsset(){
      return $this->belongsTo('\App\Currency','from_asset');
    }

    public function toAsset(){
      return $this->belongsTo('\App\Currency','to_asset');
    }
}
