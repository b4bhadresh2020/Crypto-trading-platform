import { Location, LocationStrategy } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  AuthenticationService,
  ExchangeService,
  ToastService,
  TradeService,
  PusherService
} from "../core/service";
import { ApiResponseStatus, Common } from "../shared/common";
import { Response } from "../shared/model";
import { debug } from "util";
declare var $: any;

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
})
export class TradeComponent implements OnInit {
  public baseCurrencyData = [];
  public pair: string;
  public baseCurrency: string;
  public mainCurrency: string;
  public pairId: number;
  public orderType: number;
  public price: number;
  public amount: number;
  public total: number;
  public buyModel: any;
  public sellModel: any;
  public fullName: string;
  public email: string;
  public avtarImg: string;
  loading: boolean;
  selectedItem: string;
  dataList: any;
  currencyPairList: any;
  selectedRow: any;
  route: string;
  result: any;
  isExchange = true;
  buyFirstRowPrice: any;
  sellFirstRowPrice: any;
  isLogin: false;

  constructor(
    private url: LocationStrategy,
    public authenticationService: AuthenticationService,
    public exchangeService: ExchangeService,
    public toast: ToastService,
    public router: Router,
    public common: Common,
    public tradeService: TradeService,
    public pusher: PusherService,
    private activeRoute: ActivatedRoute,
    private location: Location

  ) {

    this.router.events.subscribe((path: any) => {
      this.route = path.url;
    });
    this.authenticationService.isLoginChanged.subscribe(isLogins => {
      setTimeout(() => {
        this.isLogin = isLogins;
      }, 10);
    });
    // const routeParams = this.activeRoute.snapshot.params;


  }


  ngOnInit() {
    this.pusher.ch_currency_pair.subscribe((currencyPair: any) => {
      if (currencyPair.original != undefined) {
        this.dataList = currencyPair.original.data;
        this.currencyPairList = this.dataList.filter(x => x.base_currency_id === this.selectedItem);
      }
    });

    this.router.events.subscribe((event: any) => {
      if (
        event != null &&
        (event.url != null || event.url !== undefined) &&
        event.url.split("/").length >= 2 &&
        event.url.split("/")[2]
      ) {
        const data = event.url.split("/")[2];
      }
    });

    if (
      localStorage.getItem("MarketList") &&
      localStorage.getItem("BaseMarketId")
    ) {
      if (localStorage.getItem("selectedMarket")) {
        this.result = JSON.parse(localStorage.getItem("selectedMarket"));
      } else {
        const marketList = JSON.parse(localStorage.getItem("MarketList"));
        this.dataList = marketList;
        this.result = this.dataList.first();
      }
      this.selectedItem = localStorage.getItem("BaseMarketId");
      const baseName = this.result.name.split("/");
      this.baseCurrency = baseName[1];
      this.mainCurrency = baseName[0];
      this.pairId = this.result.id;
      this.selectedRow = this.result.name;
      this.location.replaceState("/trade#" + this.mainCurrency + "_" + this.baseCurrency);
    } else {
      this.baseCurrency = "BTC";
      this.mainCurrency = "ETH";
      this.pairId = 1;
      this.selectedItem = "1";
      this.selectedRow = "ETH/BTC";
      this.location.replaceState("/trade#" + this.mainCurrency + "_" + this.baseCurrency);
    }

    this.activeRoute.params.subscribe(routeParams => {
      if (routeParams.pair != undefined) {
        this.GetPairDetail(routeParams.pair);
      } else {
        this.GetPairDetail(this.mainCurrency + "_" + this.baseCurrency);
      }
    });

    if (localStorage.getItem("currentUser")) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      this.email = currentUser.email;
    }
  }

  GetMarketListTab(paramValue) {
    this.currencyPairList = this.dataList.filter(x => x.base_currency_id === paramValue);
    localStorage.setItem("MarketList", JSON.stringify(this.currencyPairList));
    localStorage.setItem("BaseMarketId", paramValue);
  }

  GetPairDetail(pairName) {
    this.loading = true;
    this.exchangeService.GetMarketListByName(pairName).subscribe((res: any) => {
      if (res.success) {
        this.dataList = res.data;
        for (const pairList in res.data) {
          if (res.data.hasOwnProperty(pairList)) {
            const element = res.data[pairList];
            this.selectedItem = element.base_currency_id;
            this.GetMarketListTab(this.selectedItem);
            localStorage.setItem("BaseMarketId", element.base_currency_id);
            const pair = element.name.replace('/', '_');
            if (pairName == pair) {
              this.GetRowDetail(element);
              break;
            }
          }
        }
        this.loading = false;
      }
    });
  }

  GetRowDetail(item) {
    this.selectedRow = item.name;
    this.pairId = item.id;
    const data = item.name.split("/");
    this.baseCurrency = data[1];
    this.mainCurrency = data[0];
    // this.pair = this.mainCurrency + "_" + this.baseCurrency;
    localStorage.setItem("selectedMarket", JSON.stringify(item));
    this.location.replaceState("/trade#" + this.mainCurrency + "_" + this.baseCurrency);
    // this.router.navigate(["/trade"]);
  }

  receiveAvtar($event) {
    this.avtarImg = $event;
  }

  fullNameEve($event) {
    this.fullName = $event === "null null" ? "" : $event;
  }

  Logout() {
    this.exchangeService.userLogout().subscribe((res: any) => {
      if (res.data != undefined) {
        this.authenticationService.Logout();
        window.location.href = "/login";
      }
    });
    // this.router.navigate(["/login"]);
  }

  changeBaseCurrency($event) {
    this.baseCurrency = $event;
  }

  changeMainCurrency($event) {
    this.mainCurrency = $event;
  }

  changePair($event) {
    this.pairId = $event;
  }

  changeOrderType($event) {
    this.orderType = $event;
  }

  changePrice($event) {
    this.price = $event;
  }

  changeAmount($event) {
    this.amount = $event;
  }

  changeTotal($event) {
    this.total = $event;
  }

  changeBuyModel($event) {
    this.buyModel = $event;
  }

  changeSellModel($event) {
    this.sellModel = $event;
  }
}

