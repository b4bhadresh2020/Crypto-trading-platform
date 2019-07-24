import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { ChangePassword, TwoFactor } from "../../shared/model";
import { HttpService } from "./http.service";

@Injectable()
export class UserService {
  constructor(private http: HttpClient, public httpService: HttpService) {}

  SaveUserProfile(obj: any) {
    return this.http.put(
      `${environment.apiUrl}User`,
      obj,
      this.httpService.GetOnlyAuth()
    );
  }

  GetUserDetails() {
    return this.http.get(
      `${environment.apiUrl}User/GetUser`,
      this.httpService.GetAuthHttpCommon()
    );
  }

  ChangePassword(obj: ChangePassword) {
    return this.http.post(
      `${environment.apiUrl}User/ChangePassword`,
      obj,
      this.httpService.GetAuthHttpCommon()
    );
  }

  GetOpenOrderList() {
    return this.http.get(
      `${environment.apiUrl}all_orders`,
      this.httpService.GetJsonHttpCommon()
    );
  }

  GetUserBalance() {
    return this.http.get(
      `${environment.apiUrl}User/GetUserBalance`,
      this.httpService.GetAuthHttpCommon()
    );
  }

  GetWalletDetail(currencyId: any) {
    return this.http.get(
      `${environment.apiUrl}Withdraw/GetWalletDetail/${currencyId}`,
      this.httpService.GetAuthHttpCommon()
    );
  }

  GetStopLimit() {
    return this.http.get(
      `${environment.apiUrl}User/GetStopLimit`,
      this.httpService.GetAuthHttpCommon()
    );
  }
}
