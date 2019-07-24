(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loading\" *ngIf=\"isLoading\"></div>\n<router-outlet></router-outlet>\n<notifier-container></notifier-container>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_interceptor_httpinterceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/interceptor/httpinterceptor */ "./src/app/core/interceptor/httpinterceptor.ts");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/service */ "./src/app/core/service/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(url, router, authenticationService, loadingService) {
        var _this = this;
        this.url = url;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loadingService = loadingService;
        this.authenticationService.isLoginChanged.subscribe(function (isLogins) {
            _this.isLogin = isLogins;
        });
        this.loadingService.onLoadingChanged.subscribe(function (isLoading) {
            return setTimeout(function () { return (_this.isLoading = isLoading); }, 0);
        });
        // this.CheckUserBlock();
    }
    AppComponent.prototype.ngOnInit = function () {
        // if (environment.production && location.protocol === 'http:') {
        //   window.location.href = location.href.replace('http', 'https');
        // }
        this.authenticationService.CheckUserLoggedIn();
        var currentUrl = this.url.path().substring(1);
        var str = ["login"];
        if ((currentUrl === "" && this.isLogin) || (this.isLogin && str.includes(currentUrl))) {
            this.router.navigate(["trade"]);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _core_interceptor_httpinterceptor__WEBPACK_IMPORTED_MODULE_3__["LoadingIndicatorService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui */ "./src/app/ui/index.ts");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trade/trade.component */ "./src/app/trade/trade.component.ts");
/* harmony import */ var _exchange_exchange_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./exchange/exchange.module */ "./src/app/exchange/exchange.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



///angular-notifier/styles.







// import { LoginComponent } from "./login/login.component";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            // declarations: [AppComponent, TradeComponent, LoginComponent],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _trade_trade_component__WEBPACK_IMPORTED_MODULE_8__["TradeComponent"]],
            imports: [
                // Angular
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // Core & Shared
                _core__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                // Feature
                _ui__WEBPACK_IMPORTED_MODULE_7__["UiModule"],
                // app
                _app_routes__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _exchange_exchange_module__WEBPACK_IMPORTED_MODULE_9__["ExchangeModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ui_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/notfound/notfound.component */ "./src/app/ui/notfound/notfound.component.ts");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trade/trade.component */ "./src/app/trade/trade.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { LoginComponent } from "./login/login.component";
var routes = [
    // { path: "", redirectTo: "/trade/:pair", pathMatch: "full" },
    { path: 'trade/:pair', component: _trade_trade_component__WEBPACK_IMPORTED_MODULE_3__["TradeComponent"] },
    { path: 'trade', component: _trade_trade_component__WEBPACK_IMPORTED_MODULE_3__["TradeComponent"] },
    // { path: "login", component: LoginComponent },
    { path: "**", component: _ui_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_2__["NotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule, httpFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFactory", function() { return httpFactory; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards */ "./src/app/core/guards/index.ts");
/* harmony import */ var _interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptor */ "./src/app/core/interceptor/index.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service */ "./src/app/core/service/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var service = [_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _service__WEBPACK_IMPORTED_MODULE_5__["ExchangeService"], _service__WEBPACK_IMPORTED_MODULE_5__["TradeService"], _service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _service__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _service__WEBPACK_IMPORTED_MODULE_5__["PusherService"]];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
            exports: [],
            declarations: [],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]
            ].concat(service, [
                _interceptor__WEBPACK_IMPORTED_MODULE_4__["LoadingIndicatorService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"],
                    multi: true
                }, {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useFactory: httpFactory,
                    multi: true,
                    deps: [_interceptor__WEBPACK_IMPORTED_MODULE_4__["LoadingIndicatorService"]]
                }
            ])
        })
    ], CoreModule);
    return CoreModule;
}());

function httpFactory(LoaderService) {
    return new _interceptor__WEBPACK_IMPORTED_MODULE_4__["LoaderHttpInterceptor"](LoaderService);
}


/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        // this.router.navigate(['/login']);
        window.location.href = "/login";
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/guards/index.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, httpFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "httpFactory", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["httpFactory"]; });




/***/ }),

/***/ "./src/app/core/interceptor/errorInterceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/core/interceptor/errorInterceptor.ts ***!
  \******************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "./node_modules/rxjs/internal/operators/catchError.js");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/toast.service */ "./src/app/core/service/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(toast, router) {
        this.toast = toast;
        this.router = router;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            switch (error.status) {
                case 400:
                    _this.router.navigate(['/notfound']);
                    break;
                // case 500:
                //   this.router.navigate(['/error']);
                //   break;
                case 405:
                    _this.router.navigate(['/error']);
                    break;
                case 408:
                    _this.router.navigate(['/error']);
                    break;
                case 502:
                    _this.router.navigate(['/error']);
                    break;
                case 503:
                    _this.router.navigate(['/error']);
                    break;
                case 504:
                    _this.router.navigate(['/error']);
                    break;
                case 429:
                    _this.router.navigate(['/error']);
                    break;
                case 403:
                    _this.toast.error('You cant access this page');
                    // this.router.navigate(['/error']);
                    break;
            }
            console.log('common errror: ');
            console.log(error);
            return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_service_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptor/httpinterceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/httpinterceptor.ts ***!
  \*****************************************************/
/*! exports provided: LoadingIndicatorService, LoaderHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorService", function() { return LoadingIndicatorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderHttpInterceptor", function() { return LoaderHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators/finalize */ "./node_modules/rxjs/internal/operators/finalize.js");
/* harmony import */ var rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingIndicatorService = /** @class */ (function () {
    function LoadingIndicatorService() {
        this.onLoadingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.requests = [];
    }
    LoadingIndicatorService.prototype.onStarted = function (req) {
        this.requests.push(req);
        this.notify();
    };
    LoadingIndicatorService.prototype.onFinished = function (req) {
        var index = this.requests.indexOf(req);
        if (index !== -1) {
            this.requests.splice(index, 1);
        }
        this.notify();
    };
    LoadingIndicatorService.prototype.notify = function () {
        this.onLoadingChanged.emit(this.requests.length !== 0);
    };
    LoadingIndicatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoadingIndicatorService);
    return LoadingIndicatorService;
}());

var LoaderHttpInterceptor = /** @class */ (function () {
    function LoaderHttpInterceptor(loadingIndicatorService) {
        this.loadingIndicatorService = loadingIndicatorService;
    }
    LoaderHttpInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.loadingIndicatorService.onStarted(req);
        return next.handle(req).pipe(Object(rxjs_internal_operators_finalize__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            _this.loadingIndicatorService.onFinished(req);
        }));
    };
    LoaderHttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [LoadingIndicatorService])
    ], LoaderHttpInterceptor);
    return LoaderHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptor/index.ts":
/*!*******************************************!*\
  !*** ./src/app/core/interceptor/index.ts ***!
  \*******************************************/
/*! exports provided: LoadingIndicatorService, LoaderHttpInterceptor, ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errorInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorInterceptor */ "./src/app/core/interceptor/errorInterceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _errorInterceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _httpinterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpinterceptor */ "./src/app/core/interceptor/httpinterceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorService", function() { return _httpinterceptor__WEBPACK_IMPORTED_MODULE_1__["LoadingIndicatorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderHttpInterceptor", function() { return _httpinterceptor__WEBPACK_IMPORTED_MODULE_1__["LoaderHttpInterceptor"]; });





/***/ }),

/***/ "./src/app/core/service/authentication.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/service/authentication.service.ts ***!
  \********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/core/service/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, httpService) {
        this.http = http;
        this.httpService = httpService;
        this.isUserNameChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isLoginChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AuthenticationService.prototype.Register = function (obj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/register", obj);
    };
    AuthenticationService.prototype.GetSetting = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "Setting");
    };
    AuthenticationService.prototype.Login = function (obj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "login", "email=" + obj.email + "&password=" + obj.password, this.httpService.GetHttpCommon());
    };
    AuthenticationService.prototype.Forgot = function (obj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "User/ForgotPassword/" + obj.email, this.httpService.GetAuthHttpCommon());
    };
    AuthenticationService.prototype.ConfirmEmail = function (code) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "User/ConfirmUser?code=" + code, this.httpService.GetAuthHttpCommon());
    };
    AuthenticationService.prototype.Reset = function (obj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "User/ResetPassword", JSON.stringify(obj), this.httpService.GetAuthHttpCommon());
    };
    AuthenticationService.prototype.CheckUserLoggedIn = function () {
        if (localStorage.getItem("currentUser")) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            /* const setDate: any = new Date(Date.parse(currentUser.updated_at));
            const currentDate: any = new Date();
            const hourdiff: number = currentDate - setDate;
            const hours = Math.floor(hourdiff / 3600 / 1000);
      
            if (hours >= 2) {
              this.isUserNameChanged.emit("");
              this.isLoginChanged.emit(false);
              localStorage.removeItem("currentUser");
              window.location.href = "/login";
              return false;
            } */
            var name_1 = "" + currentUser.name === ""
                ? currentUser.email
                : "" + currentUser.name;
            this.isUserNameChanged.emit(name_1);
            this.isLoginChanged.emit(true);
            return true;
        }
        this.isUserNameChanged.emit("");
        this.isLoginChanged.emit(false);
        return false;
    };
    AuthenticationService.prototype.GetUserName = function () {
        if (localStorage.getItem("currentUser")) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            return currentUser.Firstname === null || currentUser.Lastname === null
                ? currentUser.Email
                : currentUser.Firstname + " " + currentUser.Lastname;
        }
        return "";
    };
    AuthenticationService.prototype.Logout = function () {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("BaseMarketId");
        localStorage.removeItem("MarketList");
        localStorage.removeItem("selectedMarket");
        localStorage.removeItem("chartInterval");
        this.CheckUserLoggedIn();
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/service/exchange.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/service/exchange.service.ts ***!
  \**************************************************/
/*! exports provided: ExchangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeService", function() { return ExchangeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/core/service/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExchangeService = /** @class */ (function () {
    function ExchangeService(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    ExchangeService.prototype.GetOrder = function (currency) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "Exchange/GetOrder?currency=" + currency, this.httpService.GetHttpCommon());
    };
    ExchangeService.prototype.GetDailyExchange = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "DailyExchange/" + id, this.httpService.GetHttpCommon());
    };
    ExchangeService.prototype.GetBuyOrder = function (currency_pair_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "buy_orders/" + currency_pair_id, this.httpService.GetAuthHttpCommon());
    };
    ExchangeService.prototype.GetSellOrder = function (currency_pair_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "sell_orders/" + currency_pair_id, this.httpService.GetAuthHttpCommon());
    };
    ExchangeService.prototype.OrderStopLimit = function (model) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "private/orderStopLimit", "currency_pair_id=" + model.currency_pair_id + "&amount=" + model.amount + "\n      &stop=" + model.stop + "&limit=" + model.limit + "&side=" + model.side, this.httpService.GetAuthHttpCommon());
    };
    ExchangeService.prototype.BuyTrade = function (model) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "private/orders/create", "currency_pair_id=" + model.currency_pair_id + "&amount=" + model.amount + "&price=" + model.price + "&order_type=" + model.order_type + "&side=" + model.side, this.httpService.GetAuthHttpCommon());
    };
    ExchangeService.prototype.SellTrade = function (model) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "private/orders/create", "currency_pair_id=" + model.currency_pair_id + "&amount=" + model.amount + "&price=" + model.price + "&order_type=" + model.order_type + "&side=" + model.side, this.httpService.GetAuthHttpCommon());
    };
    ExchangeService.prototype.BuyMarketTrade = function (model) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "private/orders/create", "currency_pair_id=" + model.currency_pair_id + "&amount=" + model.amount + "&order_type=" + model.order_type + "&side=" + model.side, this.httpService.GetAuthHttpCommon());
    };
    ExchangeService.prototype.SellMarketTrade = function (model) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "private/orders/create", "currency_pair_id=" + model.currency_pair_id + "&amount=" + model.amount + "&order_type=" + model.order_type + "&side=" + model.side, this.httpService.GetAuthHttpCommon());
    };
    /* GetExchange() {
      return this.http.post(
        `${environment.apiUrl}Exchange/GetExchange`,
        this.httpService.GetAuthHttpCommon()
      );
    } */
    ExchangeService.prototype.GetUserTrade = function (obj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "private/orders", "order_status=" + obj.order_status + "&currency_pair_id=" + obj.currency_pair_id, this.httpService.GetAuthHttpCommon());
    };
    ExchangeService.prototype.userLogout = function () {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "logout", this.httpService.GetAuthHttpCommon());
    };
    ExchangeService.prototype.GetUserHistory = function (currency_pair_id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "trade_history/" + currency_pair_id, this.httpService.GetAuthHttpCommon());
    };
    ExchangeService.prototype.GetWalletBalance = function (obj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "private/walletAmount", "BaseCurrency=" + obj.BaseCurrency + "&MainCurrency=" + obj.MainCurrency, this.httpService.GetAuthHttpCommon());
    };
    /* GetMarketList(id: number) {
      return this.http.get(
        `${environment.apiUrl}currency_pair/${id}`,
        this.httpService.GetJsonHttpCommon()
      );
    } */
    ExchangeService.prototype.GetCurrencyPairs = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "currency_pairs", this.httpService.GetJsonHttpCommon());
    };
    ExchangeService.prototype.GetMarketListByName = function (pairName) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "currency_pair_name/" + pairName, this.httpService.GetJsonHttpCommon());
    };
    ExchangeService.prototype.CancelOrder = function (id) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "private/orders/cancel", "order_id=" + id, this.httpService.GetAuthHttpCommon());
    };
    ExchangeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], ExchangeService);
    return ExchangeService;
}());



/***/ }),

/***/ "./src/app/core/service/http.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/service/http.service.ts ***!
  \**********************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService.prototype.GetAuthHttpCommon = function () {
        var currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null;
        var token = currentUser && currentUser.api_token;
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set("Authorization", "Bearer " + token)
                .set("Accept", "application/json")
                .set("Content-Type", "application/x-www-form-urlencoded")
        };
    };
    HttpService.prototype.GetOnlyAuth = function () {
        var currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null;
        var token = currentUser && currentUser.api_token;
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set("Authorization", "Bearer " + token)
                .set("Accept", "application/json")
        };
    };
    HttpService.prototype.GetJsonHttpCommon = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Accept", "application/json")
        };
    };
    HttpService.prototype.GetHttpCommon = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set("Content-Type", "application/x-www-form-urlencoded")
                .set("Accept", "application/json")
        };
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/core/service/index.ts":
/*!***************************************!*\
  !*** ./src/app/core/service/index.ts ***!
  \***************************************/
/*! exports provided: ExchangeService, AuthenticationService, HttpService, ToastService, TradeService, UserService, PusherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/service/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _exchange_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange.service */ "./src/app/core/service/exchange.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangeService", function() { return _exchange_service__WEBPACK_IMPORTED_MODULE_1__["ExchangeService"]; });

/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/core/service/http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]; });

/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.service */ "./src/app/core/service/toast.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return _toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]; });

/* harmony import */ var _trade_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trade.service */ "./src/app/core/service/trade.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradeService", function() { return _trade_service__WEBPACK_IMPORTED_MODULE_4__["TradeService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/core/service/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]; });

/* harmony import */ var _pusher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pusher.service */ "./src/app/core/service/pusher.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PusherService", function() { return _pusher_service__WEBPACK_IMPORTED_MODULE_6__["PusherService"]; });










/***/ }),

/***/ "./src/app/core/service/pusher.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/service/pusher.service.ts ***!
  \************************************************/
/*! exports provided: PusherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PusherService", function() { return PusherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/core/service/http.service.ts");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PusherService = /** @class */ (function () {
    function PusherService(http, httpService) {
        var _this = this;
        this.http = http;
        this.httpService = httpService;
        // Private Channels
        this._ch_user_open_order = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_6__["List"])([]));
        this.ch_user_open_order = this._ch_user_open_order.asObservable();
        this._ch_user_confirm_order = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_6__["List"])([]));
        this.ch_user_confirm_order = this._ch_user_confirm_order.asObservable();
        this._ch_wallet_amount = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_6__["List"])([]));
        this.ch_wallet_amount = this._ch_wallet_amount.asObservable();
        this._ch_order_cancel = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_6__["List"])([]));
        this.ch_order_cancel = this._ch_order_cancel.asObservable();
        // Public Channels
        this._ch_buy_order = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_6__["List"])([]));
        this.ch_buy_order = this._ch_buy_order.asObservable();
        this._ch_sell_order = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_6__["List"])([]));
        this.ch_sell_order = this._ch_sell_order.asObservable();
        this._ch_pending_order = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_6__["List"])([]));
        this.ch_pending_order = this._ch_pending_order.asObservable();
        this._ch_chart = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_6__["List"])([]));
        this.ch_chart = this._ch_chart.asObservable();
        this._ch_currency_pair = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_6__["List"])([]));
        this.ch_currency_pair = this._ch_currency_pair.asObservable();
        this._ch_trade_history = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_6__["List"])([]));
        this.ch_trade_history = this._ch_trade_history.asObservable();
        this._ch_daily_exchange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(immutable__WEBPACK_IMPORTED_MODULE_6__["List"])([]));
        this.ch_daily_exchange = this._ch_daily_exchange.asObservable();
        this.channels = [];
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        }
        if (this.currentUser != undefined) {
            this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a('7b488ce6d8fea3f95cc6', {
                authEndpoint: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "pusher/auth",
                cluster: 'ap2',
                encrypted: true,
                auth: {
                    headers: {
                        'Authorization': "Bearer " + this.currentUser.api_token,
                        'Accept': "application/json"
                    }
                }
            });
            var channel = this.pusher.subscribe('private-user_open_order' + this.currentUser.id);
            channel.bind('App\\Events\\UserOpenOrder', function (data) {
                console.log(data.data);
                _this._ch_user_open_order.next(data.data);
            });
            var channel = this.pusher.subscribe('private-user_confirm_order' + this.currentUser.id);
            channel.bind('App\\Events\\UserConfirmOrder', function (data) {
                console.log(data.data);
                _this._ch_user_confirm_order.next(data.data);
            });
            var channel = this.pusher.subscribe('private-wallet_amount' + this.currentUser.id);
            channel.bind('App\\Events\\WalletAmount', function (data) {
                _this._ch_wallet_amount.next(data.data);
            });
            var channel = this.pusher.subscribe('private-order_cancel' + this.currentUser.id);
            channel.bind('App\\Events\\OrderCancel', function (data) {
                console.log(data.data);
                _this._ch_order_cancel.next(data.data);
            });
        }
        else {
            this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a('7b488ce6d8fea3f95cc6', {
                cluster: 'ap2',
                encrypted: true
            });
        }
        var channel = this.pusher.subscribe('buy_order');
        channel.bind('App\\Events\\BuyOrder', function (data) {
            _this._ch_buy_order.next(data.data);
        });
        var channel = this.pusher.subscribe('sell_order');
        channel.bind('App\\Events\\SellOrder', function (data) {
            _this._ch_sell_order.next(data.data);
        });
        var channel = this.pusher.subscribe('pending_order');
        channel.bind('App\\Events\\PendingOrder', function (data) {
            _this._ch_pending_order.next(data.data);
        });
        var channel = this.pusher.subscribe('chart');
        channel.bind('App\\Events\\Chart', function (data) {
            _this._ch_chart.next(data.data);
        });
        var channel = this.pusher.subscribe('currency_pair');
        channel.bind('App\\Events\\CurrencyPair', function (data) {
            _this._ch_currency_pair.next(data.data);
        });
        var channel = this.pusher.subscribe('trade_history');
        channel.bind('App\\Events\\TradeHistory', function (data) {
            _this._ch_trade_history.next(data.data);
        });
        var channel = this.pusher.subscribe('daily_exchange');
        channel.bind('App\\Events\\DailyExchange', function (data) {
            console.log(data.data);
            _this._ch_daily_exchange.next(data.data);
        });
    }
    PusherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], PusherService);
    return PusherService;
}());



