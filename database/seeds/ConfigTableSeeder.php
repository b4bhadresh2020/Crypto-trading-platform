<?php

use Illuminate\Database\Seeder;
use App\Config;

class ConfigTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's clear the users table first
        Config::truncate();

        Config::insert(array(
            array(
                'name' => 'trade_fee',
                'value' => "0.00001000",
            ),
            array(
                'name' => 'min_trade',
                'value' => "0.00005000",
            ),
        ));
    }
}
