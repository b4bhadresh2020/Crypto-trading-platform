<?php

use Illuminate\Database\Seeder;
use App\Currency;
use App\Currency_pair;
class Currency_pairTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Currency_pair::truncate();
        $currencies = Currency::all();
        $pairs = array();
        foreach ($currencies as $currency) {
            foreach ($currencies as $currency_inner) {
                if($currency->id != $currency_inner->id){
                    $pairs[] = array(
                        'from_asset' => $currency->id,
                        'to_asset' => $currency_inner->id
                    );
                }
            }
        }
        Currency_pair::insert($pairs);
    }
}