/***/ }),

/***/ "./src/app/core/service/toast.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/service/toast.service.ts ***!
  \***********************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService(notifierService) {
        this.notifierService = notifierService;
    }
    ToastService.prototype.success = function (message) {
        this.notifierService.notify("success", message);
    };
    ToastService.prototype.warning = function (message) {
        this.notifierService.notify("warning", message);
    };
    ToastService.prototype.error = function (message) {
        this.notifierService.notify("error", message);
    };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/core/service/trade.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/service/trade.service.ts ***!
  \***********************************************/
/*! exports provided: TradeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeService", function() { return TradeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/ReplaySubject */ "./node_modules/rxjs/internal/ReplaySubject.js");
/* harmony import */ var rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { HubConnection, HubConnectionBuilder, LogLevel } from "@aspnet/signalr";

var TradeService = /** @class */ (function () {
    function TradeService() {
        // private hubConnection: HubConnection;
        this.dailyExchangeDataStream = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.orderStream = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.tradeHistoryStream = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.chartRefreshStream = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.marketRefreshStream = new rxjs_internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
        this.init();
    }
    TradeService.prototype.dailyExchangeAll$ = function () {
        return this.dailyExchangeDataStream.asObservable();
    };
    TradeService.prototype.orderAll$ = function () {
        return this.orderStream.asObservable();
    };
    TradeService.prototype.tradeHistoryAll$ = function () {
        return this.tradeHistoryStream.asObservable();
    };
    TradeService.prototype.chartRefreshAll$ = function () {
        return this.chartRefreshStream.asObservable();
    };
    TradeService.prototype.marketRefreshAll$ = function () {
        return this.marketRefreshStream.asObservable();
    };
    TradeService.prototype.GetDailyExchange = function (pairId) {
        // this.hubConnection
        //   .invoke("getDailyExchange", pairId)
        //   .catch(err => console.error(err));
    };
    TradeService.prototype.GetOrder = function (pairId) {
        // this.hubConnection
        //   .invoke("getOrder", pairId)
        //   .catch(err => console.error(err));
    };
    TradeService.prototype.TradeHistory = function (pairId) {
        // this.hubConnection
        //   .invoke("tradeHistory", pairId)
        //   .catch(err => console.error(err));
    };
    TradeService.prototype.ChartRefresh = function () {
        // this.hubConnection.invoke("chartRefresh").catch(err => console.error(err));
    };
    TradeService.prototype.MarketRefresh = function (baseMarketId) {
        // this.hubConnection
        //   .invoke("marketRefresh", baseMarketId)
        //   .catch(err => console.error(err));
    };
    TradeService.prototype.init = function () {
        // this.hubConnection = new HubConnectionBuilder()
        //   .withUrl(environment.tradeUrl)
        //   .configureLogging(LogLevel.Error)
        //   .configureLogging(LogLevel.Warning)
        //   .build();
        // this.hubConnection.on("getDailyExchange", data => {
        //   this.dailyExchangeDataStream.next(data);
        // });
        // this.hubConnection.on("getOrder", data => {
        //   this.orderStream.next(data);
        // });
        // this.hubConnection.on("tradeHistory", data => {
        //   this.tradeHistoryStream.next(data);
        // });
        // this.hubConnection.on("chartRefresh", data => {
        //   this.chartRefreshStream.next(data);
        // });
        // this.hubConnection.on("marketRefresh", data => {
        //   this.marketRefreshStream.next(data);
        // });
        // this.hubConnection.start().catch(() => {
        //   console.log("Signalr error");
        // });
    };
    TradeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TradeService);
    return TradeService;
}());



/***/ }),

/***/ "./src/app/core/service/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/service/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/core/service/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, httpService) {
        this.http = http;
        this.httpService = httpService;
    }
    UserService.prototype.SaveUserProfile = function (obj) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "User", obj, this.httpService.GetOnlyAuth());
    };
    UserService.prototype.GetUserDetails = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "User/GetUser", this.httpService.GetAuthHttpCommon());
    };
    UserService.prototype.ChangePassword = function (obj) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "User/ChangePassword", obj, this.httpService.GetAuthHttpCommon());
    };
    UserService.prototype.GetOpenOrderList = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "all_orders", this.httpService.GetJsonHttpCommon());
    };
    UserService.prototype.GetUserBalance = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "User/GetUserBalance", this.httpService.GetAuthHttpCommon());
    };
    UserService.prototype.GetWalletDetail = function (currencyId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "Withdraw/GetWalletDetail/" + currencyId, this.httpService.GetAuthHttpCommon());
    };
    UserService.prototype.GetStopLimit = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "User/GetStopLimit", this.httpService.GetAuthHttpCommon());
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/exchange/chart/chart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/exchange/chart/chart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- new theme -->\r\n<app-loader [IsLoading]=\"isDailyExchangeLoader\"></app-loader>\r\n\r\n<div class=\"crypt-gross-market-cap mt-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-3 col-sm-6 col-md-6 col-lg-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n          <p>Last Price BTC</p>\r\n          <p>{{ dailyExchange.lastPrice | appDynamicDigit: 8 }} </p>\r\n        </div>\r\n        <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n          <p>Change BTC</p>\r\n          <p class=\"crypt-down\">{{ dailyExchange.dailyChange | appDynamicDigit: 2 }}% </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3 col-sm-2 col-md-3 col-lg-2\">\r\n      <p>High</p>\r\n      <p class=\"crypt-up\">{{ dailyExchange.highest24hours | appDynamicDigit: 8 }}</p>\r\n    </div>\r\n    <div class=\"col-3 col-sm-2 col-md-3 col-lg-2\">\r\n      <p>Low</p>\r\n      <p class=\"crypt-down\">{{ dailyExchange.lowest24hours | appDynamicDigit: 8 }}</p>\r\n    </div>\r\n    <div class=\"col-3 col-sm-2 col-md-3 col-lg-2\">\r\n      <p>Volume 24Hr</p>\r\n      <p class=\"crypt-down\">{{ dailyExchange.volume24hours | appDynamicDigit: 8 }}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"tradingview-widget-container mb-3\">\r\n  <div id=\"crypt-candle-chart\"></div>\r\n</div> -->\r\n\r\n<div class=\"clschart\" *ngIf=\"!isOriginal\">\r\n  <app-original-chart [pairId]=\"pairId\" [baseCurrency]=\"baseCurrency\" [mainCurrency]=\"mainCurrency\">\r\n  </app-original-chart>\r\n</div>\r\n<!-- <div class=\"clschart\" *ngIf=\"isOriginal\">\r\n  <app-depth-chart [pairId]=\"pairId\" [baseCurrency]=\"baseCurrency\" [mainCurrency]=\"mainCurrency\"></app-depth-chart>\r\n</div> -->\r\n<!-- <ul class=\"btn-group-add-chart col-md-offset-9 col-md-3\">\r\n    <li>\r\n      <button class=\"btn btn-sm\" (click)=\"showHideChart(1)\">Original</button>\r\n    </li>\r\n    <li>\r\n      <button class=\"btn btn-sm\" (click)=\"showHideChart(2)\">Depth</button>\r\n    </li>\r\n  </ul> -->"

/***/ }),

/***/ "./src/app/exchange/chart/chart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/exchange/chart/chart.component.ts ***!
  \***************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/service */ "./src/app/core/service/index.ts");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/model */ "./src/app/shared/model/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartComponent = /** @class */ (function () {
    function ChartComponent(tradeService, exchangeService, pusher) {
        this.tradeService = tradeService;
        this.exchangeService = exchangeService;
        this.pusher = pusher;
        this.loading = false;
        this.dailyExchange = new _shared_model__WEBPACK_IMPORTED_MODULE_2__["DailyExchange"]();
        this.isDailyExchangeLoader = false;
        this.isOriginal = false;
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pusher.ch_daily_exchange.subscribe(function (exchange) {
            if (exchange.original != undefined)
                _this.dailyExchange = exchange.original.data;
        });
    };
    ChartComponent.prototype.ngOnChanges = function (change) {
        this.pairName = this.mainCurrency + "/" + this.baseCurrency;
        this.pairId = change.pairId !== undefined ? change.pairId.currentValue : this.pairId;
        this.GetDailyExchange();
    };
    ChartComponent.prototype.GetDailyExchange = function () {
        var _this = this;
        this.isDailyExchangeLoader = true;
        this.exchangeService.GetDailyExchange(this.pairId).subscribe(function (res) {
            if (res.success == true) {
                if (Object.keys(res.data).length > 0) {
                    _this.dailyExchange = res.data;
                }
                else {
                    _this.dailyExchange = new _shared_model__WEBPACK_IMPORTED_MODULE_2__["DailyExchange"]();
                }
            }
            _this.isDailyExchangeLoader = false;
        }, function (err) {
            _this.isDailyExchangeLoader = false;
            console.log(err);
        });
    };
    ChartComponent.prototype.showHideChart = function (type) {
        if (type === 2) {
            this.isOriginal = true;
        }
        else {
            this.isOriginal = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ChartComponent.prototype, "pairId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChartComponent.prototype, "baseCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ChartComponent.prototype, "mainCurrency", void 0);
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-chart",
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/exchange/chart/chart.component.html")
        }),
        __metadata("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_1__["TradeService"],
            _core_service__WEBPACK_IMPORTED_MODULE_1__["ExchangeService"],
            _core_service__WEBPACK_IMPORTED_MODULE_1__["PusherService"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/exchange/exchange.module.ts":
/*!*********************************************!*\
  !*** ./src/app/exchange/exchange.module.ts ***!
  \*********************************************/
/*! exports provided: ExchangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeModule", function() { return ExchangeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui */ "./src/app/ui/index.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/exchange/chart/chart.component.ts");
/* harmony import */ var _exchange_exchange_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exchange/exchange.component */ "./src/app/exchange/exchange/exchange.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/exchange/orders/orders.component.ts");
/* harmony import */ var _stoplimit_stoplimit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stoplimit/stoplimit.component */ "./src/app/exchange/stoplimit/stoplimit.component.ts");
/* harmony import */ var _original_chart_original_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./original-chart/original-chart.component */ "./src/app/exchange/original-chart/original-chart.component.ts");
/* harmony import */ var _market_exchange_market_exchange_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./market-exchange/market-exchange.component */ "./src/app/exchange/market-exchange/market-exchange.component.ts");
/* harmony import */ var _home_trade_history_home_trade_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-trade-history/home-trade-history.component */ "./src/app/exchange/home-trade-history/home-trade-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var component = [_orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"], _stoplimit_stoplimit_component__WEBPACK_IMPORTED_MODULE_6__["StoplimitComponent"],
    _exchange_exchange_component__WEBPACK_IMPORTED_MODULE_4__["ExchangeComponent"], _original_chart_original_chart_component__WEBPACK_IMPORTED_MODULE_7__["OriginalChartComponent"], _market_exchange_market_exchange_component__WEBPACK_IMPORTED_MODULE_8__["MarketExchangeComponent"], _home_trade_history_home_trade_history_component__WEBPACK_IMPORTED_MODULE_9__["HomeTradeHistoryComponent"]];
var ExchangeModule = /** @class */ (function () {
    function ExchangeModule() {
    }
    ExchangeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: component.slice(),
            exports: component.slice(),
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _ui__WEBPACK_IMPORTED_MODULE_2__["UiModule"]
            ],
        })
    ], ExchangeModule);
    return ExchangeModule;
}());



/***/ }),

/***/ "./src/app/exchange/exchange/exchange.component.html":
/*!***********************************************************!*\
  !*** ./src/app/exchange/exchange/exchange.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- new theme -->\n<div class=\"crypt-boxed-area\">\n  <ul class=\"nav nav-tabs\">\n    <li role=\"presentation\">\n      <a href=\"#limit\" class=\"active\" data-toggle=\"tab\">Limit</a>\n    </li>\n    <li role=\"presentation\">\n      <a href=\"#market\" data-toggle=\"tab\">market </a>\n    </li>\n    <li role=\"presentation\">\n      <a href=\"#stop-limit\" data-toggle=\"tab\">Stop Limit</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\">\n    <div role=\"tabpanel\" class=\"tab-pane active\" id=\"limit\">\n      <div class=\"row no-gutters\">\n        <app-loader [IsLoading]=\"isBuyLoading\"></app-loader>\n        <div class=\"col-md-6\">\n          <div class=\"crypt-buy-sell-form\">\n            <p>\n              Buy <span class=\"crypt-up\">{{ exchange.MainCurrency }}</span>\n              <span class=\"fright\" *ngIf=\"exchange.BaseValue != null\">\n                Available:\n                <b class=\"crypt-up\" (click)=\"BuyBaseValueClick()\" style=\"cursor: pointer;\">\n                  {{ exchange.BaseValue | appDynamicDigit: 8 }}\n                  {{ exchange.BaseCurrency }}\n                </b>\n              </span>\n            </p>\n            <div class=\"crypt-buy\">\n              <form novalidate [formGroup]=\"buyForm\" (ngSubmit)=\"Buy(buyForm.value, buyForm.valid)\">\n                <div class=\"input-group mb-2\"\n                  [ngClass]=\"{'has-error': isBuySubmitted && buyForm.get('price').hasError('required')}\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Price</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Price\" formControlName=\"price\"\n                    [(ngModel)]=\"exchange.BuyPrice\" (keyup)=\"SetBuytotal('price')\" appEightDigit />\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      {{ exchange.BaseCurrency }}</span>\n                  </div>\n                </div>\n                <div class=\"input-group mb-2\"\n                  [ngClass]=\"{'has-error': isBuySubmitted && buyForm.get('amount').hasError('required')}\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Amount</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" placeholder=\"Enter Amount\" formControlName=\"amount\"\n                    (keyup)=\"SetBuytotal('amount')\" [(ngModel)]=\"exchange.BuyAmount\" appEightDigit />\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      {{ exchange.MainCurrency }}</span>\n                  </div>\n                </div>\n                <div class=\"input-group mb-2 rate-per\">\n                  <div class=\"btn-group-add btn-group\">\n                    <button type=\"button\" class=\"btn btn-sm\" *ngFor=\"let item of arrBalPerc\"\n                      (click)=\"calcBalance(item, 'buy')\">\n                      {{ item }}%\n                    </button>\n                  </div>\n                </div>\n                <div class=\"input-group mb-2\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Total</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"0.00\" formControlName=\"total\"\n                    [(ngModel)]=\"exchange.BuyTotalFees\" (keyup)=\"SetBuytotal('total')\" appEightDigt />\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">\n                      {{ exchange.BaseCurrency }}\n                    </span>\n                  </div>\n                  <span class=\"error-msg\" *ngIf=\"isBuySubmitted &&\n                    buyForm.get('total').hasError('rangeValidation')\">\n                    You have only {{ exchange.BaseValue }}\n                    {{ exchange.BaseCurrency }}\n                  </span>\n                  <span class=\"error-msg\" *ngIf=\"isBuySubmitted &&\n                    buyForm.get('total').hasError('minimumValidation')\">\n                    Minimum {{ exchange.BuyMinimum }}\n                    {{ exchange.BaseCurrency }} for Buy Trade\n                  </span>\n                </div>\n                <div>\n                  <p>\n                    Fee: <span class=\"fright\">{{ exchange.BuyFees }}</span>\n                  </p>\n                </div>\n                <div *ngIf=\"!isLogin\">\n                  <div class=\"col-md-12\">\n                    <button type=\"button\" class=\"btn crypt-button-red-full\">\n                      <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('login')\">Login</span> or\n                      <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('register')\">Register</span> to Trade\n                    </button>\n                  </div>\n                </div>\n                <div *ngIf=\"isLogin\">\n                  <div class=\"col-md-12\">\n                    <button type=\"submit\" class=\"btn crypt-button-green-full\" [ladda]=\"isBuyLoading\">\n                      <span>Buy {{ exchange.MainCurrency }}</span>\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"crypt-buy-sell-form\">\n            <p>\n              Sell <span class=\"crypt-down\">{{ exchange.MainCurrency }}</span>\n              <span class=\"fright\">Available:\n                <b class=\"crypt-down\" (click)=\"SellBaseValueClick()\" style=\"cursor: pointer;\">{{ exchange.MainValue | appDynamicDigit: 8\n                  }}\n                  {{ exchange.MainCurrency }}</b></span>\n            </p>\n            <div class=\"crypt-sell\">\n              <form novalidate [formGroup]=\"sellForm\" (ngSubmit)=\"Sell(sellForm.value, sellForm.valid)\">\n                <div class=\"input-group mb-2\"\n                  [ngClass]=\"{'has-error': isSellSubmitted && sellForm.get('price').hasError('required')}\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Price</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"price\" placeholder=\"0.00\"\n                    (keyup)=\"SetSelltotal('PRICE')\" [(ngModel)]=\"exchange.SellPrice\" placeholder=\"Enter Price\"\n                    appEightDigit />\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">{{\n                      exchange.BaseCurrency\n                      }}</span>\n                  </div>\n                </div>\n                <div class=\"input-group mb-2\"\n                  [ngClass]=\"{'has-error': isSellSubmitted && sellForm.get('amount').hasError('required')}\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Amount</span>\n                  </div>\n                  <input type=\"number\" class=\"form-control\" formControlName=\"amount\" placeholder=\"0.00\"\n                    (keyup)=\"SetSelltotal('AMOUNT')\" [(ngModel)]=\"exchange.SellAmount\" placeholder=\"Enter Amount\"\n                    appEightDigit />\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">{{\n                      exchange.MainCurrency\n                      }}</span>\n                  </div>\n                </div>\n                <div class=\"input-group mb-2 rate-per\">\n                  <div class=\"btn-group-add btn-group\">\n                    <button type=\"button\" class=\"btn btn-sm\" *ngFor=\"let item of arrBalPerc\"\n                      (click)=\"calcBalance(item, 'sell')\">\n                      {{ item }}%\n                    </button>\n                  </div>\n                </div>\n                <div class=\"input-group mb-2\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">Total</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"total\" placeholder=\"0.00\"\n                    (keyup)=\"SetSelltotal('TOTAL')\" [(ngModel)]=\"exchange.SellTotal\" placeholder=\"0.000000000\"\n                    appEightDigit />\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">{{\n                      exchange.BaseCurrency\n                      }}</span>\n                  </div>\n                  <span class=\"error-msg\" *ngIf=\"isSellSubmitted &&\n                    sellForm.get('total').hasError('rangeValidation')\">\n                    You have only {{ exchange.MainValue }}\n                    {{ exchange.MainCurrency }}\n                  </span>\n                  <span class=\"error-msg\" *ngIf=\"isSellSubmitted &&\n                    sellForm.get('total').hasError('minimumValidation')\">Minimum\n                    {{ exchange.SellMinimum }}\n                    {{ exchange.BaseCurrency }} for Sell Trade</span>\n                </div>\n                <div>\n                  <p>\n                    Fee: <span class=\"fright\">{{ exchange.SellFees }}%</span>\n                  </p>\n                </div>\n                <div class=\"mt-1\" *ngIf=\"!isLogin\">\n                  <button type=\"button\" class=\"btn crypt-button-red-full\">\n                    <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('login')\">Login</span> or\n                    <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('register')\">Register</span> to Trade\n                  </button>\n                </div>\n                <div *ngIf=\"isLogin\">\n                  <button type=\"submit\" class=\"btn crypt-button-red-full\" [ladda]=\"isSellLoading\">\n                    <span>Sell {{ exchange.MainCurrency }}</span>\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"market\">\n      <app-market-exchange [pairId]=\"pairId\" [baseCurrency]=\"baseCurrency\" [mainCurrency]=\"mainCurrency\"\n        [baseValue]=\"baseValue\" [mainValue]=\"mainValue\">\n      </app-market-exchange>\n    </div>\n    <div role=\"tabpanel\" class=\"tab-pane\" id=\"stop-limit\">\n      <app-stoplimit [pairId]=\"pairId\" [baseCurrency]=\"baseCurrency\" [mainCurrency]=\"mainCurrency\"\n        [baseValue]=\"baseValue\" [mainValue]=\"mainValue\"></app-stoplimit>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade modal-order cs-modal\" bsModal #modal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"mySmallModalLabel\" [config]=\"{ backdrop: 'static' }\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Order Details</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"bs-modal\" (click)=\"ClosePopUp()\">\n          &times;\n        </button>\n      </div>\n      <div class=\"modal-body xs-p-30\" *ngIf=\"isOpen\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"text-info\" [innerHTML]=\"buysellmsg\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"col-md-12 text-right xs-mt-20\">\n          <button type=\"button\" class=\"btn btn-sm btn-primary\" data-dismiss=\"bs-modal\" (click)=\"ClosePopUp()\">\n            Close\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/exchange/exchange/exchange.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/exchange/exchange/exchange.component.ts ***!
  \*********************************************************/
