import { LocationStrategy } from "@angular/common";
import { Component, isDevMode, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../environments/environment";
import { LoadingIndicatorService } from "./core/interceptor/httpinterceptor";
import { AuthenticationService } from "./core/service";
import { ApiResponseStatus } from "./shared/common";
import { Response } from "./shared/model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  public isLoading: boolean;
  public isLogin: boolean;

  constructor(
    private url: LocationStrategy,
    private router: Router,
    private authenticationService: AuthenticationService,
    public loadingService: LoadingIndicatorService
  ) {
    this.authenticationService.isLoginChanged.subscribe(isLogins => {
      this.isLogin = isLogins;
    });
    this.loadingService.onLoadingChanged.subscribe(isLoading =>
      setTimeout(() => (this.isLoading = isLoading), 0)
    );
    // this.CheckUserBlock();
  }

  ngOnInit() {
    // if (environment.production && location.protocol === 'http:') {
    //   window.location.href = location.href.replace('http', 'https');
    // }

    this.authenticationService.CheckUserLoggedIn();
    const currentUrl = this.url.path().substring(1);
    const str = ["login"];

    if ((currentUrl === "" && this.isLogin) || (this.isLogin && str.includes(currentUrl))) {
      this.router.navigate(["trade"]);
    }
  }
}
