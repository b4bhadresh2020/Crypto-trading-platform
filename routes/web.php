<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Input;
Route::get('/', 'IndexController');
Route::post('/register/check', 'Auth\RegisterController@ajaxValidator');
Route::get('/trading', 'TradeController@index')->name('trade');

Route::group( ['middleware' => 'auth' ], function()
{
    // -- accounts route --
    Route::get('/account', 'AccountsController@index');
    Route::get('/account/wallet', 'AccountsController@wallet');
    Route::post('/account/api/check_balance_have_amount', function()
    {
      $success = 0;
      $amount = Input::post('amount');
      $success = $amount < 10 ? true : false;
      return json_encode(array('success' => $success));
    });
    Route::post('/account/api/get_balance', function(){
      return json_encode(array('success' => 1, 'balance' => 1.2121212));
    } );
    // -- end accounts route --


});

Auth::routes();

Route::get('/chart/{pairId}/{interval}', 'ExchangeController@getChartData');
Route::get('/home', 'HomeController@index')->name('home');