/*! exports provided: ExchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeComponent", function() { return ExchangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/service */ "./src/app/core/service/index.ts");
/* harmony import */ var _shared_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/common */ "./src/app/shared/common/index.ts");
/* harmony import */ var _shared_common_common_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/common/common.validator */ "./src/app/shared/common/common.validator.ts");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/model */ "./src/app/shared/model/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExchangeComponent = /** @class */ (function () {
    function ExchangeComponent(authenticationService, exchangeService, fb, toast, router, tradeService, pusher, common) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.exchangeService = exchangeService;
        this.fb = fb;
        this.toast = toast;
        this.router = router;
        this.tradeService = tradeService;
        this.pusher = pusher;
        this.common = common;
        this.isOpen = false;
        this.buysellmsg = "";
        this.exchange = new _shared_model__WEBPACK_IMPORTED_MODULE_7__["ExchangeModal"]();
        this.dailyExchange = new _shared_model__WEBPACK_IMPORTED_MODULE_7__["DailyExchange"]();
        this.isBuyLoading = false;
        this.isSellLoading = false;
        this.isSellSubmitted = false;
        this.isBuySubmitted = false;
        this.isDailyExchangeLoader = false;
        this.arrBalPerc = [25, 50, 75, 100];
        Pusher.logToConsole = true;
        this.authenticationService.isLoginChanged.subscribe(function (isLogin) {
            setTimeout(function () { return (_this.isLogin = isLogin); }, 0);
        });
    }
    ExchangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.BindData();
        this.authenticationService.CheckUserLoggedIn();
        this.pusher.ch_wallet_amount.subscribe(function (wallet) {
            if (wallet.original != undefined)
                _this.BindExchange(wallet.original.data);
        });
    };
    ExchangeComponent.prototype.ngOnChanges = function (change) {
        if (change.pairId !== undefined) {
            this.pairId =
                change.pairId !== undefined ? change.pairId.currentValue : this.pairId;
        }
        if (change.baseCurrency !== undefined ||
            change.mainCurrency !== undefined) {
            this.exchange.BaseCurrency =
                change.baseCurrency !== undefined
                    ? change.baseCurrency.currentValue
                    : this.baseCurrency;
            this.exchange.MainCurrency =
                change.mainCurrency !== undefined
                    ? change.mainCurrency.currentValue
                    : this.mainCurrency;
            this.pairName = this.mainCurrency + "/" + this.baseCurrency;
            this.GetWalletBalance(change);
        }
        else {
            var type = change.hasOwnProperty('sellModel') ? 'sellModel' : change.hasOwnProperty('buyModel') ? 'buyModel' : '';
            if (type === 'sellModel') {
                this.ChangeUpdateModel(change.sellModel.currentValue);
            }
            if (type === 'buyModel') {
                this.ChangeUpdateModel(change.buyModel.currentValue);
            }
        }
    };
    ExchangeComponent.prototype.ChangeUpdateModel = function (change) {
        if ((change.price !== undefined || change.amount !== undefined) && change.side === 'SELL') {
            this.exchange.BuyPrice = change.price;
            this.exchange.BuyAmount = change.amount;
            this.total = change.price * change.amount;
            this.exchange.BuyTotalFees = parseFloat(this.total.toString()).toFixed(8);
        }
        if ((change.price !== undefined || change.amount !== undefined) && change.side === 'BUY') {
            this.exchange.SellPrice = change.price;
            this.exchange.SellAmount = change.amount;
            this.total = change.price * change.amount;
            this.exchange.SellTotal = parseFloat(this.total.toString()).toFixed(8);
        }
        if (change.sellModel !== undefined) {
            if (this.sellModel != null) {
                this.exchange.BuyPrice = this.common.toFixedCustom(this.sellModel.Price, 8);
            }
        }
        if (change.buyModel !== undefined) {
            if (this.buyModel != null) {
                this.exchange.SellPrice = this.common.toFixedCustom(this.buyModel.Price, 8);
            }
        }
    };
    ExchangeComponent.prototype.GetWalletBalance = function (change) {
        var _this = this;
        this.ResetForm();
        var obj = {
            BaseCurrency: this.baseCurrency,
            MainCurrency: this.mainCurrency
        };
        this.exchangeService.GetWalletBalance(obj).subscribe(function (res) {
            if (res.success == true) {
                _this.BindExchange(res.data);
                _this.baseValue = res.data.BaseCurrencyValue;
                _this.mainValue = res.data.MainCurrencyValue;
                if (change != null) {
                    _this.ChangeUpdateModel(change);
                }
            }
            else {
                if (res.output != undefined && res.output != "")
                    _this.toast.error(res.output);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ExchangeComponent.prototype.BindExchange = function (data) {
        this.exchange.BaseValue = data.BaseCurrencyValue;
        this.exchange.MainValue = data.MainCurrencyValue;
        this.exchange.BuyFees = data.TradeFees;
        this.exchange.SellFees = data.TradeFees;
        this.exchange.BuyMinimum = data.MinTrade;
        this.exchange.SellMinimum = data.MinTrade;
        this.buyForm.patchValue({ Range: this.exchange.BaseValue });
        this.sellForm.patchValue({ Range: this.exchange.MainValue });
        this.buyForm.patchValue({ Minimum: data.MinTrade });
        this.sellForm.patchValue({ Minimum: data.MinTrade });
    };
    ExchangeComponent.prototype.ResetForm = function () {
        this.exchange.BuyPrice = null;
        this.exchange.BuyAmount = null;
        this.exchange.BuyTotalFees = null;
        this.exchange.BuyTotal = null;
        this.exchange.SellPrice = null;
        this.exchange.SellAmount = null;
        this.exchange.SellTotalFees = null;
        this.exchange.SellTotal = null;
        this.isBuySubmitted = false;
        this.isSellSubmitted = false;
    };
    ExchangeComponent.prototype.BindData = function () {
        this.buyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            minimum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            range: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _shared_common_common_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].RangeValidationBuy,
                _shared_common_common_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].MinimumValidation
            ])
        });
        this.sellForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            minimum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            range: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
            total: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _shared_common_common_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].RangeValidationSell,
                _shared_common_common_validator__WEBPACK_IMPORTED_MODULE_6__["Validator"].MinimumValidation
            ])
        });
    };
    ExchangeComponent.prototype.SetBuytotal = function (event) {
        if (event === "amount" || event === "price") {
            if (this.common.IsNumeric(this.exchange.BuyAmount) &&
                this.common.IsNumeric(this.exchange.BuyPrice)) {
                this.exchange.BuyTotalFees = (this.exchange.BuyAmount * this.exchange.BuyPrice).toFixed(8);
                this.exchange.BuyTotal = parseFloat(this.exchange.BuyTotalFees +
                    parseFloat(this.exchange.BuyTotalFees) *
                        (parseFloat(this.exchange.BuyFees) / 100)).toFixed(8);
            }
            else {
                this.exchange.BuyTotal = "";
                this.exchange.BuyTotalFees = "";
            }
        }
        else if (event === "total") {
            if (this.common.IsNumeric(this.exchange.BuyTotalFees) &&
                this.common.IsNumeric(this.exchange.BuyPrice)) {
                this.exchange.BuyAmount = parseFloat((parseFloat(this.exchange.BuyTotalFees) / this.exchange.BuyPrice).toFixed(8));
                this.exchange.BuyTotal = parseFloat(this.exchange.BuyTotalFees +
                    parseFloat(this.exchange.BuyTotalFees) *
                        (parseFloat(this.exchange.BuyFees) / 100)).toFixed(8);
            }
            else {
                this.exchange.BuyAmount = null;
            }
        }
    };
    ExchangeComponent.prototype.Buy = function (model, isValid) {
        var _this = this;
        this.isBuySubmitted = true;
        if (isValid) {
            this.isBuyLoading = true;
            var obj = {
                currency_pair_id: this.pairId,
                amount: model.amount,
                price: model.price,
                order_type: "LIMIT",
                side: "BUY"
            };
            this.exchangeService.BuyTrade(obj).subscribe(function (res) {
                if (res.success == true) {
                    _this.isBuySubmitted = false;
                    _this.ResetForm();
                    if (res.output != undefined && res.output != "")
                        _this.toast.success(res.output);
                }
                else {
                    if (res.output != undefined && res.output != "")
                        _this.toast.error(res.output);
                }
                _this.isBuyLoading = false;
            }, function (err) {
                _this.isBuyLoading = false;
                console.log(err);
            });
        }
    };
    ExchangeComponent.prototype.SetSelltotal = function (event) {
        if (event.toUpperCase() === "AMOUNT" || event.toUpperCase() === "PRICE") {
            if (this.common.IsNumeric(this.exchange.SellPrice) &&
                this.common.IsNumeric(this.exchange.SellAmount)) {
                this.exchange.SellTotal = (this.exchange.SellAmount * this.exchange.SellPrice).toFixed(8);
            }
            else {
                this.exchange.SellTotal = null;
            }
        }
        if (event.toUpperCase() === "TOTAL") {
            if (this.common.IsNumeric(this.exchange.SellTotal) &&
                this.common.IsNumeric(this.exchange.SellPrice)) {
                this.exchange.SellAmount = parseFloat((parseFloat(this.exchange.SellTotal) / this.exchange.SellPrice).toFixed(8));
            }
            else {
                this.exchange.SellAmount = null;
            }
        }
    };
    ExchangeComponent.prototype.Sell = function (model, isValid) {
        var _this = this;
        this.isSellSubmitted = true;
        if (isValid) {
            this.isSellLoading = true;
            var obj = {
                currency_pair_id: this.pairId,
                amount: model.amount,
                price: model.price,
                order_type: "LIMIT",
                side: "SELL"
            };
            this.exchangeService.SellTrade(obj).subscribe(function (res) {
                if (res.success == true) {
                    _this.isSellSubmitted = false;
                    _this.ResetForm();
                    if (res.output != undefined && res.output != "")
                        _this.toast.success(res.output);
                }
                else {
                    if (res.output != undefined && res.output != "")
                        _this.toast.error(res.output);
                }
                _this.isSellLoading = false;
            }, function (err) {
                _this.isSellLoading = false;
                console.log(err);
            });
        }
    };
    ExchangeComponent.prototype.ClosePopUp = function () {
        this.modal.hide();
        this.isOpen = false;
    };
    ExchangeComponent.prototype.ShowPopUp = function () {
        this.modal.show();
        this.isOpen = true;
    };
    ExchangeComponent.prototype.GoToUrl = function (route) {
        // this.router.navigate(["/" + route + ""]);
        window.location.href = "/" + route;
    };
    ExchangeComponent.prototype.BuyBaseValueClick = function () {
        if (this.common.IsNumeric(this.exchange.BaseValue) &&
            this.common.IsNumeric(this.exchange.BuyPrice)) {
            this.exchange.BuyTotalFees = this.exchange.BaseValue.toString();
            this.exchange.BuyAmount = Number(Number(this.exchange.BuyTotalFees) / this.exchange.BuyPrice);
        }
    };
    ExchangeComponent.prototype.SellBaseValueClick = function () {
        if (this.common.IsNumeric(this.exchange.MainValue)) {
            this.exchange.SellAmount = this.exchange.MainValue;
            this.exchange.SellTotal = (this.exchange.SellPrice * this.exchange.SellAmount).toFixed(8);
        }
    };
    ExchangeComponent.prototype.calcBalance = function (value, type) {
        for (var i = 0; i < this.arrBalPerc.length; i++) {
            var element = this.arrBalPerc[i];
            if (value === element) {
                if (type === "buy") {
                    var newTotalAmt = parseFloat(((this.exchange.BaseValue * value) / 100).toString()).toFixed(8);
                    this.exchange.BuyTotalFees = newTotalAmt;
                    this.exchange.BuyAmount =
                        this.exchange.BuyPrice == null
                            ? 0
                            : this.common.toFixedCustom(parseFloat(newTotalAmt) / this.exchange.BuyPrice, 8);
                }
                else {
                    var newTotalAmt = parseFloat(((this.exchange.MainValue * value) / 100).toString()).toFixed(8);
                    this.exchange.SellAmount = parseFloat(newTotalAmt);
                    this.exchange.SellTotal = this.common
                        .toFixedCustom(parseFloat(newTotalAmt) * this.exchange.SellPrice, 8)
                        .toString();
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"]),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], ExchangeComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExchangeComponent.prototype, "baseCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExchangeComponent.prototype, "mainCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExchangeComponent.prototype, "pairId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ExchangeComponent.prototype, "side", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ExchangeComponent.prototype, "price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ExchangeComponent.prototype, "amount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ExchangeComponent.prototype, "total", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExchangeComponent.prototype, "buyModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExchangeComponent.prototype, "sellModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExchangeComponent.prototype, "baseValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExchangeComponent.prototype, "mainValue", void 0);
    ExchangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-exchange",
            template: __webpack_require__(/*! ./exchange.component.html */ "./src/app/exchange/exchange/exchange.component.html")
        }),
        __metadata("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _core_service__WEBPACK_IMPORTED_MODULE_4__["ExchangeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_service__WEBPACK_IMPORTED_MODULE_4__["TradeService"],
            _core_service__WEBPACK_IMPORTED_MODULE_4__["PusherService"],
            _shared_common__WEBPACK_IMPORTED_MODULE_5__["Common"]])
    ], ExchangeComponent);
    return ExchangeComponent;
}());



/***/ }),

/***/ "./src/app/exchange/home-trade-history/home-trade-history.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/exchange/home-trade-history/home-trade-history.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"crypt-market-status mt-3\">\n  <div>\n    <ul class=\"nav nav-tabs\">\n      <li role=\"presentation\">\n        <a href=\"#market-trading\" data-toggle=\"tab\">Trade History</a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <div role=\"tabpanel\" class=\"tab-pane active mx-height\" id=\"market-trading\">\n        <app-loader [IsLoading]=\"tradeListLoading\"></app-loader>\n        <div class=\"data-box support-scroll-container ps\" [perfectScrollbar]=\"config\"\n          style=\"position: relative; max-height: calc(84vh - 110px);\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Price</th>\n                <th scope=\"col\">Amount</th>\n                <th scope=\"col\" class=\"text-right\">Time</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"animated fadeInUp\" *ngFor=\"let item of tradeHisList\">\n                <td [ngClass]=\"{'crypt-up': item.side=='BUY','crypt-down': item.side=='SELL'}\">\n                  {{ item.price | appDynamicDigit: 8 }} </td>\n                <td> {{ item.amount | appDynamicDigit: 8 }} </td>\n                <td class=\"text-right\"> {{ item.updated_at | date:'hh:mm:ss' }}</td>\n              </tr>\n              <tr *ngIf=\"tradeHisList == null\" class=\"text-center\">\n                <td colspan=\"3\"> You have not made any trades yet. Once you make some trades, they will appear here\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/exchange/home-trade-history/home-trade-history.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/exchange/home-trade-history/home-trade-history.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HomeTradeHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTradeHistoryComponent", function() { return HomeTradeHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service_exchange_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/service/exchange.service */ "./src/app/core/service/exchange.service.ts");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/service */ "./src/app/core/service/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeTradeHistoryComponent = /** @class */ (function () {
    function HomeTradeHistoryComponent(exchangeService, tradeService, toast, pusher) {
        this.exchangeService = exchangeService;
        this.tradeService = tradeService;
        this.toast = toast;
        this.pusher = pusher;
        this.tradeHisList = [];
        this.tradeListLoading = false;
        this.config = {};
        this.GetTradeObservable();
    }
    HomeTradeHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pusher.ch_trade_history.subscribe(function (order) {
            // if (order.order_status == "Confirmed" && (order.side == "BUY" || order.side == "SELL")) {
            if (_this.tradeHisList == null)
                _this.tradeHisList = [];
            _this.tradeHisList.push(order);
            _this.tradeHisList.sort(function (a, b) { return (b.updated_at > a.updated_at) ? 1 : -1; });
            // }
        });
    };
    HomeTradeHistoryComponent.prototype.ngOnChanges = function (change) {
        this.pairId =
            change.pairId !== undefined ? change.pairId.currentValue : this.pairId;
        this.baseCurrency =
            change.baseCurrency !== undefined
                ? change.baseCurrency.currentValue
                : this.baseCurrency;
        this.mainCurrency =
            change.mainCurrency !== undefined
                ? change.mainCurrency.currentValue
                : this.mainCurrency;
        this.GetUserHistory(this.pairId);
    };
    HomeTradeHistoryComponent.prototype.GetTradeObservable = function () {
        var _this = this;
        this.tradeService.tradeHistoryAll$().subscribe(function (data) {
            _this.tradeHisList = data;
        });
    };
    HomeTradeHistoryComponent.prototype.GetUserHistory = function (id) {
        var _this = this;
        this.tradeListLoading = true;
        this.exchangeService.GetUserHistory(id).subscribe(function (res) {
            if (res.success == true) {
                _this.tradeHisList = res.data;
            }
            else {
                if (res.output != undefined && res.output != "")
                    _this.toast.error(res.output);
            }
            _this.tradeListLoading = false;
        }, function (err) {
            _this.tradeListLoading = false;
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HomeTradeHistoryComponent.prototype, "baseCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HomeTradeHistoryComponent.prototype, "mainCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HomeTradeHistoryComponent.prototype, "pairId", void 0);
    HomeTradeHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-home-trade-history",
            template: __webpack_require__(/*! ./home-trade-history.component.html */ "./src/app/exchange/home-trade-history/home-trade-history.component.html")
        }),
        __metadata("design:paramtypes", [_core_service_exchange_service__WEBPACK_IMPORTED_MODULE_1__["ExchangeService"],
            _core_service__WEBPACK_IMPORTED_MODULE_2__["TradeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_service__WEBPACK_IMPORTED_MODULE_2__["PusherService"]])
    ], HomeTradeHistoryComponent);
    return HomeTradeHistoryComponent;
}());



