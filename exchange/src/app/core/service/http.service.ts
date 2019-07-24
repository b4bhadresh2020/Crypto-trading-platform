import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class HttpService {
  GetAuthHttpCommon() {
    const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null;
    const token = currentUser && currentUser.api_token;
    return {
      headers: new HttpHeaders()
        .set("Authorization", "Bearer " + token)
        .set("Accept", "application/json")
        .set("Content-Type", "application/x-www-form-urlencoded")
    };
  }

  GetOnlyAuth() {
    const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null;
    const token = currentUser && currentUser.api_token;
    return {
      headers: new HttpHeaders()
        .set("Authorization", "Bearer " + token)
        .set("Accept", "application/json")
    };
  }

  GetJsonHttpCommon() {
    return {
      headers: new HttpHeaders().set("Accept", "application/json")
    };
  }

  GetHttpCommon() {
    return {
      headers: new HttpHeaders()
        .set("Content-Type", "application/x-www-form-urlencoded")
        .set("Accept", "application/json")
    };
  }
}
