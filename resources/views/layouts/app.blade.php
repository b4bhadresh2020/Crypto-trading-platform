<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" ng-app="Rentomoon">
    <head>
        <meta charset="utf-8">
        <base href="http://localhost:8000/trade" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="{{ asset('css/bootstrap.css') }}" rel="stylesheet">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">
        @yield('more_css')
        @yield('header_js')
        <title>{{ isset($title) ? $title : 'Rentomoon'  }}</title>
        <meta name="viewport" content="width=device-width" />
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.7/angular.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.7.7/angular-sanitize.js"></script>
        <script type="text/javascript">
          var global = {csrf_token: '{{ csrf_token() }}'};
        </script>
        <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="/">Logo</a>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="/">Menu 1</a>
                  </li>




                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown-help" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Help</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown-help">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" href="/trade">Trade</a>
                  </li>
                </ul>
                <ul class="navbar-nav mr-right">
                  @guest



                    <li class="nav-item {{ Request::is('register') ? 'active' : '' }}">
                      <a class="nav-link" href="{{ url('register') }}"><i class="fa fa-pencil-square-o"></i> Sing up free</a>
                    </li>
                    <li class="nav-item {{ Request::is('login') ? 'active' : '' }}">
                      <a class="nav-link" href="{{ url('login') }}"><i class="fa fa-sign-in"></i> Sign in</a>
                    </li>
                  @else
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown-account" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ Auth::user()->username }} <span class="caret"></span></a>
                      <div class="dropdown-menu" aria-labelledby="dropdown-account">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <a class="dropdown-item" href="{{ route('logout') }}"
                           onclick="event.preventDefault();
                                         document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                      </div>
                    </li>
                    <li class="nav-item {{ Request::is('account/wallet') ? 'active' : '' }}">
                      <a class="nav-link" href="{{ url('account/wallet') }}">Wallet</a>
                    </li>
                  @endguest


                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown-cur" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bitcoin</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown-cur">
                      <a class="dropdown-item" href="#">Ethereum</a>
                      <a class="dropdown-item" href="#">Stellar</a>
                      <a class="dropdown-item" href="#">Litecoin</a>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
          <div class="container">

            <main role="main">

               @yield('content')
</main>
</div>
<div class="footer">
<div class="clearfix"></div>

<hr>

<footer class="container">
  <div class="row footer-block">
    <div class="col-md-4 hidden-sm">
      <img id="footer-logo" src="" class="img-responsive"/>
    </div>
    <div class="col-md-2" id="col-about">
      <ul class="nav nav-list">
        <li class="nav-header">ABOUT</li>
        <li><a href="/about">About us</a></li>
        <li><a href="/careers">Careers</a></li>
        <li><a href="/fees">Fees</a></li>
        <li><a href="/whitehat">Security bounties</a></li>
        <li><a href="/statistics">Statistics</a></li>
        <li><a href="/terms_of_service/">Terms of service</a></li>
        <li><a href="/privacy_policy/">Privacy policy</a></li>
      </ul>
    </div>
    <div class="col-md-2" id="col-support">
      <ul class="nav nav-list">
        <li class="nav-header">SUPPORT</li>
        <li><a href="/support/request/">Contact support</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/guides/">Guides</a></li>
        <li><a href="/password_reset/">Forgot password</a></li>
      </ul>
    </div>
    <div class="col-md-2" id="col-services">
      <ul class="nav nav-list">
        <li class="nav-header">SERVICES</li>





<li class="dropdown" id="language-dropdown">



    <a class="dropdown-toggle" data-toggle="dropdown" href="#language-dropdown">
        <i class="fa fa-globe"></i>
        English
    </a>



    <ul class="dropdown-menu">





            <li id="lang-select-en">
                <a rel="nofollow" href="/language/set_language_improved?language=en&amp;next=/register/">
                    English (en)
                </a>
            </li>




            <li id="lang-select-es">
                <a rel="nofollow" href="/language/set_language_improved?language=es&amp;next=/register/">
                    español (es)
                </a>
            </li>




            <li id="lang-select-fr">
                <a rel="nofollow" href="/language/set_language_improved?language=fr&amp;next=/register/">
                    français (fr)
                </a>
            </li>




            <li id="lang-select-it">
                <a rel="nofollow" href="/language/set_language_improved?language=it&amp;next=/register/">
                    italiano (it)
                </a>
            </li>




            <li id="lang-select-ru">
                <a rel="nofollow" href="/language/set_language_improved?language=ru&amp;next=/register/">
                    Русский (ru)
                </a>
            </li>




            <li id="lang-select-pt-br">
                <a rel="nofollow" href="/language/set_language_improved?language=pt-br&amp;next=/register/">
                    Português Brasileiro (pt-br)
                </a>
            </li>




            <li id="lang-select-zh-cn">
                <a rel="nofollow" href="/language/set_language_improved?language=zh-cn&amp;next=/register/">
                    简体中文 (zh-cn)
                </a>
            </li>

    </ul>
</li>


        <li><a href="/api-docs/">API documentation</a></li>
        <li><a href="/atm/order-your-own-bitcoin-atm">ATM</a></li>
        <li><a href="/affiliate/">Affiliate</a></li>
        <li><a href="https://localbitcoinschain.com">Block Explorer</a></li>
      </ul>
    </div>
    <div class="col-md-2">
          <ul class="nav nav-list">
            <li class="nav-header">FOLLOW US</li>
            <li><a href="#">
              <i class="fa fa-fw fa-facebook"></i>
              &nbsp;Facebook
            </a></li>
            <li><a href="#">
              <i class="fa fa-fw fa-twitter"></i>
              &nbsp;Twitter
            </a></li>
            <li><a href="#">
              <i class="fa fa-fw fa-instagram"></i>
              &nbsp;Instagram
            </a></li>
            <li><a href="#">
              <i class="fa fa-fw fa-reddit-alien"></i>
              &nbsp;Reddit
            </a></li>
            <li><a href="/irc">
              <i class="fa fa-fw fa-hashtag"></i>
              &nbsp;IRC
            </a></li>
            <li><a href="/blog/">
              <i class="fa fa-fw fa-rss"></i>
              &nbsp;Blog
            </a></li>
            <li><a href="#">
              <i class="fa fa-fw fa-weibo"></i>
              &nbsp;Chinese Blog
            </a></li>
          </ul>
    </div>
  </div>
</footer>
</div>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

  @yield('js_content')

  <script>
    @if(auth()->check())
      @php
        $user = auth()->user();
        $userDetail = array(
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'api_token' => session()->get('access_token')
        );
      @endphp
      if (localStorage.getItem("currentUser") === null) {
        localStorage.setItem("currentUser", JSON.stringify({!! json_encode($userDetail) !!})); // Storing value with key
      }
    @else
      localStorage.removeItem("currentUser");
      localStorage.removeItem("BaseMarketId");
      localStorage.removeItem("MarketList");
      localStorage.removeItem("selectedMarket");
      localStorage.removeItem("chartInterval");
    @endif
  </script>
  </body>
  </html>