/***/ }),

/***/ "./src/app/exchange/market-exchange/market-exchange.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/exchange/market-exchange/market-exchange.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div role=\"tabpanel\" class=\"tab-pane\" id=\"market\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-md-6\">\n      <div class=\"crypt-buy-sell-form\">\n        <p>\n          Buy <span class=\"crypt-up\">{{ exchange.MainCurrency }}</span>\n          <span class=\"fright\">\n            Available:\n            <b class=\"crypt-up\">\n              {{ exchange.BaseValue | appDynamicDigit: 8 }} {{ exchange.BaseCurrency }}\n            </b>\n          </span>\n        </p>\n\n        <form novalidate [formGroup]=\"buyForm\" (ngSubmit)=\"BuyMarket(buyForm.value,buyForm.valid)\">\n          <div class=\"crypt-buy\">\n            <div class=\"input-group mb-2\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Price</span>\n              </div>\n              <input type=\"text\" class=\"form-control\" value=\"Market Price\" readonly />\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\">{{ exchange.BaseCurrency }}</span>\n              </div>\n            </div>\n            <div class=\"input-group mb-2\"\n              [ngClass]=\"{'has-error': isBuySubmitted && buyForm.get('amount').hasError('marketAmt')}\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Amount</span>\n              </div>\n              <input type=\"number\" class=\"form-control\" formControlName=\"amount\" placeholder=\"Enter amount\"\n                [(ngModel)]=\"exchange.BuyAmount\" appEightDigit />\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\">{{ exchange.MainCurrency }}</span>\n              </div>\n            </div>\n            <div class=\"input-group mb-2 rate-per\">\n              <div class=\"btn-group-add btn-group\">\n                <button type=\"button\" class=\"btn btn-sm\" *ngFor=\"let item of arrBalPerc\"\n                  (click)=\"calcBalance(item, 'buy')\">{{item}}%</button>\n              </div>\n            </div>\n            <div *ngIf=\"!isLogin\">\n              <div class=\"col-md-12\">\n                <button type=\"button\" class=\"btn crypt-button-red-full\">\n                  <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('login')\">Login</span> or\n                  <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('register')\">Register</span> to Trade\n                </button>\n              </div>\n            </div>\n            <div *ngIf=\"isLogin\">\n              <div class=\"col-md-12\">\n                <button type=\"submit\" class=\"btn crypt-button-green-full\" [ladda]=\"isBuyLoading\">\n                  <span>Buy {{ exchange.MainCurrency }}</span>\n                </button>\n              </div>\n            </div>\n            <!-- <div class=\"mt-1\">\n              <button type=\"submit\" class=\" btn crypt-button-green-full\" [ladda]=\"isBuyLoading\">\n                <span>Buy {{ exchange.MainCurrency }}</span>\n              </button>\n            </div> -->\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <form novalidate [formGroup]=\"sellForm\" (ngSubmit)=\"SellMarket(sellForm.value,sellForm.valid)\">\n        <div class=\"crypt-buy-sell-form\">\n          <p>\n            Sell <span class=\"crypt-down\">{{exchange.MainCurrency}}</span>\n            <span class=\"fright\">\n              Available:\n              <b class=\"crypt-down\">\n                {{ exchange.MainValue | appDynamicDigit: 8 }} {{exchange.MainCurrency}}\n              </b>\n            </span>\n          </p>\n          <div class=\"crypt-sell\">\n            <div class=\"input-group mb-2\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Price</span>\n              </div>\n              <input type=\"text\" class=\"form-control\" value=\"Market Price\" readonly />\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\">{{exchange.BaseCurrency}}</span>\n              </div>\n            </div>\n            <div class=\"input-group mb-2\"\n              [ngClass]=\"{'has-error': isSellSubmitted && sellForm.get('amount').hasError('marketAmt')}\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Amount</span>\n              </div>\n              <input type=\"number\" formControlName=\"amount\" placeholder=\"Enter Amount\" [(ngModel)]=\"exchange.SellAmount\"\n                placeholder=\"Enter amount\" appEightDigit class=\"form-control\" (keyup)=\"setAmtValid()\" />\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\">{{exchange.MainCurrency}}</span>\n              </div>\n              <span class=\"cl-spn\" *ngIf=\"isSellSubmitted && isWalletBal\">\n                Wallet balance must be greater then amount.\n              </span>\n            </div>\n            <div class=\"input-group mb-2 rate-per\">\n              <div class=\"btn-group-add btn-group\">\n                <button type=\"button\" class=\"btn btn-sm\" *ngFor=\"let item of arrBalPerc\"\n                  (click)=\"calcBalance(item, 'sell')\">{{item}}%</button>\n              </div>\n            </div>\n            <div *ngIf=\"!isLogin\">\n              <div class=\"col-md-12\">\n                <button type=\"button\" class=\"btn crypt-button-red-full\">\n                  <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('login')\">Login</span> or\n                  <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('register')\">Register</span> to Trade\n                </button>\n              </div>\n            </div>\n            <div *ngIf=\"isLogin\">\n              <div class=\"col-md-12\">\n                <button type=\"submit\" class=\"btn crypt-button-red-full\" [ladda]=\"isSellLoading\">\n                  <span>Sell {{ exchange.MainCurrency }}</span>\n                </button>\n              </div>\n            </div>\n            <!-- <div class=\"mt-1\">\n              <button type=\"submit\" class=\"btn crypt-button-red-full\" style=\"text-transform: uppercase\"\n                [ladda]=\"isSellLoading\">\n                <span>Sell {{ exchange.MainCurrency }}</span>\n              </button>\n            </div> -->\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade modal-order cs-modal\" bsModal #modal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"mySmallModalLabel\" [config]=\"{ backdrop: 'static' }\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content user-balance-box\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Order Details</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"bs-modal\" (click)=\"ClosePopUp()\">&times;</button>\n      </div>\n      <div class=\"modal-body xs-p-30\" *ngIf=\"isOpen\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"text-info\" [innerHTML]=\"buysellmsg\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"col-md-12 text-right xs-mt-20\">\n          <button type=\"button\" class=\"btn btn-sm btn-primary\" data-dismiss=\"bs-modal\" (click)=\"ClosePopUp()\">\n            Close\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/exchange/market-exchange/market-exchange.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/exchange/market-exchange/market-exchange.component.ts ***!
  \***********************************************************************/
/*! exports provided: MarketExchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketExchangeComponent", function() { return MarketExchangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/service */ "./src/app/core/service/index.ts");
/* harmony import */ var _shared_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/common */ "./src/app/shared/common/index.ts");
/* harmony import */ var _shared_common_common_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/common/common.validator */ "./src/app/shared/common/common.validator.ts");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/model */ "./src/app/shared/model/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MarketExchangeComponent = /** @class */ (function () {
    function MarketExchangeComponent(authenticationService, exchangeService, fb, toast, tradeService, common, pusher) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.exchangeService = exchangeService;
        this.fb = fb;
        this.toast = toast;
        this.tradeService = tradeService;
        this.common = common;
        this.pusher = pusher;
        this.exchange = new _shared_model__WEBPACK_IMPORTED_MODULE_6__["MarketExchangeModal"]();
        this.isBuyLoading = false;
        this.isSellLoading = false;
        this.isSellSubmitted = false;
        this.isBuySubmitted = false;
        this.buysellmsg = "";
        this.isOpen = false;
        this.isWalletBal = false;
        this.arrBalPerc = [25, 50, 75, 100];
        this.authenticationService.isLoginChanged.subscribe(function (isLogin) {
            setTimeout(function () { return (_this.isLogin = isLogin); }, 10);
        });
    }
    MarketExchangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.BindData();
        this.authenticationService.CheckUserLoggedIn();
        this.pusher.ch_wallet_amount.subscribe(function (wallet) {
            if (wallet.original != undefined)
                _this.BindExchange(wallet.original.data);
        });
    };
    MarketExchangeComponent.prototype.BindData = function () {
        this.buyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_shared_common_common_validator__WEBPACK_IMPORTED_MODULE_5__["Validator"].checkAmountValid])
        });
        this.sellForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_shared_common_common_validator__WEBPACK_IMPORTED_MODULE_5__["Validator"].checkAmountValid])
        });
    };
    MarketExchangeComponent.prototype.ngOnChanges = function (change) {
        if (change.pairId !== undefined) {
            this.pairId =
                change.pairId !== undefined ? change.pairId.currentValue : this.pairId;
        }
        if (change.baseCurrency !== undefined ||
            change.mainCurrency !== undefined) {
            this.exchange.BaseCurrency =
                change.baseCurrency !== undefined
                    ? change.baseCurrency.currentValue
                    : this.baseCurrency;
            this.exchange.MainCurrency =
                change.mainCurrency !== undefined
                    ? change.mainCurrency.currentValue
                    : this.mainCurrency;
            this.pairName = this.mainCurrency + "/" + this.baseCurrency;
        }
        // if (change.baseValue !== undefined || change.mainValue !== undefined ) {
        this.exchange.BaseValue = change.baseValue !== undefined ? change.baseValue.currentValue : this.exchange.BaseValue;
        this.exchange.MainValue = change.mainValue !== undefined ? change.mainValue.currentValue : this.exchange.MainValue;
        // }
    };
    MarketExchangeComponent.prototype.GetWalletBalance = function (change) {
        var _this = this;
        this.ResetForm();
        var obj = {
            BaseCurrency: this.baseCurrency,
            MainCurrency: this.mainCurrency
        };
        this.exchangeService.GetWalletBalance(obj).subscribe(function (res) {
            if (res.success == true) {
                _this.BindExchange(res.data);
            }
            else {
                if (res.output != undefined && res.output != "")
                    _this.toast.error(res.output);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MarketExchangeComponent.prototype.BindExchange = function (data) {
        this.exchange.BaseValue = data.BaseCurrencyValue;
        this.exchange.MainValue = data.MainCurrencyValue;
    };
    MarketExchangeComponent.prototype.BuyMarket = function (model, isValid) {
        var _this = this;
        this.isBuySubmitted = true;
        if (isValid) {
            this.isBuyLoading = true;
            var obj = {
                currency_pair_id: this.pairId,
                amount: model.amount,
                order_type: "MARKET",
                side: "BUY"
            };
            this.exchangeService.BuyMarketTrade(obj).subscribe(function (res) {
                if (res.success == true) {
                    _this.isBuySubmitted = false;
                    _this.ResetForm();
                    //this.GetWalletBalance(null);
                    // this.buysellmsg = res.output;
                    // this.ShowPopUp();
                    if (res.output != undefined && res.output != "")
                        _this.toast.success(res.output);
                }
                else {
                    if (res.output != undefined && res.output != "")
                        _this.toast.error(res.output);
                }
                _this.isBuyLoading = false;
            });
        }
    };
    MarketExchangeComponent.prototype.SellMarket = function (model, isValid) {
        var _this = this;
        this.isSellSubmitted = true;
        var minVal = parseFloat(this.exchange.MainValue.toString()).toFixed(8);
        if (isValid) {
            if (model.amount >= minVal) {
                this.isWalletBal = true;
                return false;
            }
            this.isSellLoading = true;
            var obj = {
                currency_pair_id: this.pairId,
                amount: model.amount,
                order_type: "MARKET",
                side: "SELL"
            };
            this.exchangeService.SellMarketTrade(obj).subscribe(function (res) {
                if (res.success == true) {
                    _this.isSellSubmitted = false;
                    _this.ResetForm();
                    //this.GetWalletBalance(null);
                    //this.buysellmsg = res.output;
                    //this.RefreshMarket(this.pairId);
                    //this.ShowPopUp();
                    if (res.output != undefined && res.output != "")
                        _this.toast.success(res.output);
                }
                else {
                    if (res.output != undefined && res.output != "")
                        _this.toast.error(res.output);
                }
                _this.isSellLoading = false;
            });
        }
    };
    MarketExchangeComponent.prototype.calcBalance = function (value, type) {
        // this.getOrderFirstRow(this.pairName);
        for (var i = 0; i < this.arrBalPerc.length; i++) {
            var element = this.arrBalPerc[i];
            if (value === element) {
                if (type === "buy") {
                    var newTotalAmt = parseFloat(((this.exchange.BaseValue * value) / 100).toString()).toFixed(8);
                    this.exchange.BuyAmount =
                        this.exchange.SellPrice == null
                            ? 0
                            : this.common.toFixedCustom(parseFloat(newTotalAmt) / this.exchange.SellPrice, 8);
                }
                else {
                    var newTotalAmt = parseFloat(((this.exchange.MainValue * value) / 100).toString()).toFixed(8);
                    this.exchange.SellAmount = parseFloat(newTotalAmt);
                }
            }
        }
    };
    // getOrderFirstRow(pair: any) {
    //  this.exchangeService.GetOrder(pair).subscribe((res: any) => {
    //     if (res.success == true) {
    //       const dtList = res.data;
    //       if (dtList.sellList.length !== 0) {
    //         this.exchange.SellPrice = this.common.toFixedCustom(
    //           dtList.sellList.first().Price,
    //           8
    //         );
    //       } else {
    //         this.exchange.SellPrice = 0;
    //       }
    //     }
    //   });
    // }
    MarketExchangeComponent.prototype.setAmtValid = function () {
        this.isWalletBal = false;
    };
    MarketExchangeComponent.prototype.ClosePopUp = function () {
        this.modal.hide();
        this.isOpen = false;
    };
    MarketExchangeComponent.prototype.ShowPopUp = function () {
        this.modal.show();
        this.isOpen = true;
    };
    MarketExchangeComponent.prototype.GoToUrl = function (route) {
        // this.router.navigate(["/" + route + ""]);
        window.location.href = "/" + route;
    };
    MarketExchangeComponent.prototype.ResetForm = function () {
        this.exchange.BuyAmount = null;
        this.exchange.SellAmount = null;
        this.isBuySubmitted = false;
        this.isSellSubmitted = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"]),
        __metadata("design:type", ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], MarketExchangeComponent.prototype, "modal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarketExchangeComponent.prototype, "baseCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarketExchangeComponent.prototype, "mainCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MarketExchangeComponent.prototype, "pairId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarketExchangeComponent.prototype, "baseValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarketExchangeComponent.prototype, "mainValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarketExchangeComponent.prototype, "orderType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarketExchangeComponent.prototype, "price", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarketExchangeComponent.prototype, "amount", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MarketExchangeComponent.prototype, "total", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MarketExchangeComponent.prototype, "buyModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MarketExchangeComponent.prototype, "sellModel", void 0);
    MarketExchangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-market-exchange",
            template: __webpack_require__(/*! ./market-exchange.component.html */ "./src/app/exchange/market-exchange/market-exchange.component.html")
        }),
        __metadata("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["ExchangeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["TradeService"],
            _shared_common__WEBPACK_IMPORTED_MODULE_4__["Common"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["PusherService"]])
    ], MarketExchangeComponent);
    return MarketExchangeComponent;
}());



/***/ }),

