import { Component, Input, OnChanges, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import {
  AuthenticationService,
  ExchangeService,
  ToastService,
  PusherService
} from "../../core/service";
import { Common, Validator } from "../../shared/common";
import { ApiResponseStatus } from "../../shared/common";
import { Response, StopLimitModel } from "../../shared/model";

@Component({
  selector: "app-stoplimit",
  templateUrl: "./stoplimit.component.html"
})
export class StoplimitComponent implements OnInit, OnChanges {
  @Input() baseCurrency: string;
  @Input() mainCurrency: string;
  @Input() pairId: string;
  @Input() baseValue: number;
  @Input() mainValue: number;
  @Input() dBtnTrade: boolean;
  isLogin: boolean;
  buyForm: FormGroup;
  sellForm: FormGroup;
  isBuySubmitted = false;
  isSellSubmitted = false;
  isBuyLoading = false;
  isSellLoading = false;
  stopLimitObj = new StopLimitModel();

  constructor(
    public authenticationService: AuthenticationService,
    public exchangeService: ExchangeService,
    public fb: FormBuilder,
    public toast: ToastService,
    public common: Common,
    public router: Router,
    public pusher: PusherService,

  ) {
    this.authenticationService.isLoginChanged.subscribe((isLogin: any) => {
      setTimeout(() => (this.isLogin = isLogin), 0);
    });
  }

  ngOnChanges(change: any) {
    if (change.pairId !== undefined) {
      this.pairId =
        change.pairId !== undefined ? change.pairId.currentValue : this.pairId;
    }
    if (
      change.baseCurrency !== undefined ||
      change.mainCurrency !== undefined
    ) {
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
  }

  ngOnInit() {
    this.authenticationService.CheckUserLoggedIn();
    this.BindData();
    this.pusher.ch_wallet_amount.subscribe((wallet: any) => {
      if (wallet.original != undefined)
        this.BindExchange(wallet.original.data);
    });
  }

  GetWalletBalance(change): void {
    this.ResetForm();
    const obj = {
      BaseCurrency: this.baseCurrency,
      MainCurrency: this.mainCurrency
    };
    this.exchangeService.GetWalletBalance(obj).subscribe((res: any) => {
      if (res.success == true) {
        this.BindExchange(res);
      }
    });
  }

  BindExchange(data: any) {
    this.stopLimitObj.BaseValue = data.BaseCurrencyValue;
    this.stopLimitObj.MainValue = data.MainCurrencyValue;
  }
  BindData() {
    this.buyForm = new FormGroup({
      BuyAmount: new FormControl("", [Validators.required]),
      BuyLimit: new FormControl("", [
        Validators.required,
        Validator.StopLimitValidateBuy
      ]),
      BuyStop: new FormControl("", [Validators.required]),
      BuyTotal: new FormControl("")
    });
    this.sellForm = new FormGroup({
      SellAmount: new FormControl("", [Validators.required]),
      SellLimit: new FormControl("", [
        Validators.required,
        Validator.StopLimitValidateSell
      ]),
      SellStop: new FormControl("", [Validators.required]),
      SellTotal: new FormControl("")
    });
  }
  ResetForm() {
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
  }

  SetBuytotal(event) {
    if (event === "amount" || event === "limit") {
      if (
        this.common.IsNumeric(this.stopLimitObj.BuyAmount) &&
        this.common.IsNumeric(this.stopLimitObj.BuyLimit)
      ) {
        this.stopLimitObj.BuyTotal = parseFloat(
          (this.stopLimitObj.BuyAmount * this.stopLimitObj.BuyLimit).toFixed(8)
        );
      } else {
        this.stopLimitObj.BuyTotal = 0;
      }
    } else if (event === "total") {
      if (
        this.common.IsNumeric(this.stopLimitObj.BuyTotal) &&
        this.common.IsNumeric(this.stopLimitObj.BuyLimit)
      ) {
        this.stopLimitObj.BuyAmount = parseFloat(
          (this.stopLimitObj.BuyTotal / this.stopLimitObj.BuyLimit).toFixed(8)
        );
      } else {
        this.stopLimitObj.BuyAmount = 0;
      }
    }
  }

  SetSelltotal(event) {
    if (event === "amount" || event === "limit") {
      if (
        this.common.IsNumeric(this.stopLimitObj.SellAmount) &&
        this.common.IsNumeric(this.stopLimitObj.SellLimit)
      ) {
        this.stopLimitObj.SellTotal = parseFloat(
          (this.stopLimitObj.SellAmount * this.stopLimitObj.SellLimit).toFixed(
            8
          )
        );
      } else {
        this.stopLimitObj.SellTotal = 0;
      }
    } else if (event === "total") {
      if (
        this.common.IsNumeric(this.stopLimitObj.SellTotal) &&
        this.common.IsNumeric(this.stopLimitObj.SellLimit)
      ) {
        this.stopLimitObj.SellAmount = parseFloat(
          (this.stopLimitObj.SellTotal / this.stopLimitObj.SellLimit).toFixed(8)
        );
      } else {
        this.stopLimitObj.SellAmount = 0;
      }
    }
  }

  Buy(model: any, isValid: boolean) {
    this.isBuySubmitted = true;
    if (isValid) {
      this.isBuyLoading = true;
      const obj = {
        stop: model.BuyStop,
        limit: model.BuyLimit,
        amount: model.BuyAmount,
        currency_pair_id: this.pairId,
        side: "BUY"

      };
      this.exchangeService.OrderStopLimit(obj).subscribe((res: any) => {

        if (res.success == true) {
          this.isBuySubmitted = false;
          this.ResetForm();
          //this.GetWalletBalance(null);
          if (res.output != undefined && res.output != "")
            this.toast.success(res.output);
        } else {
          if (res.output != undefined && res.output != "")
            this.toast.error(res.output);
        }
        this.isBuyLoading = false;
      });
    }
  }

  Sell(model: any, isValid: boolean) {
    this.isSellSubmitted = true;
    if (isValid) {
      this.isSellLoading = true;
      const obj = {
        stop: model.SellStop,
        limit: model.SellLimit,
        amount: model.SellAmount,
        currency_pair_id: this.pairId,
        side: "SELL"
      };
      this.exchangeService.OrderStopLimit(obj).subscribe((res: any) => {

        if (res.success == true) {
          this.isSellSubmitted = false;
          this.ResetForm();
          //this.GetWalletBalance(null);
          if (res.output != undefined && res.output != "")
            this.toast.success(res.output);
        } else {
          this.isSellLoading = false;
          if (res.output != undefined && res.output != "")
            this.toast.error(res.output);
        }
        this.isSellLoading = false;
      });
    }
  }

  GoToUrl(route) {
    // this.router.navigate(["/" + route + ""]);
    window.location.href = "/" + route;
  }
}
