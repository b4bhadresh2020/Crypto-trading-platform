<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;


class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'username' => ['required', 'string', 'max:255', 'unique:users,username','without_spaces'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        $user = User::create([
            'name' => $data['name'],
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        //create wallet for user
        $list_currency_has_wallets = \App\Currency::list_has_wallets();
        $wallets_to_insert = [];
        foreach ($list_currency_has_wallets as $key => $id) {
          $wallets_to_insert[] = array(
            'user_id' => $user->id,
            'balance' => 0.0,
            'balance_lock' => 0.0,
            'currency_id' => $id
          );
        }
        \App\Wallets::insert($wallets_to_insert);
        return $user;
    }
    public function ajaxValidator(Request $request){
        $validator = $this->validator($request->all());
        if( $validator->passes() )
          return response()->json(['success' => 1]);
        return response()->json(['success' => 0, 'error' => $validator->errors()]);
    }

    protected function registered(Request $request, $user)
    {
        $user->generateToken();
        return response()->json(['data' => $user->toArray()], 201);
    }
}
