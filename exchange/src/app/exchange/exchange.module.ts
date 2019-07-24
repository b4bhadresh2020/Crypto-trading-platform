import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { UiModule } from '../ui';
import { ChartComponent } from './chart/chart.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { OrdersComponent } from './orders/orders.component';
import { StoplimitComponent } from './stoplimit/stoplimit.component';
import { OriginalChartComponent } from './original-chart/original-chart.component';
import { MarketExchangeComponent } from './market-exchange/market-exchange.component';
import { HomeTradeHistoryComponent } from './home-trade-history/home-trade-history.component';

const component = [OrdersComponent, ChartComponent, StoplimitComponent,
  ExchangeComponent, OriginalChartComponent, MarketExchangeComponent, HomeTradeHistoryComponent];

@NgModule({
  declarations: [...component],
  exports: [...component],
  imports: [
    SharedModule,
    UiModule
  ],
})

export class ExchangeModule { }
