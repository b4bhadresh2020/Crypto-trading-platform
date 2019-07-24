<?php

namespace App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;

class Wallets extends Model
{
    protected $table = 'wallets';

    public static function boot(){
      parent::boot();

    }

    public static function delete_wallet_cache($user_id){
      Cache::tags('Wallets.'.$user_id)->flush();
    }

    public static function get_wallet($user_id,$currency_id){ //by currency
    //  return Cache::tags('Wallets.'.$user_id)->rememberForever('wallet_by_currency_id:user:'.$user_id, function(){
        return self::where('user_id', $user_id)->where('currency_id', $currency_id)->first()->toArray();
    //  } );
    }

    public static function get_all_wallets($user_id){
    //  return Cache::tags('Wallets.'.$user_id)->rememberForever('all_wallets:user:'.$user_id , function() use($user_id) {
        return self::join('currency', 'currency.id', '=', 'wallets.currency_id')->orderBy('currency.order','asc')->where('user_id', '=', $user_id)->get()->toArray();
    //  } );

    }

    


}