/***/ "./src/app/exchange/orders/orders.component.html":
/*!*******************************************************!*\
  !*** ./src/app/exchange/orders/orders.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- New Theme -->\n<div class=\"row sm-gutters\">\n  <div class=\"col-lg-3 col-md-3 col-xl-3\">\n    <div class=\"crypt-market-status\">\n      <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\">\n          <a class=\"crypt-down\" href=\"javascript:void(0);\">SELL ODERS</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\">\n        <div role=\"tabpanel\" class=\"tab-pane active mx-height\" id=\"SELL\">\n          <div class=\"data-box support-scroll-container ps\" [perfectScrollbar]=\"config\"\n            style=\"position: relative; max-height: calc(50vh - 110px);\">\n            <app-loader [IsLoading]=\"sellloading\"></app-loader>\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Price</th>\n                  <th scope=\"col\">Amount</th>\n                  <th scope=\"col\">Value</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"animated fadeInUp\" *ngFor=\"let item of sellOrderList\" (click)=\"getRowSellOrder(item)\"\n                  style=\"cursor: pointer;\">\n                  <td>{{ item.price | appDynamicDigit: 8 }} </td>\n                  <td> {{ item.amount | appDynamicDigit: 8 }} </td>\n                  <td>\n                    {{ item.price * item.amount | appDynamicDigit: 8 }}\n                  </td>\n                </tr>\n                <tr *ngIf=\"sellOrderList == null\" class=\"text-center\">\n                  <td colspan=\"3\"> You have not made any trades yet. Once you make some trades, they will appear here.\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3 col-md-3 col-xl-3\">\n    <div class=\"crypt-market-status\">\n      <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\">\n          <a class=\"crypt-up\" href=\"javascript:void(0);\">BUY ORDERS</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\">\n        <div role=\"tabpanel\" class=\"tab-pane active mx-height\" id=\"BUY\">\n          <div class=\"data-box support-scroll-container ps\" [perfectScrollbar]=\"config\"\n            style=\"position: relative; max-height: calc(50vh - 110px);\">\n            <app-loader [IsLoading]=\"buyloading\"></app-loader>\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Price</th>\n                  <th scope=\"col\">Amount</th>\n                  <th scope=\"col\">Value</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"animated fadeInUp\" *ngFor=\"let item of buyOrderList\" (click)=\"getRowBuyOrder(item)\"\n                  style=\"cursor: pointer;\">\n                  <td>{{ item.price | appDynamicDigit: 8 }} </td>\n                  <td> {{ item.amount | appDynamicDigit: 8 }} </td>\n                  <td>\n                    {{ item.price * item.amount | appDynamicDigit: 8 }}\n                  </td>\n                </tr>\n                <tr *ngIf=\"buyOrderList == null\" class=\"text-center\">\n                  <td colspan=\"3\" class=\"text-center\"> You have not made any trades yet. Once you make some trades, they\n                    will appear here.\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 col-md-6 col-xl-6\">\n    <div class=\"crypt-market-status\">\n      <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\">\n          <a href=\"#active-orders\" class=\"active\" data-toggle=\"tab\">Open Orders</a>\n        </li>\n        <li role=\"presentation\">\n          <a href=\"#closed-orders\" data-toggle=\"tab\">My Order</a>\n        </li>\n      </ul>\n      <div class=\"tab-content\">\n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"active-orders\">\n          <div class=\"data-box support-scroll-container ps\" [perfectScrollbar]=\"config\"\n            style=\"position: relative; max-height: calc(50vh - 110px);\">\n            <app-loader [IsLoading]=\"openloading\"></app-loader>\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\" scope=\"col\">\n                    Date\n                  </th>\n                  <th class=\"text-center\" scope=\"col\">\n                    Type\n                  </th>\n                  <th class=\"text-center\" scope=\"col\">\n                    Side\n                  </th>\n                  <th class=\"text-center\" scope=\"col\">\n                    Price <span>({{ baseCurrency }})</span>\n                  </th>\n                  <th class=\"text-center\" scope=\"col\">\n                    Amount <span>({{ mainCurrency }})</span>\n                  </th>\n                  <th class=\"text-center\" scope=\"col\">\n                    Value <span>({{ baseCurrency }})</span>\n                  </th>\n                  <th class=\"text-center\" scope=\"col\">\n                    Cancel Order\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of userPendingOrder\">\n                  <td class=\"text-center\">{{ item.updated_at | date:'dd-MM-yyyy hh:mm:ss' }}</td>\n                  <td class=\"text-center\">{{ item.order_type }}</td>\n                  <td [ngClass]=\"{'crypt-up': item.side=='BUY','crypt-down': item.side=='SELL'}\" class=\"text-center\">\n                    {{ item.side }}</td>\n                  <td [ngClass]=\"{'crypt-up': item.side=='BUY','crypt-down': item.side=='SELL'}\" class=\"text-center\">\n                    {{ item.price | appDynamicDigit: 8 }}</td>\n                  <td class=\"text-center\">{{ item.amount | appDynamicDigit: 8 }}</td>\n                  <td class=\"text-center\">\n                    {{ item.price * item.amount | appDynamicDigit: 8 }}\n                  </td>\n                  <td class=\"text-center\">\n                    <a href=\"javascript:void(0);\"><i class=\"fa fa-times crypt-down\" title=\"Cancel Order\"\n                        (click)=\"CancelOrder(item.id)\"></i></a>\n                  </td>\n                </tr>\n                <tr *ngIf=\"userPendingOrder == undefined\">\n                  <td colspan=\"7\" class=\"text-center\">No data found</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"closed-orders\">\n          <div class=\"data-box support-scroll-container ps\" [perfectScrollbar]=\"config\"\n            style=\"position: relative; max-height: calc(50vh - 110px);\">\n            <app-loader [IsLoading]=\"myorderloading\"></app-loader>\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\" scope=\"col\">\n                    Date\n                  </th>\n                  <th class=\"text-center\" scope=\"col\">\n                    Type\n                  </th>\n                  <th class=\"text-center\" scope=\"col\">\n                    Side\n                  </th>\n                  <th class=\"text-center\" scope=\"col\">\n                    Price <span>({{ baseCurrency }})</span>\n                  </th>\n                  <th class=\"text-center\" scope=\"col\">\n                    Amount <span>({{ mainCurrency }})</span>\n                  </th>\n                  <th class=\"text-center\" scope=\"col\">\n                    Value <span>({{ baseCurrency }})</span>\n                  </th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of userConfirmOrder\">\n                  <td class=\"text-center\">{{ item.updated_at | date:'dd-MM-yyyy hh:mm:ss' }}</td>\n                  <td class=\"text-center\">{{ item.order_type }}</td>\n                  <td [ngClass]=\"{'crypt-up': item.side=='BUY','crypt-down': item.side=='SELL'}\" class=\"text-center\">\n                    {{ item.side }}</td>\n                  <td [ngClass]=\"{'crypt-up': item.side=='BUY','crypt-down': item.side=='SELL'}\" class=\"text-center\">\n                    {{ item.price | appDynamicDigit: 8 }}</td>\n                  <td class=\"text-center\">{{ item.amount | appDynamicDigit: 8 }}</td>\n                  <td class=\"text-center\">\n                    {{ item.price * item.amount | appDynamicDigit: 8 }}\n                  </td>\n                </tr>\n                <tr *ngIf=\"userConfirmOrder == undefined\">\n                  <td colspan=\"6\" class=\"text-center\">No data found</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/exchange/orders/orders.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/exchange/orders/orders.component.ts ***!
  \*****************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/service */ "./src/app/core/service/index.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(exchangeService, tradeService, userService, toast, pusher) {
        this.exchangeService = exchangeService;
        this.tradeService = tradeService;
        this.userService = userService;
        this.toast = toast;
        this.pusher = pusher;
        this.buyData = [];
        this.sellData = [];
        this.buyCount = 0;
        this.openloading = false;
        this.myorderloading = false;
        this.buyloading = false;
        this.sellloading = false;
        this.config = {};
        this.orederTypeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.priceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.amountChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.totalChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buyModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sellModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pusher.ch_pending_order.subscribe(function (order) {
            /* if (order.original == undefined){
              return false;
            } */
            // if (order.order_status == "Pending") {
            if (order.side == "BUY") {
                if (_this.buyOrderList == null)
                    _this.buyOrderList = [];
                _this.buyOrderList.push(order);
                _this.buyOrderList.sort(function (a, b) { return (b.price > a.price) ? 1 : -1; });
                _this.buyOrderList = _this.groupByPrice(_this.buyOrderList);
            }
            else if (order.side == "SELL") {
                if (_this.sellOrderList == null)
                    _this.sellOrderList = [];
                _this.sellOrderList.push(order);
                _this.sellOrderList.sort(function (a, b) { return (a.price > b.price) ? 1 : -1; });
                _this.sellOrderList = _this.groupByPrice(_this.sellOrderList);
            }
            // }
        });
        this.pusher.ch_user_open_order.subscribe(function (order) {
            if (order.order_status == "Pending") {
                if (_this.userPendingOrder == null)
                    _this.userPendingOrder = [];
                _this.userPendingOrder.push(order);
                _this.userPendingOrder.sort(function (a, b) { return (b.updated_at > a.updated_at) ? 1 : -1; });
            }
            else if (order.original != undefined) {
                // if (order.order_status == "Confirmed") {
                _this.userPendingOrder = order.original.data;
                // }
            }
        });
        this.pusher.ch_user_confirm_order.subscribe(function (order) {
            if (order.original != undefined) {
                _this.userConfirmOrder = order.original.data;
            }
            /* if (order.order_status == "Pending") {
              if (this.userPendingOrder == null) this.userPendingOrder = [];
              this.userPendingOrder.push(order);
              this.userPendingOrder.sort((a, b) => (b.updated_at > a.updated_at) ? 1 : -1);
            } */
            /* if (order.order_status == "Confirmed") {
              if (this.userConfirmOrder == null) this.userConfirmOrder = [];
              this.userConfirmOrder.push(order);
              this.userConfirmOrder.sort((a, b) => (b.updated_at > a.updated_at) ? 1 : -1);
            } */
        });
        this.pusher.ch_buy_order.subscribe(function (order) {
            if (order.original != undefined) {
                _this.buyOrderList = order.original.data;
            }
        });
        this.pusher.ch_sell_order.subscribe(function (order) {
            if (order.original != undefined) {
                _this.sellOrderList = order.original.data;
            }
        });
    };
    OrdersComponent.prototype.ngOnChanges = function (change) {
        this.pairId =
            change.pairId !== undefined ? change.pairId.currentValue : this.pairId;
        this.baseCurrency =
            change.baseCurrency !== undefined
                ? change.baseCurrency.currentValue
                : this.baseCurrency;
        this.mainCurrency =
            change.mainCurrency !== undefined
                ? change.mainCurrency.currentValue
                : this.mainCurrency;
        this.GetUserPendingOrders("Pending", this.pairId);
        this.GetUserConfirmOrders("Confirmed", this.pairId);
        this.GetSellOrder(this.pairId);
        this.GetBuyOrder(this.pairId);
    };
    OrdersComponent.prototype.GetUserPendingOrders = function (orderstatus, id) {
        var _this = this;
        var obj = { order_status: orderstatus, currency_pair_id: id };
        this.openloading = true;
        this.exchangeService.GetUserTrade(obj).subscribe(function (res) {
            if (res.success == true) {
                _this.userPendingOrder = res.data;
            }
            else {
                if (res.output != undefined && res.output != "")
                    _this.toast.error(res.output);
            }
            _this.openloading = false;
        }, function (err) {
            _this.openloading = false;
            console.log(err);
        });
    };
    OrdersComponent.prototype.GetUserConfirmOrders = function (orderstatus, id) {
        var _this = this;
        var obj = { order_status: orderstatus, currency_pair_id: id };
        this.myorderloading = true;
        this.exchangeService.GetUserTrade(obj).subscribe(function (res) {
            if (res.success == true) {
                _this.userConfirmOrder = res.data;
            }
            else {
                if (res.output != undefined && res.output != "")
                    _this.toast.error(res.output);
            }
            _this.myorderloading = false;
        }, function (err) {
            _this.myorderloading = false;
            console.log(err);
        });
    };
    OrdersComponent.prototype.GetSellOrder = function (id) {
        var _this = this;
        this.sellloading = true;
        this.exchangeService.GetSellOrder(id).subscribe(function (res) {
            if (res.success == true) {
                if (res.data !== null && res.data.length > 0) {
                    _this.sellModelChange.emit(res.data[0]);
                }
                _this.sellOrderList = res.data;
            }
            else {
                if (res.output != undefined && res.output != "")
                    _this.toast.error(res.output);
            }
            _this.sellloading = false;
        }, function (err) {
            _this.sellloading = false;
            console.log(err);
        });
    };
    OrdersComponent.prototype.GetBuyOrder = function (id) {
        var _this = this;
        this.buyloading = true;
        this.exchangeService.GetBuyOrder(id).subscribe(function (res) {
            if (res.success == true) {
                if (res.data !== null && res.data.length > 0) {
                    _this.buyModelChange.emit(res.data[0]);
                }
                _this.buyOrderList = res.data;
            }
            else {
                if (res.output != undefined && res.output != "")
                    _this.toast.error(res.output);
            }
            _this.buyloading = false;
        }, function (err) {
            _this.buyloading = false;
            console.log(err);
        });
    };
    OrdersComponent.prototype.CancelOrder = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()({
            cancelButtonText: 'No, keep it',
            confirmButtonText: 'Yes, cancel it!',
            showCancelButton: true,
            text: 'Are you sure you want to cancel this order?',
            title: 'Are you sure?',
            type: 'warning',
        }).then(function (result) {
            if (result.value) {
                _this.openloading = true;
                _this.exchangeService.CancelOrder(id).subscribe(function (res) {
                    if (res.success == true) {
                        //this.GetUserPendingOrders("Pending", this.pairId);
                        if (res.output != undefined && res.output != "")
                            _this.toast.success(res.output);
                    }
                    else {
                        if (res.output != undefined && res.output != "")
                            _this.toast.error(res.output);
                    }
                    _this.openloading = false;
                }, function (err) {
                    _this.openloading = false;
                    console.log(err);
                });
            }
            else {
                _this.toast.success('Your data is safe :)');
            }
            _this.openloading = false;
        });
    };
    OrdersComponent.prototype.groupByPrice = function (data) {
        var result = [];
        data.reduce(function (res, value) {
            if (!res[value.price]) {
                var temp = JSON.parse(JSON.stringify(value));
                temp.price = value.price;
                temp.amount = 0;
                res[value.price] = temp;
                result.push(res[value.price]);
            }
            res[value.price].amount = parseFloat(res[value.price].amount) + parseFloat(value.amount);
            return res;
        }, {});
        return result;
    };
    OrdersComponent.prototype.getRowBuyOrder = function (item) {
        this.buyModelChange.emit(item);
    };
    OrdersComponent.prototype.getRowSellOrder = function (item) {
        this.sellModelChange.emit(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OrdersComponent.prototype, "baseCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OrdersComponent.prototype, "mainCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OrdersComponent.prototype, "pairId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrdersComponent.prototype, "orederTypeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrdersComponent.prototype, "priceChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrdersComponent.prototype, "amountChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrdersComponent.prototype, "totalChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrdersComponent.prototype, "buyModelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OrdersComponent.prototype, "sellModelChange", void 0);
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-orders",
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/exchange/orders/orders.component.html")
        }),
        __metadata("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_1__["ExchangeService"],
            _core_service__WEBPACK_IMPORTED_MODULE_1__["TradeService"],
            _core_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _core_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"],
            _core_service__WEBPACK_IMPORTED_MODULE_1__["PusherService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/exchange/original-chart/original-chart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/exchange/original-chart/original-chart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loader [IsLoading]=\"loading\"></app-loader>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"btn-group\" aria-label=\"Button group with nested dropdown\">\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"FilterChart(1,'Time','T')\">Time</button>\n      <div class=\"btn-group\" role=\"group\">\n        <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{miniteheader}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\n          <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"FilterChart(60,'1m','m')\">1m</a>\n          <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"FilterChart(300,'5m','m')\">5m</a>\n          <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"FilterChart(900,'15m','m')\">15m</a>\n          <!-- <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"FilterChart(1800,'30m','m')\">30m</a> -->\n        </div>\n      </div>\n      <div class=\"btn-group\" role=\"group\">\n        <button id=\"btnGroupDrop2\" type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{hourheader}}\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop2\">\n          <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"FilterChart(3600,'1h','h')\">1h</a>\n          <!-- <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"FilterChart(7200,'2h','h')\">2h</a> -->\n          <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"FilterChart(14400,'4h','h')\">4h</a>\n          <!-- <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"FilterChart(21600,'6h','h')\">6h</a>\n          <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"FilterChart(43200,'12h','h')\">12h</a> -->\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"FilterChart(86400,'1D','D')\">1D</button>\n      <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"FilterChart(604800,'1W','W')\">1W</button>\n      <!-- <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"FilterChart(2592000,'1M','M')\">1M</button> -->\n    </div>\n  </div>\n</div>\n<br />\n<div id=\"chartdiv\"></div>"

/***/ }),

/***/ "./src/app/exchange/original-chart/original-chart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/exchange/original-chart/original-chart.component.ts ***!
  \*********************************************************************/
/*! exports provided: OriginalChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OriginalChartComponent", function() { return OriginalChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/service */ "./src/app/core/service/index.ts");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model */ "./src/app/shared/model/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OriginalChartComponent = /** @class */ (function () {
    function OriginalChartComponent(tradeService, exchangeService, pusher) {
        this.tradeService = tradeService;
        this.exchangeService = exchangeService;
        this.pusher = pusher;
        this.loading = false;
        this.dailyExchange = new _shared_model__WEBPACK_IMPORTED_MODULE_3__["DailyExchange"]();
        this.isDailyExchangeLoader = false;
        this.activeCls = false;
        this.miniteheader = 'm';
        this.hourheader = 'h';
        this.isOriginal = false;
    }
    OriginalChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pusher.ch_chart.subscribe(function (chart) {
            if (chart.original != undefined) {
                _this.chartData(180);
            }
        });
    };
    OriginalChartComponent.prototype.ngOnChanges = function (change) {
        this.pairId =
            change.pairId !== undefined ? change.pairId.currentValue : this.pairId;
        this.baseCurrency =
            change.baseCurrency !== undefined
                ? change.baseCurrency.currentValue
                : this.baseCurrency;
        this.mainCurrency =
            change.mainCurrency !== undefined
                ? change.mainCurrency.currentValue
                : this.mainCurrency;
        this.pairName = this.mainCurrency + "/" + this.baseCurrency;
        this.chartData(180);
    };
    OriginalChartComponent.prototype.chartData = function (minite) {
        this.loading = true;
        var that = this;
        anychart.data.loadJsonFile(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "chartData/" + this.pairId + "/" + minite, function (res) {
            $('#chartdiv').html('');
            var result = [];
            for (var i = 0; i < res.data.length; i++) {
                var tarray = [];
                tarray.push(res.data[i].time_interval, res.data[i].o, res.data[i].h, res.data[i].l, res.data[i].c, res.data[i].vol);
                result.push(tarray);
            }
            anychart.theme(anychart.themes.darkBlue);
            var dataTable = anychart.data.table();
            dataTable.addData(result);
            var mapping = dataTable.mapAs({ 'open': 1, 'high': 2, 'low': 3, 'close': 4, 'value': 5 });
            var chart = anychart.stock();
            chart.tooltip(true);
            chart.scroller().enabled(true);
            var candlesPlot = chart.plot(0);
            candlesPlot.yGrid(true).xGrid(true);
            candlesPlot.yAxis(0).labels().position('outside');
            candlesPlot.yAxis(0).ticks().enabled(false);
            candlesPlot.yAxis(0).orientation('left');
            var candlesLegend = candlesPlot.legend();
            candlesLegend.title(false);
            candlesLegend.fontSize(12);
            var sma10 = candlesPlot.sma(mapping, 10).series();
            sma10.stroke('red');
            // create SMA indicators with period 30
            var sma30 = candlesPlot.sma(mapping, 30).series();
            sma30.stroke('green');
            var candleSeries = candlesPlot.candlestick(mapping);
            candleSeries.name('Price');
            candleSeries.legendItem().iconType('rising-falling');
            candleSeries.risingFill('#1fb982');
            candleSeries.risingStroke('#1fb982');
            candleSeries.fallingFill('#de3249');
            candleSeries.fallingStroke('#de3249');
            // Volume
            var volumeMapping = dataTable.mapAs({
                'value': 4,
                'type': 'average'
            });
            var volumePlot = chart.plot(1);
            volumePlot.height('22%');
            var volSeries = volumePlot.column(volumeMapping).name('Last Price');
            volSeries.risingStroke('#1fb982');
            volSeries.risingFill('#1fb982');
            volSeries.fallingStroke('#de3249');
            volSeries.fallingFill('#de3249');
            volumePlot.xAxis().enabled(false);
            volumePlot.yAxis().enabled(false);
            volumePlot.crosshair().yLabel().format('{%Value}{scale: (1000000)|(mln), decimalsCount: 0}');
            var volumeLegend = volumePlot.legend();
            volumeLegend.title(false);
            volumeLegend.fontSize(10);
            // create MACD indicator with fast period 12, slow period 26 and signal period 9
            var macd = volumePlot.macd(mapping, 12, 26, 9);
            macd.macdSeries().stroke('#bf360c');
            macd.signalSeries().stroke('#ff6d00');
            macd.histogramSeries().fill('#ffe082');
            // set chart selected date/time range
            chart.container('chartdiv');
            chart.draw();
            that.loading = false;
        });
    };
    OriginalChartComponent.prototype.FilterChart = function (minite, header, type) {
        if (type === 'm') {
            this.miniteheader = header;
        }
        if (type === 'h') {
            this.hourheader = header;
        }
        localStorage.setItem('chartInterval', minite.toString());
        this.chartData(minite);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OriginalChartComponent.prototype, "pairId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OriginalChartComponent.prototype, "baseCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OriginalChartComponent.prototype, "mainCurrency", void 0);
    OriginalChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-original-chart',
            template: __webpack_require__(/*! ./original-chart.component.html */ "./src/app/exchange/original-chart/original-chart.component.html")
        }),
        __metadata("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_2__["TradeService"],
            _core_service__WEBPACK_IMPORTED_MODULE_2__["ExchangeService"],
            _core_service__WEBPACK_IMPORTED_MODULE_2__["PusherService"]])
    ], OriginalChartComponent);
    return OriginalChartComponent;
}());



/***/ }),

