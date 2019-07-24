<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ApiTest extends TestCase
{
    private $test_input_data = [
      ['1', 1],
      ['100', 0],
      ['10000000000000', 0],
      ['ahbdhsd', 0],
      ["1'", 0],
      ['1"', 0],
      ['" or ""="',0],
      ['"--',0],
      ["'--",0]
    ]; //data test to validate

    private $authorization = 'Bearer t2Ya1n8tRB8c5jLAu3s1C9SvkXdx62zUZzq3CAcXdW80NWS6oaFqMeWYDWjP'; //replace with your HTTP_Authorization

    public function testExample()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    /**
     * @dataProvider testGetCurrencyPairProvider
     */
    public function testGetCurrencyPair($router, $success){
        $response = $this->get('/api/'.$router);
        $response->assertStatus(200)->assertJson([
          'success' => $success
        ]);
    }

    public function testGetCurrencyPairProvider(){
      $routers = [
        ['currency_pair'],
        ['trade_history'],
        ['sell_orders'],
        ['buy_orders'],
        ['DailyExchange']
      ];
      $test_data = $this->test_input_data;
      $arr = [];
      foreach ($test_data as $data) {
        foreach ($routers as $router) {
          $arr[] = [$router[0].'/'.$data[0],$data[1]];
        }
      }
      return $arr;
    }
    /**
     * @dataProvider testChartDataApiProvider
     */
    public function testChartDataApi($router,$success){
      /*
        Need to valiadate the {interval}. Only allowed in time frames. 1m,3m,5m,15m,30m,1h,2h,4h,6h,8h,12h,24h,1w,1m
      */
      $response = $this->get('/api/chartData/'.$router);
      $response->assertStatus(200)->assertJson([
        'success' => $success
      ]);
    }
    public function testChartDataApiProvider(){
      $arr=[];
      $interval_test_data = $this->test_input_data;
      $interval_test_data[] = [14400,1]; //test 4h
      $interval_test_data[] = [14401,0]; //test not in 4h
      $this->test_input_data[] = [14400, 1];
      $this->test_input_data[] = [14400, 1];
      //#27 ('ahbdhsd/1', 1)

      foreach ($interval_test_data as $test_data1) {
        foreach ($this->test_input_data as $test_data) {
          $arr[] = [$test_data[0].'/'.$test_data1[0],0];
        }
      }
      $arr[] = ['2/180',1];
      $arr[] = ['2/14400',1];
      return $arr;
    }
    /**
     * @dataProvider test_has_success_boolean_in_response_jsonProvider
     */
    public function test_has_success_boolean_in_response_json($router){
      $response = $this->get($router);
      $response->assertStatus(200)->assertJson([
        'success' => 1
      ]);
    }
    public function test_has_success_boolean_in_response_jsonProvider(){
      return [
        ['/api/currency_pairs'],
        ['/api/all_orders'],
        ['/api/active_order'],
        ['/api/close_order'],
        ['/api/currencies']
      ];
    }
    /**
     * @dataProvider testPostToAuthProvider
     */
    public function testPostToAuth($url, $data, $success=1, $status=201){
      $response = $this->post($url, $data, ['HTTP_Authorization' => $this->authorization]);
      $response->assertStatus($status)->assertJson([
        'success' => $success
      ]);
    }
    public function testPostToAuthProvider(){
      $arr = [];

      //Order create validate test
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 2,
        'amount' => 0.1,
        'price' => 1,
        'order_type' => 'LIMIT',
        'side' => 'BUY'
      ], 1];
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 2000000,
        'amount' => 0.1,
        'price' => 1,
        'order_type' => 'LIMIT',
        'side' => 'BUY'
      ], 0, 200];
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 'asasas',
        'amount' => 0.1,
        'price' => 1,
        'order_type' => 'LIMIT',
        'side' => 'BUY'
      ], 0, 200];
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 2,
        'amount' => 'ashabs"',
        'price' => '1712-121',
        'order_type' => 'LIMIT',
        'side' => 'BUY'
      ], 0, 200];
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 2,
        'amount' => 0.1,
        'price' => 1,
        'order_type' => 'LIMIT1212112',
        'side' => 'BUY'
      ], 0, 200];
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 2,
        'amount' => 0.1,
        'price' => 1,
        'order_type' => 'LIMIT',
        'side' => 'BUYasas"s'
      ], 0, 200];
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 2,
        'amount' => '11-212',
        'price' => 1,
        'order_type' => 'LIMIT',
        'side' => 'BUY'
      ], 0, 200];

      /*
      $arr[] = ['', [

      ], 0, 200];
      */

      //test validate for /orders
      $arr[] = ['/api/private/orders', [
          'order_status' => 'Pending',
          'currency_pair_id' => 1
      ], 1, 200];
      $arr[] = ['/api/private/orders', [
          'order_status' => 'Pendingahsbagsagajgsb',
          'currency_pair_id' => 1
      ], 0, 200];
      $arr[] = ['/api/private/orders', [
          'order_status' => 'Pending',
          'currency_pair_id' => 'ajshajsa'
      ], 0, 200];

      //test validate for /order_cancel
      $arr[] = ['/api/private/orders/cancel', [
          'order_id' => 'asjhbasjsjsjj"+-as'
      ], 0, 200];

      //test wallet amount validate
      $arr[] = ['/api/private/walletAmount', [
          'BaseCurrency' => 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, ',
          'MainCurrency' => 'assassasaasasasa'
      ], 0, 200];

      //test orderStopLimit
      $arr[] = ['/api/private/orderStopLimit', [
        'currency_pair_id' => 1,
        'amount' => 1,
        'stop' => 0.02,
        'limit' => 0.02,
        'side' => 'BUY'
      ], 1, 201];
      $arr[] = ['/api/private/orderStopLimit', [
        'currency_pair_id' => 1,
        'amount' => "1'+aa",
        'stop' => 0.02,
        'limit' => 0.02,
        'side' => 'BUY'
      ], 0, 200];
      $arr[] = ['/api/private/orderStopLimit', [
        'currency_pair_id' => 1,
        'amount' => 1,
        'stop' => '0.02+a1ssa',
        'limit' => 0.02,
        'side' => 'BUY'
      ], 0, 200];
      $arr[] = ['/api/private/orderStopLimit', [
        'currency_pair_id' => 1,
        'amount' => 1,
        'stop' => 0.02,
        'limit' => '0.02--as01js"',
        'side' => 'BUY'
      ], 0, 200];
      $arr[] = ['/api/private/orderStopLimit', [
        'currency_pair_id' => 1,
        'amount' => 1,
        'stop' => 0.02,
        'limit' => 0.02,
        'side' => 'BUYasasas1ssss'
      ], 0, 200];
      $arr[] = ['/api/private/orderStopLimit', [
        'currency_pair_id' => 'ajsnajsnjs',
        'amount' => 1,
        'stop' => 0.02,
        'limit' => 0.02,
        'side' => 'BUY'
      ], 0, 200];
      $arr[] = ['/api/private/orderStopLimit', [
        'currency_pair_id' => 100000,
        'amount' => 1,
        'stop' => 0.02,
        'limit' => 0.02,
        'side' => 'BUY'
      ], 0, 200];


      //test /api/private/orders/create

      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 1,
        'amount' => 0.1,
        'order_type' => 'MARKET',
        'side' => 'BUY'
      ], 1, 201];
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 100000,
        'amount' => 0.1,
        'order_type' => 'MARKET',
        'side' => 'BUY'
      ], 0, 200];
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 'asassa',
        'amount' => '0.1asass',
        'order_type' => 'MARKET',
        'side' => 'BUY'
      ], 0, 200];
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 1,
        'amount' => 0.1,
        'order_type' => 'MARKETaasasas',
        'side' => 'BUY'
      ], 0, 200];
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 1,
        'amount' => 0.1,
        'order_type' => 'MARKET',
        'side' => 'BUYsasassasasa'
      ], 0, 200];
      $arr[] = ['/api/private/orders/create', [
        'currency_pair_id' => 1,
        'amount' => '0.1+2',
        'order_type' => 'MARKET',
        'side' => 'BUY'
      ], 0, 200];
      return $arr;
    }


}