import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TradeService, ExchangeService, PusherService } from '../../core/service';
import { DailyExchange } from '../../shared/model';

declare var anychart: any;
declare var $: any;

@Component({
  selector: 'app-original-chart',
  templateUrl: './original-chart.component.html'
})
export class OriginalChartComponent implements OnChanges, OnInit {
  @Input() pairId: string;
  @Input() baseCurrency: string;
  @Input() mainCurrency: string;

  loading = false;
  dailyExchange = new DailyExchange();
  isDailyExchangeLoader = false;
  pairName: string;
  usdPrice: string;
  minite: number;
  activeCls = false;
  miniteheader = 'm';
  hourheader = 'h';
  isOriginal = false;

  constructor(
    public tradeService: TradeService,
    public exchangeService: ExchangeService,
    public pusher: PusherService,
  ) {
  }

  ngOnInit() {
    this.pusher.ch_chart.subscribe((chart: any) => {
      if (chart.original != undefined) {
        this.chartData(180);
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
    this.pairName = `${this.mainCurrency}/${this.baseCurrency}`;
    this.chartData(180);
  }

  chartData(minite: any) {
    this.loading = true;
    const that = this;
    anychart.data.loadJsonFile(
      `${environment.apiUrl}chartData/${this.pairId}/${minite}`,
      function (res) {
        $('#chartdiv').html('');
        const result = [];
        for (let i = 0; i < res.data.length; i++) {
          const tarray = [];
          tarray.push(
            res.data[i].time_interval,
            res.data[i].o,
            res.data[i].h,
            res.data[i].l,
            res.data[i].c,
            res.data[i].vol
          );
          result.push(tarray);
        }

        anychart.theme(anychart.themes.darkBlue);
        const dataTable = anychart.data.table();
        dataTable.addData(result);

        const mapping = dataTable.mapAs({ 'open': 1, 'high': 2, 'low': 3, 'close': 4, 'value': 5 });

        const chart = anychart.stock();
        chart.tooltip(true);
        chart.scroller().enabled(true);

        const candlesPlot = chart.plot(0);
        candlesPlot.yGrid(true).xGrid(true);
        candlesPlot.yAxis(0).labels().position('outside');
        candlesPlot.yAxis(0).ticks().enabled(false);
        candlesPlot.yAxis(0).orientation('left');

        const candlesLegend = candlesPlot.legend();
        candlesLegend.title(false);
        candlesLegend.fontSize(12);

        const sma10 = candlesPlot.sma(mapping, 10).series();
        sma10.stroke('red');

        // create SMA indicators with period 30
        const sma30 = candlesPlot.sma(mapping, 30).series();
        sma30.stroke('green');

        const candleSeries = candlesPlot.candlestick(mapping);
        candleSeries.name('Price');
        candleSeries.legendItem().iconType('rising-falling');
        candleSeries.risingFill('#1fb982');
        candleSeries.risingStroke('#1fb982');
        candleSeries.fallingFill('#de3249');
        candleSeries.fallingStroke('#de3249');

        // Volume
        const volumeMapping = dataTable.mapAs({
          'value': 4,
          'type': 'average'
        });
        const volumePlot = chart.plot(1);
        volumePlot.height('22%');
        const volSeries = volumePlot.column(volumeMapping).name('Last Price');
        volSeries.risingStroke('#1fb982');
        volSeries.risingFill('#1fb982');
        volSeries.fallingStroke('#de3249');
        volSeries.fallingFill('#de3249');
        volumePlot.xAxis().enabled(false);
        volumePlot.yAxis().enabled(false);
        volumePlot.crosshair().yLabel().format('{%Value}{scale: (1000000)|(mln), decimalsCount: 0}');
        const volumeLegend = volumePlot.legend();
        volumeLegend.title(false);
        volumeLegend.fontSize(10);

        // create MACD indicator with fast period 12, slow period 26 and signal period 9
        const macd = volumePlot.macd(mapping, 12, 26, 9);
        macd.macdSeries().stroke('#bf360c');
        macd.signalSeries().stroke('#ff6d00');
        macd.histogramSeries().fill('#ffe082');

        // set chart selected date/time range
        chart.container('chartdiv');
        chart.draw();

        that.loading = false;
      }
    );
  }


  FilterChart(minite: number, header: string, type: string) {
    if (type === 'm') {
      this.miniteheader = header;
    }
    if (type === 'h') {
      this.hourheader = header;
    }
    localStorage.setItem('chartInterval', minite.toString());
    this.chartData(minite);
  }
}