/***/ "./src/app/exchange/stoplimit/stoplimit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/exchange/stoplimit/stoplimit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\" id=\"stoplimit\">\n  <div class=\"col-md-6\">\n    <form novalidate [formGroup]=\"buyForm\" (ngSubmit)=\"Buy(buyForm.value,buyForm.valid)\">\n      <div class=\"crypt-buy-sell-form\">\n        <p>\n          Buy <span class=\"crypt-up\">{{ mainCurrency }}</span>\n          <span class=\"fright\">Available: <b class=\"crypt-up\">{{ stopLimitObj.BaseValue | appDynamicDigit:8 }}\n              {{ baseCurrency }}</b></span>\n        </p>\n        <div class=\"crypt-buy\">\n          <div class=\"input-group mb-2\"\n            [ngClass]=\"{'has-error': isBuySubmitted && buyForm.get('BuyStop').hasError('required')}\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Stop</span>\n            </div>\n            <input type=\"text\" formControlName=\"BuyStop\" appEightDigit name=\"text\" [(ngModel)]=\"stopLimitObj.BuyStop\"\n              placeholder=\"Enter Stop\" class=\"form-control\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">{{ baseCurrency }}</span>\n            </div>\n          </div>\n          <div class=\"input-group mb-2\"\n            [ngClass]=\"{'has-error': isBuySubmitted && buyForm.get('BuyLimit').hasError('required')}\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Limit</span>\n            </div>\n            <input type=\"text\" formControlName=\"BuyLimit\" (keyup)=\"SetBuytotal('limit')\"\n              [(ngModel)]=\"stopLimitObj.BuyLimit\" appEightDigit name=\"text\" placeholder=\"Enter Limit\"\n              class=\"form-control\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">{{ baseCurrency }}</span>\n            </div>\n            <span class=\"error-msg\" *ngIf=\"isBuySubmitted && buyForm.get('BuyLimit').hasError('rangeValidation')\">\n              Limit price greater then stop price\n            </span>\n          </div>\n          <div class=\"input-group mb-2\"\n            [ngClass]=\"{'has-error': isBuySubmitted && buyForm.get('BuyAmount').hasError('required')}\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Amount</span>\n            </div>\n            <input type=\"number\" formControlName=\"BuyAmount\" (keyup)=\"SetBuytotal('amount')\"\n              [(ngModel)]=\"stopLimitObj.BuyAmount\" appEightDigit name=\"text\" placeholder=\"Enter Amount\"\n              class=\"form-control\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">{{ mainCurrency }}</span>\n            </div>\n          </div>\n          <div class=\"input-group mb-2\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Total</span>\n            </div>\n            <input type=\"text\" formControlName=\"BuyTotal\" disabled (keyup)=\"SetBuytotal('total')\"\n              [(ngModel)]=\"stopLimitObj.BuyTotal\" appEightDigit name=\"text\" placeholder=\"Total\" class=\"form-control\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">{{ baseCurrency }}</span>\n            </div>\n          </div>\n          <div class=\"mt-1\" *ngIf=\"!isLogin\">\n            <button type=\"button\" class=\"btn crypt-button-red-full\">\n              <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('login')\">Login</span> or\n              <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('register')\">Register</span> to Trade\n            </button>\n          </div>\n          <div class=\"mt-1\" *ngIf=\"isLogin\">\n            <button type=\"submit\" class=\"btn crypt-button-green-full\" [ladda]=\"isBuyLoading\">\n              <span>Buy {{ mainCurrency }}</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"col-md-6\">\n    <form novalidate [formGroup]=\"sellForm\" (ngSubmit)=\"Sell(sellForm.value,sellForm.valid)\">\n      <div class=\"crypt-buy-sell-form\">\n        <p>\n          Sell <span class=\"crypt-down\">{{ mainCurrency }}</span>\n          <span class=\"fright\">Available: <b class=\"crypt-down\">{{ stopLimitObj.MainValue | appDynamicDigit:8 }}\n              {{ mainCurrency }}</b></span>\n        </p>\n        <div class=\"crypt-sell\">\n          <div class=\"input-group mb-2\"\n            [ngClass]=\"{'has-error': isSellSubmitted && sellForm.get('SellStop').hasError('required')}\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Stop</span>\n            </div>\n            <input type=\"text\" formControlName=\"SellStop\" appEightDigit name=\"text\" placeholder=\"Enter Stop\"\n              [(ngModel)]=\"stopLimitObj.SellStop\" class=\"form-control\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">{{ baseCurrency }}</span>\n            </div>\n          </div>\n          <div class=\"input-group mb-2\"\n            [ngClass]=\"{'has-error': isSellSubmitted && sellForm.get('SellLimit').hasError('required')}\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Limit</span>\n            </div>\n            <input type=\"text\" formControlName=\"SellLimit\" appEightDigit name=\"text\" placeholder=\"Enter Limit\"\n              (keyup)=\"SetSelltotal('limit')\" [(ngModel)]=\"stopLimitObj.SellLimit\" class=\"form-control\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">{{ baseCurrency }}</span>\n            </div>\n            <span class=\"error-msg\" *ngIf=\"isSellSubmitted && sellForm.get('SellLimit').hasError('rangeValidation')\">\n              Stop price greater then limit price\n            </span>\n          </div>\n          <div class=\"input-group mb-2\"\n            [ngClass]=\"{'has-error': isSellSubmitted && sellForm.get('SellAmount').hasError('required')}\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Amount</span>\n            </div>\n            <input type=\"number\" formControlName=\"SellAmount\" appEightDigit name=\"text\" placeholder=\"Enter Amount\"\n              (keyup)=\"SetSelltotal('amount')\" [(ngModel)]=\"stopLimitObj.SellAmount\" class=\"form-control\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">{{ mainCurrency }}</span>\n            </div>\n          </div>\n          <div class=\"input-group mb-2\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\">Total</span>\n            </div>\n            <input type=\"text\" formControlName=\"SellTotal\" appEightDigit name=\"text\" placeholder=\"Total\"\n              (keyup)=\"SetSelltotal('total')\" [(ngModel)]=\"stopLimitObj.SellTotal\" disabled class=\"form-control\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">{{ baseCurrency }}</span>\n            </div>\n          </div>\n          <div class=\"col-md-12\" *ngIf=\"!isLogin\">\n            <button type=\"button\" class=\"btn crypt-button-red-full\">\n              <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('login')\">Login</span> or\n              <span style=\"text-decoration: underline;\" (click)=\"GoToUrl('register')\">Register</span> to Trade</button>\n          </div>\n          <div class=\"mt-1\" *ngIf=\"isLogin\">\n            <button type=\"submit\" class=\"btn crypt-button-red-full\" [ladda]=\"isSellLoading\">\n              <span>Sell {{ mainCurrency }}</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/exchange/stoplimit/stoplimit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/exchange/stoplimit/stoplimit.component.ts ***!
  \***********************************************************/
/*! exports provided: StoplimitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoplimitComponent", function() { return StoplimitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/service */ "./src/app/core/service/index.ts");
/* harmony import */ var _shared_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/common */ "./src/app/shared/common/index.ts");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/model */ "./src/app/shared/model/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StoplimitComponent = /** @class */ (function () {
    function StoplimitComponent(authenticationService, exchangeService, fb, toast, common, router, pusher) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.exchangeService = exchangeService;
        this.fb = fb;
        this.toast = toast;
        this.common = common;
        this.router = router;
        this.pusher = pusher;
        this.isBuySubmitted = false;
        this.isSellSubmitted = false;
        this.isBuyLoading = false;
        this.isSellLoading = false;
        this.stopLimitObj = new _shared_model__WEBPACK_IMPORTED_MODULE_5__["StopLimitModel"]();
        this.authenticationService.isLoginChanged.subscribe(function (isLogin) {
            setTimeout(function () { return (_this.isLogin = isLogin); }, 0);
        });
    }
    StoplimitComponent.prototype.ngOnChanges = function (change) {
        if (change.pairId !== undefined) {
            this.pairId =
                change.pairId !== undefined ? change.pairId.currentValue : this.pairId;
        }
        if (change.baseCurrency !== undefined ||
            change.mainCurrency !== undefined) {
            this.stopLimitObj.BaseCurrency =
                change.baseCurrency !== undefined
                    ? change.baseCurrency.currentValue
                    : this.baseCurrency;
            this.stopLimitObj.MainCurrency =
                change.mainCurrency !== undefined
                    ? change.mainCurrency.currentValue
                    : this.mainCurrency;
        }
        this.stopLimitObj.BaseValue = change.baseValue !== undefined ? change.baseValue.currentValue : this.stopLimitObj.BaseValue;
        this.stopLimitObj.MainValue = change.mainValue !== undefined ? change.mainValue.currentValue : this.stopLimitObj.MainValue;
    };
    StoplimitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.CheckUserLoggedIn();
        this.BindData();
        this.pusher.ch_wallet_amount.subscribe(function (wallet) {
            if (wallet.original != undefined)
                _this.BindExchange(wallet.original.data);
        });
    };
    StoplimitComponent.prototype.GetWalletBalance = function (change) {
        var _this = this;
        this.ResetForm();
        var obj = {
            BaseCurrency: this.baseCurrency,
            MainCurrency: this.mainCurrency
        };
        this.exchangeService.GetWalletBalance(obj).subscribe(function (res) {
            if (res.success == true) {
                _this.BindExchange(res);
            }
        });
    };
    StoplimitComponent.prototype.BindExchange = function (data) {
        this.stopLimitObj.BaseValue = data.BaseCurrencyValue;
        this.stopLimitObj.MainValue = data.MainCurrencyValue;
    };
    StoplimitComponent.prototype.BindData = function () {
        this.buyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            BuyAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            BuyLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _shared_common__WEBPACK_IMPORTED_MODULE_4__["Validator"].StopLimitValidateBuy
            ]),
            BuyStop: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            BuyTotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
        });
        this.sellForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            SellAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            SellLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _shared_common__WEBPACK_IMPORTED_MODULE_4__["Validator"].StopLimitValidateSell
            ]),
            SellStop: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            SellTotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
        });
    };
    StoplimitComponent.prototype.ResetForm = function () {
        this.stopLimitObj.BuyLimit = null;
        this.stopLimitObj.BuyStop = null;
        this.stopLimitObj.BuyAmount = null;
        this.stopLimitObj.BuyTotal = null;
        this.stopLimitObj.SellLimit = null;
        this.stopLimitObj.SellStop = null;
        this.stopLimitObj.SellAmount = null;
        this.stopLimitObj.SellTotal = null;
        this.isBuySubmitted = false;
        this.isSellSubmitted = false;
    };
    StoplimitComponent.prototype.SetBuytotal = function (event) {
        if (event === "amount" || event === "limit") {
            if (this.common.IsNumeric(this.stopLimitObj.BuyAmount) &&
                this.common.IsNumeric(this.stopLimitObj.BuyLimit)) {
                this.stopLimitObj.BuyTotal = parseFloat((this.stopLimitObj.BuyAmount * this.stopLimitObj.BuyLimit).toFixed(8));
            }
            else {
                this.stopLimitObj.BuyTotal = 0;
            }
        }
        else if (event === "total") {
            if (this.common.IsNumeric(this.stopLimitObj.BuyTotal) &&
                this.common.IsNumeric(this.stopLimitObj.BuyLimit)) {
                this.stopLimitObj.BuyAmount = parseFloat((this.stopLimitObj.BuyTotal / this.stopLimitObj.BuyLimit).toFixed(8));
            }
            else {
                this.stopLimitObj.BuyAmount = 0;
            }
        }
    };
    StoplimitComponent.prototype.SetSelltotal = function (event) {
        if (event === "amount" || event === "limit") {
            if (this.common.IsNumeric(this.stopLimitObj.SellAmount) &&
                this.common.IsNumeric(this.stopLimitObj.SellLimit)) {
                this.stopLimitObj.SellTotal = parseFloat((this.stopLimitObj.SellAmount * this.stopLimitObj.SellLimit).toFixed(8));
            }
            else {
                this.stopLimitObj.SellTotal = 0;
            }
        }
        else if (event === "total") {
            if (this.common.IsNumeric(this.stopLimitObj.SellTotal) &&
                this.common.IsNumeric(this.stopLimitObj.SellLimit)) {
                this.stopLimitObj.SellAmount = parseFloat((this.stopLimitObj.SellTotal / this.stopLimitObj.SellLimit).toFixed(8));
            }
            else {
                this.stopLimitObj.SellAmount = 0;
            }
        }
    };
    StoplimitComponent.prototype.Buy = function (model, isValid) {
        var _this = this;
        this.isBuySubmitted = true;
        if (isValid) {
            this.isBuyLoading = true;
            var obj = {
                stop: model.BuyStop,
                limit: model.BuyLimit,
                amount: model.BuyAmount,
                currency_pair_id: this.pairId,
                side: "BUY"
            };
            this.exchangeService.OrderStopLimit(obj).subscribe(function (res) {
                if (res.success == true) {
                    _this.isBuySubmitted = false;
                    _this.ResetForm();
                    //this.GetWalletBalance(null);
                    if (res.output != undefined && res.output != "")
                        _this.toast.success(res.output);
                }
                else {
                    if (res.output != undefined && res.output != "")
                        _this.toast.error(res.output);
                }
                _this.isBuyLoading = false;
            });
        }
    };
    StoplimitComponent.prototype.Sell = function (model, isValid) {
        var _this = this;
        this.isSellSubmitted = true;
        if (isValid) {
            this.isSellLoading = true;
            var obj = {
                stop: model.SellStop,
                limit: model.SellLimit,
                amount: model.SellAmount,
                currency_pair_id: this.pairId,
                side: "SELL"
            };
            this.exchangeService.OrderStopLimit(obj).subscribe(function (res) {
                if (res.success == true) {
                    _this.isSellSubmitted = false;
                    _this.ResetForm();
                    //this.GetWalletBalance(null);
                    if (res.output != undefined && res.output != "")
                        _this.toast.success(res.output);
                }
                else {
                    _this.isSellLoading = false;
                    if (res.output != undefined && res.output != "")
                        _this.toast.error(res.output);
                }
                _this.isSellLoading = false;
            });
        }
    };
    StoplimitComponent.prototype.GoToUrl = function (route) {
        // this.router.navigate(["/" + route + ""]);
        window.location.href = "/" + route;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StoplimitComponent.prototype, "baseCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StoplimitComponent.prototype, "mainCurrency", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StoplimitComponent.prototype, "pairId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StoplimitComponent.prototype, "baseValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StoplimitComponent.prototype, "mainValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StoplimitComponent.prototype, "dBtnTrade", void 0);
    StoplimitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-stoplimit",
            template: __webpack_require__(/*! ./stoplimit.component.html */ "./src/app/exchange/stoplimit/stoplimit.component.html")
        }),
        __metadata("design:paramtypes", [_core_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["ExchangeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _shared_common__WEBPACK_IMPORTED_MODULE_4__["Common"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["PusherService"]])
    ], StoplimitComponent);
    return StoplimitComponent;
}());



/***/ }),

/***/ "./src/app/shared/common/array-extensions.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/common/array-extensions.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Array.prototype.sum = function (key) {
    if (this.count() <= 0) {
        return 0;
    }
    var total = 0;
    for (var i = 0, _len = this.length; i < _len; i++) {
        total += this[i][key];
    }
    return total;
};
Array.prototype.findWithId = function (id) {
    for (var i = 0, len = this.length; i < len; i++) {
        var item = this[i];
        if (item.id === id) {
            return item;
        }
        return null;
    }
};
Array.prototype.first = function () {
    return this.count() > 0 ? this[0] : null;
};
Array.prototype.last = function () {
    return this.count() > 0 ? this[this.length - 1] : null;
};
Array.prototype.count = function () {
    return this.length;
};


/***/ }),

/***/ "./src/app/shared/common/common.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/common/common.enum.ts ***!
  \**********************************************/
/*! exports provided: ApiResponseStatus, ApiOperationStatus, OrderType, SupportTicket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiResponseStatus", function() { return ApiResponseStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiOperationStatus", function() { return ApiOperationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderType", function() { return OrderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportTicket", function() { return SupportTicket; });
var ApiResponseStatus;
(function (ApiResponseStatus) {
    ApiResponseStatus[ApiResponseStatus["Ok"] = 0] = "Ok";
    ApiResponseStatus[ApiResponseStatus["Error"] = 1] = "Error";
})(ApiResponseStatus || (ApiResponseStatus = {}));
var ApiOperationStatus;
(function (ApiOperationStatus) {
    ApiOperationStatus[ApiOperationStatus["Success"] = 0] = "Success";
    ApiOperationStatus[ApiOperationStatus["Failed"] = 1] = "Failed";
    ApiOperationStatus[ApiOperationStatus["Error"] = 2] = "Error";
    ApiOperationStatus[ApiOperationStatus["Warning"] = 3] = "Warning";
    ApiOperationStatus[ApiOperationStatus["Authorize"] = 4] = "Authorize";
    ApiOperationStatus[ApiOperationStatus["ValidationFailed"] = 5] = "ValidationFailed";
})(ApiOperationStatus || (ApiOperationStatus = {}));
var OrderType;
(function (OrderType) {
    OrderType[OrderType["Buy"] = 1] = "Buy";
    OrderType[OrderType["Sell"] = 2] = "Sell";
})(OrderType || (OrderType = {}));
var SupportTicket;
(function (SupportTicket) {
    SupportTicket[SupportTicket["Pending"] = 1] = "Pending";
    SupportTicket[SupportTicket["Confirm"] = 2] = "Confirm";
})(SupportTicket || (SupportTicket = {}));


/***/ }),

/***/ "./src/app/shared/common/common.utility.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/common/common.utility.ts ***!
  \*************************************************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Common", function() { return Common; });
var Common = /** @class */ (function () {
    function Common() {
    }
    Common.prototype.IsEmpty = function (str) {
        return str === undefined || str === null || str === '';
    };
    Common.prototype.IsNumeric = function (val) {
        return val !== undefined &&
            val !== '' &&
            val !== '.' &&
            parseFloat(val) !== 0 &&
            val !== null
            ? true
            : false;
    };
    Common.prototype.ObjectEmpty = function (obj) {
        return obj == null || obj === undefined || Object.keys(obj).length === 0;
    };
    Common.prototype.AddDays = function (date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };
    Common.prototype.ConvertDateTimeToString = function (date) {
        var dateStr = date.toDateString();
        var timeStr = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return dateStr + ' ' + timeStr;
    };
    Common.prototype.IsEmptyNumber = function (str) {
        return str === undefined || str === null;
    };
    Common.prototype.toFixedCustom = function (num, upto) {
        var temp = num.toString();
        num = Number(temp);
        return num.toFixed(upto);
    };
    Common.prototype.filterArrObj = function (arrObj, value) {
        var retVal = arrObj.filter(function (el) {
            return (el.Tag === value);
        }).map(function (el) {
            return el.Value;
        });
        return retVal.toString();
    };
    return Common;
}());



/***/ }),

/***/ "./src/app/shared/common/common.validator.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/common/common.validator.ts ***!
  \***************************************************/
