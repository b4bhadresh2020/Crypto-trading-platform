<?php

use Illuminate\Database\Seeder;
use App\User;
class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's clear the users table first
        User::truncate();

        // Let's make sure everyone has the same password and 
        // let's hash it before the loop, or else our seeder 
        // will be too slow.
        $password = Hash::make('12345678');

        User::create([
            'name' => 'Sanjay Vekariya',
            'username' => 'sanjayvekariya18',
            'email' => 'sanjay@gmail.com',
            'password' => $password,
        ]);
    }
}
