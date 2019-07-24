import { Component, Input, OnChanges, OnInit, ViewChild, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { AuthenticationService, ExchangeService, PusherService, ToastService, TradeService } from "../../core/service";
import { Common } from "../../shared/common";
import { Validator } from "../../shared/common/common.validator";
import { DailyExchange, Exchange, ExchangeModal } from "../../shared/model";
import { debug } from "util";
declare var Pusher: any;

@Component({
  selector: "app-exchange",
  templateUrl: "./exchange.component.html"
})
export class ExchangeComponent implements OnInit, OnChanges {
  @ViewChild(ModalDirective) public modal: ModalDirective;
  isOpen = false;
  buysellmsg = "";
  exchange = new ExchangeModal();
  dailyExchange = new DailyExchange();
  buyForm: FormGroup;
  sellForm: FormGroup;
  isLogin: boolean;
  userId: string;
  isBuyLoading = false;
  isSellLoading = false;
  pairName: string;
  isSellSubmitted = false;
  isBuySubmitted = false;
  walletBalance: string;
  isDailyExchangeLoader = false;
  @Input() baseCurrency: string;
  @Input() mainCurrency: string;
  @Input() pairId: string;
  @Input() side: string;
  @Input() price: number;
  @Input() amount: number;
  @Input() total: number;
  @Input() buyModel: any;
  @Input() sellModel: any;
  @Input() baseValue: any;
  @Input() mainValue: any;
  arrBalPerc = [25, 50, 75, 100];

  constructor(
    public authenticationService: AuthenticationService,
    public exchangeService: ExchangeService,
    public fb: FormBuilder,
    public toast: ToastService,
    private router: Router,
    public tradeService: TradeService,
    public pusher: PusherService,
    public common: Common,
  ) {
    Pusher.logToConsole = true;
    this.authenticationService.isLoginChanged.subscribe((isLogin: any) => {
      setTimeout(() => (this.isLogin = isLogin), 0);
    });
  }


  ngOnInit() {
    this.BindData();
    this.authenticationService.CheckUserLoggedIn();
    this.pusher.ch_wallet_amount.subscribe((wallet: any) => {
      if (wallet.original != undefined)
        this.BindExchange(wallet.original.data);
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
      this.exchange.BaseCurrency =
        change.baseCurrency !== undefined
          ? change.baseCurrency.currentValue
          : this.baseCurrency;

      this.exchange.MainCurrency =
        change.mainCurrency !== undefined
          ? change.mainCurrency.currentValue
          : this.mainCurrency;

      this.pairName = `${this.mainCurrency}/${this.baseCurrency}`;

      this.GetWalletBalance(change);
    } else {
      const type = change.hasOwnProperty('sellModel') ? 'sellModel' : change.hasOwnProperty('buyModel') ? 'buyModel' : '';

      if (type === 'sellModel') {
        this.ChangeUpdateModel(change.sellModel.currentValue);
      }
      if (type === 'buyModel') {
        this.ChangeUpdateModel(change.buyModel.currentValue);
      }
    }
  }

  ChangeUpdateModel(change: any) {

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
  }

  GetWalletBalance(change): void {
    this.ResetForm();
    const obj = {
      BaseCurrency: this.baseCurrency,
      MainCurrency: this.mainCurrency
    };
    this.exchangeService.GetWalletBalance(obj).subscribe(
      (res: any) => {
        if (res.success == true) {
          this.BindExchange(res.data);
          this.baseValue = res.data.BaseCurrencyValue;
          this.mainValue = res.data.MainCurrencyValue;
          if (change != null) {
            this.ChangeUpdateModel(change);
          }
        } else {
          if (res.output != undefined && res.output != "")
            this.toast.error(res.output);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  BindExchange(data: any) {
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
  }

  ResetForm() {
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
  }

  BindData() {
    this.buyForm = new FormGroup({
      amount: new FormControl("", [Validators.required]),
      minimum: new FormControl(""),
      price: new FormControl("", [Validators.required]),
      range: new FormControl(""),
      total: new FormControl("", [
        Validator.RangeValidationBuy,
        Validator.MinimumValidation
      ])
    });
    this.sellForm = new FormGroup({
      amount: new FormControl("", [Validators.required]),
      minimum: new FormControl(""),
      price: new FormControl("", [Validators.required]),
      range: new FormControl(""),
      total: new FormControl("", [
        Validator.RangeValidationSell,
        Validator.MinimumValidation
      ])
    });
  }

  SetBuytotal(event) {
    if (event === "amount" || event === "price") {
      if (
        this.common.IsNumeric(this.exchange.BuyAmount) &&
        this.common.IsNumeric(this.exchange.BuyPrice)
      ) {
        this.exchange.BuyTotalFees = (
          this.exchange.BuyAmount * this.exchange.BuyPrice
        ).toFixed(8);
        this.exchange.BuyTotal = parseFloat(
          this.exchange.BuyTotalFees +
          parseFloat(this.exchange.BuyTotalFees) *
          (parseFloat(this.exchange.BuyFees) / 100)
        ).toFixed(8);
      } else {
        this.exchange.BuyTotal = "";
        this.exchange.BuyTotalFees = "";
      }
    } else if (event === "total") {
      if (
        this.common.IsNumeric(this.exchange.BuyTotalFees) &&
        this.common.IsNumeric(this.exchange.BuyPrice)
      ) {
        this.exchange.BuyAmount = parseFloat(
          (
            parseFloat(this.exchange.BuyTotalFees) / this.exchange.BuyPrice
          ).toFixed(8)
        );
        this.exchange.BuyTotal = parseFloat(
          this.exchange.BuyTotalFees +
          parseFloat(this.exchange.BuyTotalFees) *
          (parseFloat(this.exchange.BuyFees) / 100)
        ).toFixed(8);
      } else {
        this.exchange.BuyAmount = null;
      }
    }
  }

  Buy(model: Exchange, isValid: boolean) {

    this.isBuySubmitted = true;
    if (isValid) {
      this.isBuyLoading = true;
      const obj = {
        currency_pair_id: this.pairId,
        amount: model.amount,
        price: model.price,
        order_type: "LIMIT",
        side: "BUY"
      };
      this.exchangeService.BuyTrade(obj).subscribe(
        (res: any) => {
          if (res.success == true) {
            this.isBuySubmitted = false;
            this.ResetForm();
            if (res.output != undefined && res.output != "")
              this.toast.success(res.output);
          } else {
            if (res.output != undefined && res.output != "")
              this.toast.error(res.output);
          }
          this.isBuyLoading = false;
        },
        err => {
          this.isBuyLoading = false;
          console.log(err);
        }
      );
    }
  }
  SetSelltotal(event) {
    if (event.toUpperCase() === "AMOUNT" || event.toUpperCase() === "PRICE") {
      if (
        this.common.IsNumeric(this.exchange.SellPrice) &&
        this.common.IsNumeric(this.exchange.SellAmount)
      ) {
        this.exchange.SellTotal = (
          this.exchange.SellAmount * this.exchange.SellPrice
        ).toFixed(8);
      } else {
        this.exchange.SellTotal = null;
      }
    }
    if (event.toUpperCase() === "TOTAL") {
      if (
        this.common.IsNumeric(this.exchange.SellTotal) &&
        this.common.IsNumeric(this.exchange.SellPrice)
      ) {
        this.exchange.SellAmount = parseFloat(
          (
            parseFloat(this.exchange.SellTotal) / this.exchange.SellPrice
          ).toFixed(8)
        );
      } else {
        this.exchange.SellAmount = null;
      }
    }
  }

  Sell(model: Exchange, isValid: boolean) {
    this.isSellSubmitted = true;
    if (isValid) {
      this.isSellLoading = true;
      const obj = {
        currency_pair_id: this.pairId,
        amount: model.amount,
        price: model.price,
        order_type: "LIMIT",
        side: "SELL"
      };
      this.exchangeService.SellTrade(obj).subscribe(
        (res: any) => {
          if (res.success == true) {
            this.isSellSubmitted = false;
            this.ResetForm();
            if (res.output != undefined && res.output != "")
              this.toast.success(res.output);
          } else {
            if (res.output != undefined && res.output != "")
              this.toast.error(res.output);
          }
          this.isSellLoading = false;
        },
        err => {
          this.isSellLoading = false;
          console.log(err);
        }
      );
    }
  }

  ClosePopUp() {
    this.modal.hide();
    this.isOpen = false;
  }

  ShowPopUp() {
    this.modal.show();
    this.isOpen = true;
  }

  GoToUrl(route) {
    // this.router.navigate(["/" + route + ""]);
    window.location.href = "/" + route;
  }

  BuyBaseValueClick() {
    if (
      this.common.IsNumeric(this.exchange.BaseValue) &&
      this.common.IsNumeric(this.exchange.BuyPrice)
    ) {
      this.exchange.BuyTotalFees = this.exchange.BaseValue.toString();
      this.exchange.BuyAmount = Number(
        Number(this.exchange.BuyTotalFees) / this.exchange.BuyPrice
      );
    }
  }

  SellBaseValueClick() {
    if (this.common.IsNumeric(this.exchange.MainValue)) {
      this.exchange.SellAmount = this.exchange.MainValue;
      this.exchange.SellTotal = (
        this.exchange.SellPrice * this.exchange.SellAmount
      ).toFixed(8);
    }
  }

  calcBalance(value, type) {
    for (let i = 0; i < this.arrBalPerc.length; i++) {
      const element = this.arrBalPerc[i];
      if (value === element) {
        if (type === "buy") {
          const newTotalAmt = parseFloat(
            ((this.exchange.BaseValue * value) / 100).toString()
          ).toFixed(8);
          this.exchange.BuyTotalFees = newTotalAmt;
          this.exchange.BuyAmount =
            this.exchange.BuyPrice == null
              ? 0
              : this.common.toFixedCustom(
                parseFloat(newTotalAmt) / this.exchange.BuyPrice,
                8
              );
        } else {
          const newTotalAmt = parseFloat(
            ((this.exchange.MainValue * value) / 100).toString()
          ).toFixed(8);
          this.exchange.SellAmount = parseFloat(newTotalAmt);
          this.exchange.SellTotal = this.common
            .toFixedCustom(parseFloat(newTotalAmt) * this.exchange.SellPrice, 8)
            .toString();
        }
      }
    }
  }
}
