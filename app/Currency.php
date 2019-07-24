<?php

namespace App;
use Illuminate\Support\Facades\Cache;
use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    protected $table = 'currency';
    public static function boot(){
        parent::boot();
        self::created(function($model){
            $this->delete_cache();
        });
        self::updated(function($model){
            $this->delete_cache();
        });
        self::deleted(function($model){
            $this->delete_cache();
        });
    }
    public function delete_cache(){
      //Cache::tags('Currency')->flush();
    }
    public static function get_all_id_array(){
      //return Cache::tags('Currency')->rememberForever('get_all_id_array', function(){
          return self::pluck('id')->toArray();
      //} );
    }
    //public static function get_currency_by_id($)
    public static function get_currency_array($currency_id){
      //return Cache::tags('Currency')->rememberForever('get_currency:'.$currency_id , function() use($currency_id) {
        return self::where('id', $currency_id)->first()->toArray();
      //} );
    }
    public static function list_has_wallets(){
      //return Cache::tags('Currency')->rememberForever('has_wallets', function(){
        return self::where('has_wallet',1)->pluck('id')->toArray();
      //} );
    }
    public static function get_all(){
      //return Cache::tags('Currency')->rememberForever('list_currency', function(){
        return self::orderBy('order')->get();
      //} );
    }
}
