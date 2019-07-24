import { Component, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ReCaptchaComponent } from "angular2-recaptcha/angular2-recaptcha";
import { environment } from "../../environments/environment";
import { AuthenticationService, ToastService } from "../core/service";
import { Login, VerifyTwoFactor } from "../shared/model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;
  public userId: number;
  isLoginSubmitted = false;
  isLoading = false;
  public email: string;

  constructor(
    public authenticationService: AuthenticationService,
    public toast: ToastService,
    public router: Router,

  ) {
    this.BindForm();
  }

  BindForm() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  Login(obj: Login, isValid: boolean) {
    this.isLoginSubmitted = true;
    this.email = obj.email;
    if (isValid) {
      this.isLoading = true;
      this.authenticationService.Login(obj).subscribe((res: any) => {
        if (res.success == true) {
          this.SetLogin(res.data);
        } else {
          this.toast.error(res.output);
        }
        this.isLoading = false;
      });
    }
  }

  SetLogin(data) {
    localStorage.setItem("currentUser", JSON.stringify(data));
    this.authenticationService.CheckUserLoggedIn();
    window.location.href = "/trade#ETH_BTC";
  }
}
