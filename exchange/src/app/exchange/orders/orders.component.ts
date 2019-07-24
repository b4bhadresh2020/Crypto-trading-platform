import {
  Component,
  Input,
  OnChanges,
  OnInit,
  EventEmitter,
  Output
} from "@angular/core";
import {
  ExchangeService,
  TradeService,
  UserService,
  ToastService,
  PusherService
} from "../../core/service";
import { Response } from "../../shared/model";
import { ApiResponseStatus, OrderType } from "../../shared/common";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar/dist/lib/perfect-scrollbar.interfaces";
import Swal from 'sweetalert2';

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html"
})
export class OrdersComponent implements OnInit, OnChanges {
  userConfirmOrder: any;
  sellOrderList: any;
  buyOrderList: any;
  userPendingOrder: any;
  buyData = [];
  sellData = [];
  totalBuy: string;
  totalSell: string;
  buyCount = 0;
  openloading = false;
  myorderloading = false;
  buyloading = false;
  sellloading = false;
  config: PerfectScrollbarConfigInterface = {};

  @Input() baseCurrency: string;
  @Input() mainCurrency: string;
  @Input() pairId: number;
  @Output() orederTypeChange = new EventEmitter<number>();
  @Output() priceChange = new EventEmitter<string>();
  @Output() amountChange = new EventEmitter<string>();
  @Output() totalChange = new EventEmitter<string>();
  @Output() buyModelChange = new EventEmitter<string>();
  @Output() sellModelChange = new EventEmitter<string>();

  constructor(
    public exchangeService: ExchangeService,
    public tradeService: TradeService,
    private userService: UserService,
    private toast: ToastService,
    public pusher: PusherService,

  ) { }


  ngOnInit() {

    this.pusher.ch_pending_order.subscribe((order: any) => {
      /* if (order.original == undefined){
        return false;
      } */
      // if (order.order_status == "Pending") {
        if (order.side == "BUY") {
          if (this.buyOrderList == null) this.buyOrderList = [];
          this.buyOrderList.push(order);
          this.buyOrderList.sort((a, b) => (b.price > a.price) ? 1 : -1);
          this.buyOrderList = this.groupByPrice(this.buyOrderList);
        } else if (order.side == "SELL") {
          if (this.sellOrderList == null) this.sellOrderList = [];
          this.sellOrderList.push(order);
          this.sellOrderList.sort((a, b) => (a.price > b.price) ? 1 : -1);
          this.sellOrderList = this.groupByPrice(this.sellOrderList);
        }
      // }
    });

    this.pusher.ch_user_open_order.subscribe((order: any) => {
      if (order.order_status == "Pending") {
        if (this.userPendingOrder == null) this.userPendingOrder = [];
        this.userPendingOrder.push(order);
        this.userPendingOrder.sort((a, b) => (b.updated_at > a.updated_at) ? 1 : -1);
      }else if(order.original != undefined){
        // if (order.order_status == "Confirmed") {
          this.userPendingOrder = order.original.data;
        // }
      }
    });

    this.pusher.ch_user_confirm_order.subscribe((order: any) => {
      if (order.original != undefined){
        this.userConfirmOrder = order.original.data;
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

    this.pusher.ch_buy_order.subscribe((order: any) => {
      if (order.original != undefined){
        this.buyOrderList = order.original.data;
      }
    });

    this.pusher.ch_sell_order.subscribe((order: any) => {
      if (order.original != undefined){
        this.sellOrderList = order.original.data;
      }
    });
  }

  ngOnChanges(change: any) {
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
  }

  GetUserPendingOrders(orderstatus: string, id: number) {
    const obj = { order_status: orderstatus, currency_pair_id: id };
    this.openloading = true;
    this.exchangeService.GetUserTrade(obj).subscribe(
      (res: any) => {
        if (res.success == true) {
          this.userPendingOrder = res.data;
        } else {
          if (res.output != undefined && res.output != "")
            this.toast.error(res.output);
        }
        this.openloading = false;
      },
      err => {
        this.openloading = false;
        console.log(err);
      }
    );
  }

  GetUserConfirmOrders(orderstatus: string, id: number) {
    const obj = { order_status: orderstatus, currency_pair_id: id };
    this.myorderloading = true;
    this.exchangeService.GetUserTrade(obj).subscribe(
      (res: any) => {
        if (res.success == true) {
          this.userConfirmOrder = res.data;
        } else {
          if (res.output != undefined && res.output != "")
            this.toast.error(res.output);
        }
        this.myorderloading = false;
      },
      err => {
        this.myorderloading = false;
        console.log(err);
      }
    );
  }

  GetSellOrder(id: any) {
    this.sellloading = true;
    this.exchangeService.GetSellOrder(id).subscribe(
      (res: any) => {
        if (res.success == true) {
          if (res.data !== null && res.data.length > 0) {
            this.sellModelChange.emit(res.data[0]);
          }
          this.sellOrderList = res.data;
        } else {
          if (res.output != undefined && res.output != "")
            this.toast.error(res.output);
        }
        this.sellloading = false;
      },
      err => {
        this.sellloading = false;
        console.log(err);
      }
    );
  }

  GetBuyOrder(id: any) {
    this.buyloading = true;
    this.exchangeService.GetBuyOrder(id).subscribe(
      (res: any) => {
        if (res.success == true) {
          if (res.data !== null && res.data.length > 0) {
            this.buyModelChange.emit(res.data[0]);
          }
          this.buyOrderList = res.data;
        } else {
          if (res.output != undefined && res.output != "")
            this.toast.error(res.output);
        }
        this.buyloading = false;
      },
      err => {
        this.buyloading = false;
        console.log(err);
      }
    );
  }

  CancelOrder(id: number) {
    Swal({
      cancelButtonText: 'No, keep it',
      confirmButtonText: 'Yes, cancel it!',
      showCancelButton: true,
      text: 'Are you sure you want to cancel this order?',
      title: 'Are you sure?',
      type: 'warning',
    }).then(result => {
      if (result.value) {
        this.openloading = true;
        this.exchangeService.CancelOrder(id).subscribe(
          (res: any) => {
            if (res.success == true) {
              //this.GetUserPendingOrders("Pending", this.pairId);
              if (res.output != undefined && res.output != "")
                this.toast.success(res.output);
            } else {
              if (res.output != undefined && res.output != "")
                this.toast.error(res.output);
            }
            this.openloading = false;
          },
          err => {
            this.openloading = false;
            console.log(err);
          }
        );
      } else {
        this.toast.success('Your data is safe :)');
      }
      this.openloading = false;
    });
  }

  groupByPrice(data: any) {
    var result = [];
    data.reduce(function (res, value) {
      if (!res[value.price]) {
        let temp = JSON.parse(JSON.stringify(value));
        temp.price = value.price;
        temp.amount = 0;
        res[value.price] = temp;
        result.push(res[value.price])
      }
      res[value.price].amount = parseFloat(res[value.price].amount) + parseFloat(value.amount);
      return res;
    }, {});
    return result;
  }

  getRowBuyOrder(item: any) {
    this.buyModelChange.emit(item);
  }
  getRowSellOrder(item: any) {
    this.sellModelChange.emit(item);
  }
}
