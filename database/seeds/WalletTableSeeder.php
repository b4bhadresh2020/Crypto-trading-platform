<?php

use Illuminate\Database\Seeder;
use App\Wallets;
use App\User;
use App\Currency;
class WalletTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's clear the wallet table first
        Wallets::truncate();
        $users = User::all();
        $currencies = Currency::all();
        $data = array();
        foreach ($users as $key => $user) {
            foreach ($currencies as $currency) {
                $data[] = array(
                    'user_id' => $user->id, 
                    'balance' => 2000.00000000, 
                    'balance_lock' => 0.00000000, 
                    'currency_id' => $currency->id, 
                );
            }
        }
        Wallets::insert($data);
    }
}
