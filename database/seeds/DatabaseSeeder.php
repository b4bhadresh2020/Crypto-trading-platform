<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(CurrencyTableSeeder::class);
        $this->call(Currency_pairTableSeeder::class);
        $this->call(ConfigTableSeeder::class);
        $this->call(WalletTableSeeder::class);
    }
}
