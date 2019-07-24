<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

   use AuthenticatesUsers {
        logout as performLogout;
    }

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    /**
     * Handle an authentication attempt.
     *
     * @return Response
     */
    public function login(Request $request)
    {
        $this->validate($request, [
            'email'    => 'required',
            'password' => 'required',
        ]);

        $login_type = filter_var($request->input('email'), FILTER_VALIDATE_EMAIL )
            ? 'email'
            : 'username';

        $request->merge([
            $login_type => $request->input('email')
        ]);

        if (Auth::attempt($request->only($login_type, 'password'))) {
            $user = $this->guard()->user();
            if($request->wantsJson()){
                $userDetail = array(
                    'name' => $user->name,
                    'email' => $user->email,
                    'api_token' => $user->createToken('Exchnage')->accessToken
                );
                $response['success'] = true;
                $response['output'] = "";
                $response['data'] = $userDetail;
                return response()->json($response, 200);
            }else{
                $token = $user->createToken('Exchnage')->accessToken;
                // \Cookie::queue("Authorization", "Bearer ".$token);
                \Session::put('access_token',$token);
                return redirect()->intended($this->redirectPath());
            }
        }else{
            if($request->wantsJson()){
                $response['success'] = false;
                $response['output'] = "Invalid username and password.";
                $response['data'] = null;
                return response()->json($response, 200);
            }else{
                return redirect()->back()
                ->withInput()
                ->withErrors([
                    'login' => 'These credentials do not match our records.',
                ]);
            }
        }
    }

    /* public function userLogout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['data' => 'User logged out.'], 200);
    } */

    public function logout(Request $request)
    {
        \Session::forget('access_token');
        // $cookie = \Cookie::forget('Authorization');
        $this->performLogout($request);
        // return redirect('/')->withCookie($cookie);
        return redirect('/');
    }
}
