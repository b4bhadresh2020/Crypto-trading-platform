@extends('layouts.app')
@section('content')
  <div class="container">

    <div class="row">
        <div class="col-md-6">

            <h2 class="login-heading bold-text">Login</h2>
            @if ($errors->has('login'))
              <div class="alert alert-danger ">
                <a class="close" href="#" data-dismiss="alert">×</a>

                <strong class="alert-heading">Error!</strong>


                {{ $errors->first('login') }}
              </div>
            @endif
            <form class="login-form" method="post" action="{{url('/login')}}" >
                @csrf
                <fieldset>
                    <div class="form-group">
                        <div class="controls ">
                          <label for="id_enail" class="control-label  requiredField">
                              Email or username<span class="asteriskField">*</span> </label>
                          <input id="email" type="text" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                          @if ($errors->has('email'))
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $errors->first('email') }}</strong>
                              </span>
                          @endif
                          </div>
                    </div>
                    <div class="form-group">
                      <label for="id_password" class="control-label  requiredField">
                          Password<span class="asteriskField">*</span> </label>
                        <div class="controls ">
                          <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                          @if ($errors->has('password'))
                              <span class="invalid-feedback" role="alert">
                                  <strong>{{ $errors->first('password') }}</strong>
                              </span>
                          @endif
                        </div>
                    </div>
                </fieldset>

                <div class="">
                    <label class="control-label">Please verify you are a human.</label>
                    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                    <div class="g-recaptcha" data-sitekey="6Le95uoSAAAAAH3LKzssY-LHQOMu6eBag0yqlA6O"></div>
                    <span class="help-block"><strong></strong></span>
                </div>

                <p>
                  <button type="submit" class="btn btn-success">
                      {{ __('Login') }}
                  </button>
                </p>
                <p>
                    <a class="login-form-a" href="/password/reset/">Forgot your password?</a>
                    <div class='login-link'>New to Retomoon?&nbsp;<a href="/register/">Sign up now!</a></div>
                </p>

            </form>

        </div>

    </div>

</div>
@endsection