/*! exports provided: Validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.strong = function (control) {
        var hasNumber = /\d/.test(control.value);
        var hasUpper = /[A-Z]/.test(control.value);
        var hasLower = /[a-z]/.test(control.value);
        var hasSymbol = /[!@#$&*]/.test(control.value);
        var hasMinLength = control.value.length >= 8;
        var valid = hasNumber && hasUpper && hasLower && hasSymbol && hasMinLength;
        if (!valid) {
            return { strong: true };
        }
        return null;
    };
    Validator.checkPassword = function (control) {
        if (control.parent !== undefined) {
            if (control.parent.value.Password !== "" && control.value !== "") {
                var password = control.parent.value.Password;
                var confirmPassword = control.value;
                if (password === confirmPassword) {
                    return null;
                }
                else {
                    return { matchPassword: true };
                }
            }
        }
    };
    Validator.MatchPassword = function (control) {
        if (control.parent !== undefined) {
            if (control.parent.value.NewPassword !== "" && control.value !== "") {
                if (control.parent.value.NewPassword === control.value) {
                    return null;
                }
                else {
                    return { matchPassword: true };
                }
            }
        }
    };
    Validator.RangeValidationBuy = function (control) {
        if (control.parent !== undefined) {
            if (control.parent.value.range !== "" &&
                control.value !== "" &&
                control.parent.value.range != null) {
                if (control.parent.value.range < control.value) {
                    return { rangeValidation: true };
                }
                else {
                    return null;
                }
            }
        }
        return null;
    };
    Validator.RangeValidationSell = function (control) {
        if (control.parent !== undefined) {
            if (control.parent.value.range !== "" &&
                control.value !== "" &&
                control.parent.value.range != null) {
                if (control.parent.value.range < control.parent.value.amount) {
                    return { rangeValidation: true };
                }
                else {
                    return null;
                }
            }
        }
        return null;
    };
    Validator.MinimumValidation = function (control) {
        if (control.parent !== undefined) {
            if (control.parent.value.Minimum !== "" &&
                control.parent.value.Minimum != null &&
                control.value !== "") {
                if (control.parent.value.Price !== "" &&
                    control.parent.value.Price != null &&
                    control.parent.value.Amount !== "" &&
                    control.parent.value.Amount != null) {
                    var checkMinimumValidation = control.parent.value.Price * control.parent.value.Amount <
                        control.parent.value.Minimum;
                    if (checkMinimumValidation) {
                        return { minimumValidation: true };
                    }
                }
            }
        }
    };
    Validator.StopLimitValidateBuy = function (control) {
        if (control.parent !== undefined) {
            if (control.parent.value.BuyStop !== "" &&
                control.value !== "" &&
                control.parent.value.BuyStop != null) {
                if (control.value < control.parent.value.BuyStop) {
                    return { rangeValidation: true };
                }
                else {
                    return null;
                }
            }
        }
    };
    Validator.StopLimitValidateSell = function (control) {
        if (control.parent !== undefined) {
            if (control.parent.value.SellStop !== "" &&
                control.value !== "" &&
                control.parent.value.SellStop != null) {
                if (control.value > control.parent.value.SellStop) {
                    return { rangeValidation: true };
                }
                else {
                    return null;
                }
            }
        }
    };
    Validator.checkAmountValid = function (control) {
        if (control.parent !== undefined) {
            if (control.value !== "") {
                if (control.value <= 0) {
                    return { marketAmt: true };
                }
                else {
                    return null;
                }
            }
        }
    };
    return Validator;
}());



/***/ }),

/***/ "./src/app/shared/common/date-extensions.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/common/date-extensions.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Date.prototype.addDays = function (days) {
    return this.setDate(this.getDate() + days);
};
Date.prototype.isValidDate = function () {
    return this instanceof Date && !isNaN(this);
};


/***/ }),

/***/ "./src/app/shared/common/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/common/index.ts ***!
  \****************************************/
/*! exports provided: Validator, ApiResponseStatus, ApiOperationStatus, OrderType, SupportTicket, Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.enum */ "./src/app/shared/common/common.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiResponseStatus", function() { return _common_enum__WEBPACK_IMPORTED_MODULE_0__["ApiResponseStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiOperationStatus", function() { return _common_enum__WEBPACK_IMPORTED_MODULE_0__["ApiOperationStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderType", function() { return _common_enum__WEBPACK_IMPORTED_MODULE_0__["OrderType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SupportTicket", function() { return _common_enum__WEBPACK_IMPORTED_MODULE_0__["SupportTicket"]; });

/* harmony import */ var _common_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.utility */ "./src/app/shared/common/common.utility.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Common", function() { return _common_utility__WEBPACK_IMPORTED_MODULE_1__["Common"]; });

/* harmony import */ var _common_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.validator */ "./src/app/shared/common/common.validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return _common_validator__WEBPACK_IMPORTED_MODULE_2__["Validator"]; });






/***/ }),

/***/ "./src/app/shared/directive/eight-digit.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directive/eight-digit.directive.ts ***!
  \***********************************************************/
/*! exports provided: EightDigitDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EightDigitDirective", function() { return EightDigitDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EightDigitDirective = /** @class */ (function () {
    function EightDigitDirective(el) {
        this.el = el;
        this.regex = new RegExp(/^\d*\.?\d{0,8}$/g);
        this.specialKeys = ['Backspace', 'Tab', 'Delete', 'Ctrl', 'ArrowLeft',
            'ArrowRight', 'End', 'Home', '-', 'F12'];
    }
    EightDigitDirective.prototype.onKeyDown = function (event) {
        this.key = event.code;
        if (this.key === 65 && event.ctrlKey) {
            return;
        }
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], EightDigitDirective.prototype, "onKeyDown", null);
    EightDigitDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appEightDigit]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], EightDigitDirective);
    return EightDigitDirective;
}());



/***/ }),

/***/ "./src/app/shared/directive/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/directive/index.ts ***!
  \*******************************************/
/*! exports provided: EightDigitDirective, NumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _eight_digit_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eight-digit.directive */ "./src/app/shared/directive/eight-digit.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EightDigitDirective", function() { return _eight_digit_directive__WEBPACK_IMPORTED_MODULE_0__["EightDigitDirective"]; });

/* harmony import */ var _number_only_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number-only.directive */ "./src/app/shared/directive/number-only.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function() { return _number_only_directive__WEBPACK_IMPORTED_MODULE_1__["NumberOnlyDirective"]; });





/***/ }),

/***/ "./src/app/shared/directive/number-only.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directive/number-only.directive.ts ***!
  \***********************************************************/
/*! exports provided: NumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function() { return NumberOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        this.regex = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'Ctrl'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        this.key = event.code;
        if (this.key === 65 && event.ctrlKey) {
            return;
        }
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNumberOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "./src/app/shared/model/authentication.ts":
/*!************************************************!*\
  !*** ./src/app/shared/model/authentication.ts ***!
  \************************************************/
/*! exports provided: Register, ConfirmPassword, Login, ForgotPassword, ResetPassword, ChangePassword, Profile, DisableTwoFactor, VerifyTwoFactor, ContactUs, NewsLetter, VerifyWithdraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPassword", function() { return ConfirmPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword", function() { return ForgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword", function() { return ResetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableTwoFactor", function() { return DisableTwoFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyTwoFactor", function() { return VerifyTwoFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return ContactUs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsLetter", function() { return NewsLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyWithdraw", function() { return VerifyWithdraw; });
var Register = /** @class */ (function () {
    function Register() {
    }
    return Register;
}());

var ConfirmPassword = /** @class */ (function () {
    function ConfirmPassword() {
    }
    return ConfirmPassword;
}());

var Login = /** @class */ (function () {
    function Login() {
    }
    return Login;
}());

var ForgotPassword = /** @class */ (function () {
    function ForgotPassword() {
    }
    return ForgotPassword;
}());

var ResetPassword = /** @class */ (function () {
    function ResetPassword() {
    }
    return ResetPassword;
}());

var ChangePassword = /** @class */ (function () {
    function ChangePassword() {
    }
    return ChangePassword;
}());

var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());

var DisableTwoFactor = /** @class */ (function () {
    function DisableTwoFactor() {
    }
    return DisableTwoFactor;
}());

var VerifyTwoFactor = /** @class */ (function () {
    function VerifyTwoFactor() {
    }
    return VerifyTwoFactor;
}());

var ContactUs = /** @class */ (function () {
    function ContactUs() {
    }
    return ContactUs;
}());

var NewsLetter = /** @class */ (function () {
    function NewsLetter() {
    }
    return NewsLetter;
}());

var VerifyWithdraw = /** @class */ (function () {
    function VerifyWithdraw() {
    }
    return VerifyWithdraw;
}());



/***/ }),

/***/ "./src/app/shared/model/currency.ts":
/*!******************************************!*\
  !*** ./src/app/shared/model/currency.ts ***!
  \******************************************/
/*! exports provided: CurrencyMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyMaster", function() { return CurrencyMaster; });
var CurrencyMaster = /** @class */ (function () {
    function CurrencyMaster() {
    }
    return CurrencyMaster;
}());



/***/ }),

/***/ "./src/app/shared/model/exchange.ts":
/*!******************************************!*\
  !*** ./src/app/shared/model/exchange.ts ***!
  \******************************************/
/*! exports provided: ExchangeModal, MarketExchangeModal, StopLimitModel, Exchange, DailyExchange, ExchangePriceModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeModal", function() { return ExchangeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketExchangeModal", function() { return MarketExchangeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopLimitModel", function() { return StopLimitModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exchange", function() { return Exchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyExchange", function() { return DailyExchange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangePriceModel", function() { return ExchangePriceModel; });
var ExchangeModal = /** @class */ (function () {
    function ExchangeModal() {
    }
    return ExchangeModal;
}());

var MarketExchangeModal = /** @class */ (function () {
    function MarketExchangeModal() {
    }
    return MarketExchangeModal;
}());

var StopLimitModel = /** @class */ (function () {
    function StopLimitModel() {
    }
    return StopLimitModel;
}());

var Exchange = /** @class */ (function () {
    function Exchange() {
    }
    return Exchange;
}());

var DailyExchange = /** @class */ (function () {
    function DailyExchange() {
    }
    return DailyExchange;
}());

var ExchangePriceModel = /** @class */ (function () {
    function ExchangePriceModel() {
    }
    return ExchangePriceModel;
}());



/***/ }),

/***/ "./src/app/shared/model/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/model/index.ts ***!
  \***************************************/
/*! exports provided: Register, ConfirmPassword, Login, ForgotPassword, ResetPassword, ChangePassword, Profile, DisableTwoFactor, VerifyTwoFactor, ContactUs, NewsLetter, VerifyWithdraw, CurrencyMaster, ExchangeModal, MarketExchangeModal, StopLimitModel, Exchange, DailyExchange, ExchangePriceModel, Response, User, UserSupport, TradeHistorySearch, TwoFactor, WalletMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication */ "./src/app/shared/model/authentication.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["Register"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmPassword", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["ConfirmPassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["ForgotPassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetPassword", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["ResetPassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["ChangePassword"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["Profile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisableTwoFactor", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["DisableTwoFactor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyTwoFactor", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["VerifyTwoFactor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["ContactUs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewsLetter", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["NewsLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerifyWithdraw", function() { return _authentication__WEBPACK_IMPORTED_MODULE_0__["VerifyWithdraw"]; });

/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency */ "./src/app/shared/model/currency.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyMaster", function() { return _currency__WEBPACK_IMPORTED_MODULE_1__["CurrencyMaster"]; });

/* harmony import */ var _exchange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exchange */ "./src/app/shared/model/exchange.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangeModal", function() { return _exchange__WEBPACK_IMPORTED_MODULE_2__["ExchangeModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarketExchangeModal", function() { return _exchange__WEBPACK_IMPORTED_MODULE_2__["MarketExchangeModal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StopLimitModel", function() { return _exchange__WEBPACK_IMPORTED_MODULE_2__["StopLimitModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Exchange", function() { return _exchange__WEBPACK_IMPORTED_MODULE_2__["Exchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DailyExchange", function() { return _exchange__WEBPACK_IMPORTED_MODULE_2__["DailyExchange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExchangePriceModel", function() { return _exchange__WEBPACK_IMPORTED_MODULE_2__["ExchangePriceModel"]; });

/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response */ "./src/app/shared/model/response.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return _response__WEBPACK_IMPORTED_MODULE_3__["Response"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/app/shared/model/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_4__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSupport", function() { return _user__WEBPACK_IMPORTED_MODULE_4__["UserSupport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradeHistorySearch", function() { return _user__WEBPACK_IMPORTED_MODULE_4__["TradeHistorySearch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TwoFactor", function() { return _user__WEBPACK_IMPORTED_MODULE_4__["TwoFactor"]; });

/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet */ "./src/app/shared/model/wallet.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WalletMaster", function() { return _wallet__WEBPACK_IMPORTED_MODULE_5__["WalletMaster"]; });









/***/ }),

/***/ "./src/app/shared/model/response.ts":
/*!******************************************!*\
  !*** ./src/app/shared/model/response.ts ***!
  \******************************************/
/*! exports provided: Response */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());



/***/ }),

/***/ "./src/app/shared/model/user.ts":
/*!**************************************!*\
  !*** ./src/app/shared/model/user.ts ***!
  \**************************************/
/*! exports provided: User, UserSupport, TradeHistorySearch, TwoFactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSupport", function() { return UserSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeHistorySearch", function() { return TradeHistorySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoFactor", function() { return TwoFactor; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var UserSupport = /** @class */ (function () {
    function UserSupport() {
    }
    return UserSupport;
}());

var TradeHistorySearch = /** @class */ (function () {
    function TradeHistorySearch() {
    }
    return TradeHistorySearch;
}());

var TwoFactor = /** @class */ (function () {
    function TwoFactor() {
    }
    return TwoFactor;
}());



/***/ }),

/***/ "./src/app/shared/model/wallet.ts":
/*!****************************************!*\
  !*** ./src/app/shared/model/wallet.ts ***!
  \****************************************/
/*! exports provided: WalletMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletMaster", function() { return WalletMaster; });
var WalletMaster = /** @class */ (function () {
    function WalletMaster() {
    }
    return WalletMaster;
}());



/***/ }),

/***/ "./src/app/shared/pipes/date-format.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/date-format.pipe.ts ***!
  \**************************************************/
/*! exports provided: DateFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function() { return DateFormatPipe; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateFormatPipe = /** @class */ (function (_super) {
    __extends(DateFormatPipe, _super);
    function DateFormatPipe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DateFormatPipe.prototype.transform = function (value) {
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]('en-US');
        value = datePipe.transform(value, 'dd-MM-yyyy hh:mm:ss');
        return value;
    };
    DateFormatPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'appDateFormat'
        })
    ], DateFormatPipe);
    return DateFormatPipe;
}(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]));



/***/ }),

/***/ "./src/app/shared/pipes/dynamic-digit.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/dynamic-digit.pipe.ts ***!
  \****************************************************/
/*! exports provided: DynamicDigitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicDigitPipe", function() { return DynamicDigitPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DynamicDigitPipe = /** @class */ (function () {
    function DynamicDigitPipe() {
    }
    DynamicDigitPipe.prototype.transform = function (value, digit) {
        return value !== undefined && value !== null
            ? parseFloat(value.toString()).toFixed(digit)
            : value;
    };
    DynamicDigitPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "appDynamicDigit"
        })
    ], DynamicDigitPipe);
    return DynamicDigitPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filter-array.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/filter-array.pipe.ts ***!
  \***************************************************/
/*! exports provided: FilterArrayPipe, TradeDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterArrayPipe", function() { return FilterArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeDatePipe", function() { return TradeDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterArrayPipe = /** @class */ (function () {
    function FilterArrayPipe() {
    }
    FilterArrayPipe.prototype.transform = function (array) {
        array.sort(function (a, b) {
            if (a.price < b.price) {
                return -1;
            }
            else if (a.price > b.price) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    FilterArrayPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterArrayPipe'
        })
    ], FilterArrayPipe);
    return FilterArrayPipe;
}());

var TradeDatePipe = /** @class */ (function () {
    function TradeDatePipe() {
    }
    TradeDatePipe.prototype.transform = function (value, fromDate, toDate, args) {
        if (value === undefined || value == null) {
            return;
        }
        if (args != null) {
            if (args === 0) {
                value = value.filter(function (item) {
                    return item;
                });
            }
            else if (args !== '0') {
                value = value.filter(function (item) {
                    return item.Type.toLowerCase().indexOf(args.toLowerCase()) > -1;
                });
            }
        }
        if (fromDate === undefined || toDate === undefined) {
            return value;
        }
        // if (!fromDate.isValidDate() || !toDate.isValidDate()) {
        //   return value;
        // }
        var fd = new Date(fromDate).getDate();
        var td = new Date(toDate).getDate();
        if (fd === td) {
            return value.filter(function (d) {
                var date = new Date(d.TransactionDate).getDate();
                return fd === date;
            });
        }
        else {
            return value.filter(function (d) {
                var date = new Date(d.TransactionDate).getDate();
                return fd <= date && date <= td;
            });
        }
    };
    TradeDatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'tradeDatePipe'
        })
    ], TradeDatePipe);
    return TradeDatePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pipes/index.ts ***!
  \***************************************/
/*! exports provided: DateFormatPipe, DynamicDigitPipe, SplitString, FilterArrayPipe, TradeDatePipe, ZeroFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_format_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-format.pipe */ "./src/app/shared/pipes/date-format.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function() { return _date_format_pipe__WEBPACK_IMPORTED_MODULE_0__["DateFormatPipe"]; });

/* harmony import */ var _dynamic_digit_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-digit.pipe */ "./src/app/shared/pipes/dynamic-digit.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicDigitPipe", function() { return _dynamic_digit_pipe__WEBPACK_IMPORTED_MODULE_1__["DynamicDigitPipe"]; });

/* harmony import */ var _split_string_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./split-string.pipe */ "./src/app/shared/pipes/split-string.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplitString", function() { return _split_string_pipe__WEBPACK_IMPORTED_MODULE_2__["SplitString"]; });

/* harmony import */ var _filter_array_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-array.pipe */ "./src/app/shared/pipes/filter-array.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterArrayPipe", function() { return _filter_array_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterArrayPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TradeDatePipe", function() { return _filter_array_pipe__WEBPACK_IMPORTED_MODULE_3__["TradeDatePipe"]; });

/* harmony import */ var _zero_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zero-filter.pipe */ "./src/app/shared/pipes/zero-filter.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZeroFilterPipe", function() { return _zero_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["ZeroFilterPipe"]; });








/***/ }),

/***/ "./src/app/shared/pipes/split-string.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/split-string.pipe.ts ***!
  \***************************************************/
/*! exports provided: SplitString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitString", function() { return SplitString; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplitString = /** @class */ (function () {
    function SplitString() {
    }
    SplitString.prototype.transform = function (input, splitChar, splitIndex) {
        return input.split(splitChar)[splitIndex];
    };
    SplitString = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'splitString'
        })
    ], SplitString);
    return SplitString;
}());



/***/ }),

/***/ "./src/app/shared/pipes/zero-filter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/zero-filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: ZeroFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZeroFilterPipe", function() { return ZeroFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ZeroFilterPipe = /** @class */ (function () {
    function ZeroFilterPipe() {
    }
    ZeroFilterPipe.prototype.transform = function (items, flag) {
        if (!items) {
            return [];
        }
        if (!flag) {
            return items;
        }
        return items.filter(function (x) { return x.TotBalance > 0; });
    };
    ZeroFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'zeroFilterPipe'
        })
    ], ZeroFilterPipe);
    return ZeroFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_ladda_module_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-ladda/module/module */ "./node_modules/angular2-ladda/module/module.js");
