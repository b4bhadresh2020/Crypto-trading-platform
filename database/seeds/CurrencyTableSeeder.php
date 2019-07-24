<?php

use Illuminate\Database\Seeder;
use App\Currency;
class CurrencyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's clear the currency table first
        Currency::truncate();

        // Let's make sure everyone has the same password and 
        // let's hash it before the loop, or else our seeder 
        // will be too slow.
        $password = Hash::make('12345678');

        Currency::insert([
            array(
              'type' => 'bitcoin',
              'name' => 'Bitcoin',
              'name2' => 'Bitcoins',
              'asset' => 'BTC',
              'active' => true,
              'decimal_after' => 8,
              'order' => 1,
              'has_wallet' => true
            ),
            array(
              'type' => 'ethereum',
              'name' => 'Ethereum',
              'name2' => 'Ethereums',
              'asset' => 'ETH',
              'active' => true,
              'decimal_after' => 8,
              'order' => 2,
              'has_wallet' => true
            ),
            array(
              'type' => 'usdt',
              'name' => 'Tether USD',
              'name2' => 'Tether USD',
              'asset' => 'USDT',
              'active' => true,
              'decimal_after' => 2,
              'order' => 3,
              'has_wallet' => true
            )
        ]);
    }
}
