<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <base href="/" />
  <title>Home | Exchanger</title>

  <link rel="stylesheet" href="http://localhost:8000/trade/assets/exchanger/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="http://localhost:8000/trade/assets/exchanger/css/style.css">
  <link rel="stylesheet" href="http://localhost:8000/trade/assets/exchanger/css/icons.css">
  <link rel="stylesheet" href="http://localhost:8000/trade/assets/exchanger/css/ui.css">
  <link rel="stylesheet" href="http://localhost:8000/trade/assets/css/ladda.min.css">
  <link rel="stylesheet" href="http://localhost:8000/trade/assets/css/toastr.min.css">
  <link rel="stylesheet" href="http://localhost:8000/trade/assets/css/bs-datepicker.min.css">
  <link rel="stylesheet" href="http://localhost:8000/trade/assets/exchanger/css/notifier.css">
  <link rel="stylesheet" href="http://localhost:8000/trade/assets/css/perfect-scrollbar.css">
  <link rel="stylesheet" href="http://localhost:8000/trade/assets/css/font-awesome.css">
  <!-- Favicon -->
  <link rel="icon" href="favicon.ico" />

  <!-- Meta -->
  <meta http-equiv="content-type" content="text/html" />
  <meta http-equiv="Cache-control" content="public" />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />

  <meta name="Description" content="meet the first cryptocurrency that changes your life" />
  <meta name="Keywords" content="exchange, coin, currency, bitcoin, btc, exchange, crypto, crypto currency" />
  <meta name="Language" content="English" />
  <meta name="distribution" content="Global" />
  <meta name="country" content="India" />

  <!-- For ssl -->
  <!-- <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> -->

  <!-- Apple -->
  <link rel="mask-icon" href="assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
  <meta name="apple-mobile-web-app-title" content="exchange" />
  <meta name="application-name" content="exchange" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />

  <!-- Android -->
  <link rel="manifest" href="http://localhost:8000/trade/manifest.json" />
  <meta name="theme-color" content="#ffffff" />

  <!-- Microsoft -->
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
  <meta name="theme-color" content="#ffffff" />

  <!-- Facebook meta tag -->
  <meta property="og:image:width" content="279" />
  <meta property="og:image:height" content="279" />
  <meta property="og:title" content="exchange" />
  <meta property="og:description" content="meet first cryptocurrency that change your life" />
  <meta property="og:url" content="http://www.exchange.exchange" />
  <meta property="og:image" content="http://www.exchange.exchange/assets/favicon/logo.png" />

  <!-- Style Sheet -->
  <link href="https://fonts.googleapis.com/css?family=Muli:300,400,600" rel="stylesheet" />

  <style type="text/css">
    .has-error .input-group-addon {
      color: #e8a9a7 !important;
      background-color: #f10b2a !important;
      border-color: #f10b2a !important;
    }

    .has-error .form-control {
      border-color: #f10b2a !important;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    }

    .has-error label {
      color: #f10b2a !important;
      font-weight: 600;
      font-size: 14px;
    }

    .loading {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
    }

    .loading i {
      color: #fff;
      position: absolute;
      top: 50%;
      margin-top: -34px;
      left: 50%;
      margin-left: -34px;
    }

    .app-loading {
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1111;
    }

    .app-loading .spinner {
      height: 200px;
      width: 200px;
      animation: rotate 2s linear infinite;
      transform-origin: center center;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 9999;
    }

    .app-loading .spinner .path {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      animation: dash 1.5s ease-in-out infinite;
      stroke-linecap: round;
      stroke: #ddd;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }

      50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
      }

      100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
      }
    }
  </style>
</head>

<body class="crypt-dark">
  <noscript>
    <h1>Sorry, but app is not available without javascript</h1>
  </noscript>
  <app-root>
    <div class="app-loading">
      <div class="logo"></div>
      <svg class="spinner" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
      </svg>
    </div>
  </app-root>
  <script src="http://localhost:8000/trade/assets/exchanger/js/jquery.js"></script>
  <script src="http://localhost:8000/trade/assets/exchanger/js/popper.min.js"></script>
  <script src="http://localhost:8000/trade/assets/exchanger/bootstrap/js/bootstrap.bundle.js"></script>
  <script src="http://localhost:8000/trade/assets/exchanger/bootstrap/js/bootstrap.js"></script>
  <script src="http://localhost:8000/trade/assets/exchanger/js/main.js"></script>
  <script src="http://localhost:8000/trade/assets/exchanger/js/amc.js"></script>
  <script src="http://localhost:8000/trade/assets/exchanger/js/tv.js"></script>

  <script type="text/javascript" src="http://localhost:8000/trade/assets/js/chart/anychart-base.min.js"></script>
  <script type="text/javascript" src="http://localhost:8000/trade/assets/js/chart/anychart-ui.min.js"></script>
  <script type="text/javascript" src="http://localhost:8000/trade/assets/js/chart/anychart-exports.min.js"></script>
  <script type="text/javascript" src="http://localhost:8000/trade/assets/js/chart/anychart-stock.min.js"></script>
  <script type="text/javascript"
    src="http://localhost:8000/trade/assets/js/chart/anychart-data-adapter.min.js"></script>
  <script type="text/javascript" src="http://localhost:8000/trade/assets/js/chart/dark_blue.min.js"></script>

  <!-- <script src="http://localhost:8000/trade/assets/js/socket.io.js"></script> -->
  <script type="text/javascript" src="http://localhost:8000/trade/runtime.js"></script>
  <script type="text/javascript" src="http://localhost:8000/trade/polyfills.js"></script>
  <script type="text/javascript" src="http://localhost:8000/trade/vendor.js"></script>
  <script type="text/javascript" src="http://localhost:8000/trade/main.js"></script>
</body>
</html>