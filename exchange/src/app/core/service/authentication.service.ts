import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import {
  DisableTwoFactor,
  ForgotPassword,
  Login,
  Register,
  ResetPassword,
  VerifyTwoFactor,
  VerifyWithdraw
} from "../../shared/model/authentication";
import { HttpService } from "./http.service";

@Injectable()
export class AuthenticationService {
  isUserNameChanged: EventEmitter<string> = new EventEmitter<string>();
  isLoginChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient, public httpService: HttpService) { }

  Register(obj: Register) {
    return this.http.post(`${environment.apiUrl}/register`, obj);
  }

  GetSetting() {
    return this.http.get(`${environment.apiUrl}Setting`);
  }

  Login(obj: Login) {
    return this.http.post(
      `${environment.apiUrl}login`,
      `email=${obj.email}&password=${obj.password}`,
      this.httpService.GetHttpCommon()
    );
  }

  Forgot(obj: ForgotPassword) {
    return this.http.post(
      `${environment.apiUrl}User/ForgotPassword/${obj.email}`,
      this.httpService.GetAuthHttpCommon()
    );
  }

  ConfirmEmail(code: string) {
    return this.http.get(
      `${environment.apiUrl}User/ConfirmUser?code=${code}`,
      this.httpService.GetAuthHttpCommon()
    );
  }

  Reset(obj: ResetPassword) {
    return this.http.post(
      `${environment.apiUrl}User/ResetPassword`,
      JSON.stringify(obj),
      this.httpService.GetAuthHttpCommon()
    );
  }

  CheckUserLoggedIn(): boolean {
    if (localStorage.getItem("currentUser")) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

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

      const name =
        `${currentUser.name}` === ""
          ? currentUser.email
          : `${currentUser.name}`;
      this.isUserNameChanged.emit(name);
      this.isLoginChanged.emit(true);
      return true;
    }
    this.isUserNameChanged.emit("");
    this.isLoginChanged.emit(false);
    return false;
  }

  GetUserName(): string {
    if (localStorage.getItem("currentUser")) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      return currentUser.Firstname === null || currentUser.Lastname === null
        ? currentUser.Email
        : `${currentUser.Firstname} ${currentUser.Lastname}`;
    }
    return "";
  }

  Logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("BaseMarketId");
    localStorage.removeItem("MarketList");
    localStorage.removeItem("selectedMarket");
    localStorage.removeItem("chartInterval");
    this.CheckUserLoggedIn();
  }
}
