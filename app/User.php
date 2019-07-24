<?php

namespace App;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public static function current_wallet($currency_id){
      $user = auth()->user();
      if( $user != null ){
        return self::find($user->id)->wallets()->where('currency_id','=',$currency_id)->first();
      }
      return null;
    }

    public static function current_wallets(){
      $user = auth()->user();
      if( $user != null ){
        return self::find($user->id)->wallets;
      }
      return null;
    }

    public function generateToken()
    {
        $this->api_token = str_random(60);
        $this->save();

        return $this->api_token;
    }

    public function wallets(){
      return $this->hasMany('\App\Wallets','user_id');
    }

    public function orders(){
      return $this->hasMany('\App\Order');
    }
}
