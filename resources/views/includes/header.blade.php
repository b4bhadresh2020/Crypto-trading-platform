<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
        {{ HTML::style('css/style.css') }}
        <title>{{ isset($title) ? $title : 'Rentomoon'  }}</title>
        <meta name="viewport" content="width=device-width" />
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <a class="navbar-brand" href="#">Rentomoon</a>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Rental Bitcoins</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Need a Rental Bitcoins <span class="sr-only">(current)</span></a>
                  </li>


                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown-help" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Help</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown-help">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <ul class="navbar-nav mr-right">
                  <li class="nav-item">
                    <a class="nav-link" href="{{ url('register') }}"><i class="fa fa-pencil-square-o"></i> Sing up free</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="{{ url('login') }}"><i class="fa fa-sign-in"></i> Sign in</a>
                  </li>
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
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