/* harmony import */ var angular2_recaptcha_angular2_recaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-recaptcha/angular2-recaptcha */ "./node_modules/angular2-recaptcha/angular2-recaptcha.js");
/* harmony import */ var angular2_recaptcha_angular2_recaptcha__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_recaptcha_angular2_recaptcha__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_perfect_scrollbar_dist_ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.js");
/* harmony import */ var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-qrcode2 */ "./node_modules/ngx-qrcode2/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common */ "./src/app/shared/common/index.ts");
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directive */ "./src/app/shared/directive/index.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes */ "./src/app/shared/pipes/index.ts");
/* harmony import */ var _common_array_extensions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/array-extensions */ "./src/app/shared/common/array-extensions.ts");
/* harmony import */ var _common_array_extensions__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_common_array_extensions__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _common_date_extensions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/date-extensions */ "./src/app/shared/common/date-extensions.ts");
/* harmony import */ var _common_date_extensions__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_common_date_extensions__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-datatables/src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony import */ var ng_marquee__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-marquee */ "./node_modules/ng-marquee/fesm5/ng-marquee.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true
};
var pipes = [_pipes__WEBPACK_IMPORTED_MODULE_13__["DateFormatPipe"], _pipes__WEBPACK_IMPORTED_MODULE_13__["DynamicDigitPipe"], _pipes__WEBPACK_IMPORTED_MODULE_13__["TradeDatePipe"], _pipes__WEBPACK_IMPORTED_MODULE_13__["FilterArrayPipe"], _pipes__WEBPACK_IMPORTED_MODULE_13__["SplitString"], _pipes__WEBPACK_IMPORTED_MODULE_13__["ZeroFilterPipe"]];
var directives = [_directive__WEBPACK_IMPORTED_MODULE_12__["EightDigitDirective"], _directive__WEBPACK_IMPORTED_MODULE_12__["NumberOnlyDirective"]];
var notifierDefaultOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'top',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: false,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
};
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                // Angular
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                // 3rd party
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"].forRoot(),
                angular2_ladda_module_module__WEBPACK_IMPORTED_MODULE_3__["LaddaModule"].forRoot({ style: 'zoom-in' }),
                ngx_perfect_scrollbar_dist_ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_9__["NgxQRCodeModule"],
                angular2_recaptcha_angular2_recaptcha__WEBPACK_IMPORTED_MODULE_4__["ReCaptchaModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({ positionClass: 'toast-top-right' }),
                ng_marquee__WEBPACK_IMPORTED_MODULE_17__["NgMarqueeModule"],
                angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_16__["DataTablesModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_18__["NotifierModule"].withConfig(notifierDefaultOptions)
            ],
            declarations: pipes.concat(directives),
            exports: pipes.concat(directives, [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionModule"],
                angular2_ladda_module_module__WEBPACK_IMPORTED_MODULE_3__["LaddaModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"],
                ngx_qrcode2__WEBPACK_IMPORTED_MODULE_9__["NgxQRCodeModule"],
                ngx_perfect_scrollbar_dist_ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                angular2_recaptcha_angular2_recaptcha__WEBPACK_IMPORTED_MODULE_4__["ReCaptchaModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"],
                ng_marquee__WEBPACK_IMPORTED_MODULE_17__["NgMarqueeModule"],
                angular_datatables_src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_16__["DataTablesModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_18__["NotifierModule"]
            ]),
            providers: [
                {
                    provide: ngx_perfect_scrollbar_dist_ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }, _common__WEBPACK_IMPORTED_MODULE_11__["Common"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/trade/trade.component.html":
/*!********************************************!*\
  !*** ./src/app/trade/trade.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container-full-width\">\n    <div class=\"crypt-header\">\n      <div class=\"row\">\n        <div class=\"col-xl-4 col-lg-4 col-md-4 col-sm-5\">\n          <div class=\"row\">\n            <div class=\"col-xs-2\">\n              <div class=\"crypt-logo\">\n                <img src=\"../../../assets/exchanger/images/logo.png\" alt=\"\" />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-8 col-lg-8 col-md-8 d-none d-md-block d-lg-block\">\n          <ul class=\"crypt-heading-menu fright\">\n            <li>\n              <a href=\"/\">Home</a>\n            </li>\n            <!-- <li>\n              <a [routerLink]=\"['/user/balancehistory']\" routerLinkActive=\"active\">Overview</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/user/balancehistory']\" routerLinkActive=\"active\">Market Cap</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/user/balancehistoory']\" routerLinkActive=\"active\">Trading</a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/user/balancehistory']\" routerLinkActive=\"active\">Account</a>\n            </li> -->\n            <!-- <li class=\"crypt-box-menu menu-green\" *ngIf=\"!isLogin\">\n              <a href=\"javascript:void(0);\" [routerLink]=\"['/login']\">login</a>\n            </li> -->\n            <!-- <li class=\"btn btn-danger\" *ngIf=\"isLogin\">\n              <a href=\"javascript:void(0);\" (click)=\"Logout();\">logout</a>\n            </li> -->\n          </ul>\n        </div>\n        <i class=\"menu-toggle pe-7s-menu d-xs-block d-sm-block d-md-none\n          d-sm-none\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"crypt-mobile-menu\">\n    <ul class=\"crypt-heading-menu\">\n      <li class=\"active\"><a href=\"#\">Exchange</a></li>\n      <li><a href=\"#\">Market Cap</a></li>\n      <li><a href=\"#\">Treanding</a></li>\n      <li><a href=\"#\">Tools</a></li>\n      <li class=\"crypt-box-menu menu-red\"><a href=\"#\">register</a></li>\n      <li class=\"crypt-box-menu menu-green\"><a href=\"#\">login</a></li>\n    </ul>\n    <div class=\"crypt-gross-market-cap\">\n      <h5>$34.795.90 <span class=\"crypt-up pl-2\">+3.435 %</span></h5>\n      <h6>0.7925.90 BTC <span class=\"crypt-down pl-2\">+7.435 %</span></h6>\n    </div>\n  </div>\n</header>\n<div class=\"container-fluid\">\n  <div class=\"row sm-gutters\">\n    <div class=\"col-md-3 col-lg-3 col-xl-3 col-xxl-2\">\n      <div class=\"crypt-market-status mt-3\">\n        <div>\n          <ul class=\"nav nav-tabs\" id=\"crypt-tab\">\n            <li role=\"presentation\">\n              <a href=\"#btc\" data-toggle=\"tab\" [ngClass]=\"{ active: selectedItem == '1' }\"\n                (click)=\"GetMarketListTab(1)\">btc</a>\n            </li>\n\n            <li role=\"presentation\">\n              <a href=\"#eth\" data-toggle=\"tab\" [ngClass]=\"{ active: selectedItem == '2' }\"\n                (click)=\"GetMarketListTab(2)\">eth</a>\n            </li>\n            <li role=\"presentation\">\n              <a href=\"#usdt\" class=\"active\" data-toggle=\"tab\" [ngClass]=\"{ active: selectedItem == '3' }\"\n                (click)=\"GetMarketListTab(3)\">usdt</a>\n            </li>\n          </ul>\n          <div class=\"tab-content crypt-tab-content\">\n            <div role=\"tabpanel\" class=\" active\" id=\"usd\">\n              <app-loader [IsLoading]=\"loading\"></app-loader>\n              <table class=\"table table-striped\">\n                <thead>\n                  <tr class=\"table-head\">\n                    <th scope=\"col\">Pair</th>\n                    <th scope=\"col\">Price</th>\n                    <th scope=\"col\">Change</th>\n                  </tr>\n                </thead>\n                <tbody class=\"crypt-table-hover\">\n\n                  <tr *ngFor=\"let item of currencyPairList\" (click)=\"GetRowDetail(item)\" class=\"cr_success\"\n                    style=\"line-height: 2.2em;\" [ngClass]=\"{ 'bg-row': item.name == selectedRow }\">\n\n                    <td class=\"align-middle\">{{ item.name }}</td>\n\n                    <td class=\"crypt-down align-middle\">\n                      <span class=\"pr-2 text-center\" data-toggle=\"tooltip\" data-placement=\"right\"\n                        data-original-title=\"$ 0.05\">{{ item.price | appDynamicDigit: 8 }}</span>\n                    </td>\n\n                    <td appColor [attr.value]=\"item.change\">\n                      <span class=\"d-block\">{{ item.change | appDynamicDigit: 2 }}%</span>\n                    </td>\n\n                  </tr>\n                  <tr *ngIf=\"dataList?.length == 0\">\n                    <td colspan=\"3\">No data found</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-lg-6 col-xl-6 col-xxl-8\">\n      <app-chart [pairId]=\"pairId\" [baseCurrency]=\"baseCurrency\" [mainCurrency]=\"mainCurrency\"></app-chart>\n      <app-exchange [pairId]=\"pairId\" [baseCurrency]=\"baseCurrency\" [mainCurrency]=\"mainCurrency\" [side]=\"side\"\n        [price]=\"price\" [amount]=\"amount\" [total]=\"total\" [buyModel]=\"buyModel\" [sellModel]=\"sellModel\"></app-exchange>\n\n      <!-- <div id=\"depthchart\" class=\"depthchart h-40 crypt-dark-segment\"></div> -->\n    </div>\n    <div class=\"col-md-4 col-lg-3 col-xl-3 col-xxl-2\">\n      <app-home-trade-history [baseCurrency]=\"baseCurrency\" [mainCurrency]=\"mainCurrency\" [pairId]=\"pairId\">\n      </app-home-trade-history>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid\">\n  <app-orders [baseCurrency]=\"baseCurrency\" [mainCurrency]=\"mainCurrency\" [pairId]=\"pairId\"\n    (orederTypeChange)=\"changeOrderType($event)\" (priceChange)=\"changePrice($event)\"\n    (amountChange)=\"changeAmount($event)\" (totalChange)=\"changeTotal($event)\" (buyModelChange)=\"changeBuyModel($event)\"\n    (sellModelChange)=\"changeSellModel($event)\"></app-orders>\n</div>\n<footer></footer>"

/***/ }),

/***/ "./src/app/trade/trade.component.ts":
/*!******************************************!*\
  !*** ./src/app/trade/trade.component.ts ***!
  \******************************************/
/*! exports provided: TradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeComponent", function() { return TradeComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/service */ "./src/app/core/service/index.ts");
/* harmony import */ var _shared_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/common */ "./src/app/shared/common/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TradeComponent = /** @class */ (function () {
    function TradeComponent(url, authenticationService, exchangeService, toast, router, common, tradeService, pusher, activeRoute, location) {
        var _this = this;
        this.url = url;
        this.authenticationService = authenticationService;
        this.exchangeService = exchangeService;
        this.toast = toast;
        this.router = router;
        this.common = common;
        this.tradeService = tradeService;
        this.pusher = pusher;
        this.activeRoute = activeRoute;
        this.location = location;
        this.baseCurrencyData = [];
        this.isExchange = true;
        this.router.events.subscribe(function (path) {
            _this.route = path.url;
        });
        this.authenticationService.isLoginChanged.subscribe(function (isLogins) {
            setTimeout(function () {
                _this.isLogin = isLogins;
            }, 10);
        });
        // const routeParams = this.activeRoute.snapshot.params;
    }
    TradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pusher.ch_currency_pair.subscribe(function (currencyPair) {
            if (currencyPair.original != undefined) {
                _this.dataList = currencyPair.original.data;
                _this.currencyPairList = _this.dataList.filter(function (x) { return x.base_currency_id === _this.selectedItem; });
            }
        });
        this.router.events.subscribe(function (event) {
            if (event != null &&
                (event.url != null || event.url !== undefined) &&
                event.url.split("/").length >= 2 &&
                event.url.split("/")[2]) {
                var data = event.url.split("/")[2];
            }
        });
        if (localStorage.getItem("MarketList") &&
            localStorage.getItem("BaseMarketId")) {
            if (localStorage.getItem("selectedMarket")) {
                this.result = JSON.parse(localStorage.getItem("selectedMarket"));
            }
            else {
                var marketList = JSON.parse(localStorage.getItem("MarketList"));
                this.dataList = marketList;
                this.result = this.dataList.first();
            }
            this.selectedItem = localStorage.getItem("BaseMarketId");
            var baseName = this.result.name.split("/");
            this.baseCurrency = baseName[1];
            this.mainCurrency = baseName[0];
            this.pairId = this.result.id;
            this.selectedRow = this.result.name;
            this.location.replaceState("/trade#" + this.mainCurrency + "_" + this.baseCurrency);
        }
        else {
            this.baseCurrency = "BTC";
            this.mainCurrency = "ETH";
            this.pairId = 1;
            this.selectedItem = "1";
            this.selectedRow = "ETH/BTC";
            this.location.replaceState("/trade#" + this.mainCurrency + "_" + this.baseCurrency);
        }
        this.activeRoute.params.subscribe(function (routeParams) {
            if (routeParams.pair != undefined) {
                _this.GetPairDetail(routeParams.pair);
            }
            else {
                _this.GetPairDetail(_this.mainCurrency + "_" + _this.baseCurrency);
            }
        });
        if (localStorage.getItem("currentUser")) {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            this.email = currentUser.email;
        }
    };
    TradeComponent.prototype.GetMarketListTab = function (paramValue) {
        this.currencyPairList = this.dataList.filter(function (x) { return x.base_currency_id === paramValue; });
        localStorage.setItem("MarketList", JSON.stringify(this.currencyPairList));
        localStorage.setItem("BaseMarketId", paramValue);
    };
    TradeComponent.prototype.GetPairDetail = function (pairName) {
        var _this = this;
        this.loading = true;
        this.exchangeService.GetMarketListByName(pairName).subscribe(function (res) {
            if (res.success) {
                _this.dataList = res.data;
                for (var pairList in res.data) {
                    if (res.data.hasOwnProperty(pairList)) {
                        var element = res.data[pairList];
                        _this.selectedItem = element.base_currency_id;
                        _this.GetMarketListTab(_this.selectedItem);
                        localStorage.setItem("BaseMarketId", element.base_currency_id);
                        var pair = element.name.replace('/', '_');
                        if (pairName == pair) {
                            _this.GetRowDetail(element);
                            break;
                        }
                    }
                }
                _this.loading = false;
            }
        });
    };
    TradeComponent.prototype.GetRowDetail = function (item) {
        this.selectedRow = item.name;
        this.pairId = item.id;
        var data = item.name.split("/");
        this.baseCurrency = data[1];
        this.mainCurrency = data[0];
        // this.pair = this.mainCurrency + "_" + this.baseCurrency;
        localStorage.setItem("selectedMarket", JSON.stringify(item));
        this.location.replaceState("/trade#" + this.mainCurrency + "_" + this.baseCurrency);
        // this.router.navigate(["/trade"]);
    };
    TradeComponent.prototype.receiveAvtar = function ($event) {
        this.avtarImg = $event;
    };
    TradeComponent.prototype.fullNameEve = function ($event) {
        this.fullName = $event === "null null" ? "" : $event;
    };
    TradeComponent.prototype.Logout = function () {
        var _this = this;
        this.exchangeService.userLogout().subscribe(function (res) {
            if (res.data != undefined) {
                _this.authenticationService.Logout();
                window.location.href = "/login";
            }
        });
        // this.router.navigate(["/login"]);
    };
    TradeComponent.prototype.changeBaseCurrency = function ($event) {
        this.baseCurrency = $event;
    };
    TradeComponent.prototype.changeMainCurrency = function ($event) {
        this.mainCurrency = $event;
    };
    TradeComponent.prototype.changePair = function ($event) {
        this.pairId = $event;
    };
    TradeComponent.prototype.changeOrderType = function ($event) {
        this.orderType = $event;
    };
    TradeComponent.prototype.changePrice = function ($event) {
        this.price = $event;
    };
    TradeComponent.prototype.changeAmount = function ($event) {
        this.amount = $event;
    };
    TradeComponent.prototype.changeTotal = function ($event) {
        this.total = $event;
    };
    TradeComponent.prototype.changeBuyModel = function ($event) {
        this.buyModel = $event;
    };
    TradeComponent.prototype.changeSellModel = function ($event) {
        this.sellModel = $event;
    };
    TradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trade',
            template: __webpack_require__(/*! ./trade.component.html */ "./src/app/trade/trade.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["ExchangeService"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_common__WEBPACK_IMPORTED_MODULE_4__["Common"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["TradeService"],
            _core_service__WEBPACK_IMPORTED_MODULE_3__["PusherService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]])
    ], TradeComponent);
    return TradeComponent;
}());



/***/ }),

/***/ "./src/app/ui/error/error.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/error/error.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login\">\r\n    <div class=\"container\">\r\n        <div class=\"row xs-mb-30 md-mt-100 xs-mt-50\">\r\n            <div class=\"col-md-6 col-md-offset-3 text-center\">\r\n                <div class=\"n-found-s md-mt-100 xs-mt-50\">\r\n                    <img src=\"../../../assets/images/error.png\" class=\"xs-mt-20\">\r\n                    <h2 class=\"text-danger\">500 Internal Server Error</h2>\r\n                    <h3 style=\"    color: #ccd9e8;\">An error occurred while processing this request.</h3>\r\n                    <h4 style=\"color: #ccd9e8;\" class=\"xs-mt-30\">Go to <i class=\"fa fa-long-arrow-right\"></i> <a\r\n                            [routerLink]=\"['/trade']\" class=\"btn btn-link btn-warning\">Home Page</a></h4>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/ui/error/error.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ui/error/error.component.ts ***!
  \*********************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/ui/error/error.component.html")
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/ui/index.ts":
/*!*****************************!*\
  !*** ./src/app/ui/index.ts ***!
  \*****************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.module */ "./src/app/ui/ui.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return _ui_module__WEBPACK_IMPORTED_MODULE_0__["UiModule"]; });




/***/ }),

/***/ "./src/app/ui/loader/loader.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/loader/loader.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" *ngIf=\"IsLoading\"> <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom\"></i></div>"

/***/ }),

/***/ "./src/app/ui/loader/loader.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/loader/loader.component.ts ***!
  \***********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoaderComponent.prototype, "IsLoading", void 0);
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/ui/loader/loader.component.html")
        })
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/notfound/notfound.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/notfound/notfound.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login\">\r\n    <div class=\"container\">\r\n        <div class=\"row xs-mb-30\">\r\n            <div class=\"col-md-12 col-md-offset-3 text-center\">\r\n                <div class=\"n-found-s\">\r\n                    <h1>404</h1>\r\n                    <!-- <img src=\"../../../assets/images/cards.png\" class=\"xs-mt-50\" style=\"    max-width: 400px;\"> -->\r\n                    <h3 class=\"xs-pb-30 xs-pt-10\">The Requested page does not Exits!</h3>\r\n                    <a [routerLink]=\"['/trade']\" class=\"btn-404\">Home Page</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/ui/notfound/notfound.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/notfound/notfound.component.ts ***!
  \***************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/ui/notfound/notfound.component.html")
        })
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "./src/app/ui/error/error.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/ui/loader/loader.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/ui/notfound/notfound.component.ts");
/* harmony import */ var _ui_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui.routing */ "./src/app/ui/ui.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var component = [_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"]];
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: component.slice(),
            exports: component.slice(),
            imports: [_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _ui_routing__WEBPACK_IMPORTED_MODULE_5__["UiRoutingModule"]]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/ui/ui.routing.ts":
/*!**********************************!*\
  !*** ./src/app/ui/ui.routing.ts ***!
  \**********************************/
/*! exports provided: UiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiRoutingModule", function() { return UiRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "./src/app/ui/error/error.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/ui/notfound/notfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "error", component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"] },
    { path: "notfound", component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"] }
];
var UiRoutingModule = /** @class */ (function () {
    function UiRoutingModule() {
    }
    UiRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UiRoutingModule);
    return UiRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    apiUrl: "http://localhost:8000/api/",
    frontUrl: "http://localhost:4200/",
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\laravel-trading-platform\trading-platform\exchange\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map