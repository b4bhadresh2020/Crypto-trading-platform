import {
  Component,
  Input,
  OnChanges,
  OnInit,
  EventEmitter,
  Output
} from "@angular/core";
import { environment } from "../../../environments/environment";
import { TradeService, ExchangeService, PusherService } from "../../core/service";
import { DailyExchange } from "../../shared/model";
import { ApiResponseStatus } from "../../shared/common";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html"
})
export class ChartComponent implements OnChanges, OnInit {
  @Input() pairId: number;
  @Input() baseCurrency: string;
  @Input() mainCurrency: string;
  loading = false;
  dailyExchange = new DailyExchange();
  isDailyExchangeLoader = false;
  pairName: string;
  usdPrice: string;
  isOriginal = false;
  constructor(
    public tradeService: TradeService,
    public exchangeService: ExchangeService,
    public pusher: PusherService,

  ) {
  }

  ngOnInit() {
    this.pusher.ch_daily_exchange.subscribe((exchange: any) => {
      if (exchange.original != undefined)
        this.dailyExchange = exchange.original.data;
    });
  }

  ngOnChanges(change: any) {
    this.pairName = `${this.mainCurrency}/${this.baseCurrency}`;
    this.pairId = change.pairId !== undefined ? change.pairId.currentValue : this.pairId;
    this.GetDailyExchange();
  }


  GetDailyExchange() {
    this.isDailyExchangeLoader = true;
    this.exchangeService.GetDailyExchange(this.pairId).subscribe(
      (res: any) => {
        if (res.success == true) {
          if (Object.keys(res.data).length > 0) {
            this.dailyExchange = res.data;
          } else {
            this.dailyExchange = new DailyExchange();
          }
        }
        this.isDailyExchangeLoader = false;
      },
      err => {
        this.isDailyExchangeLoader = false;
        console.log(err);
      }
    );
  }

  showHideChart(type) {
    if (type === 2) {
      this.isOriginal = true;
    } else {
      this.isOriginal = false;
    }
  }
}
