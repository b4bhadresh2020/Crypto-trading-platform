export class ExchangeModal {
  public BuyMinimum: number;
  public SellMinimum: number;
  public BuyFees: string;
  public SellFees: string;
  public BaseValue: number;
  public MainValue: number;
  public BuyTotalFees: string;
  public BuyTotal: string;
  public BuyPrice: number;
  public BuyAmount: number;
  public BaseCurrency: string;
  public MainCurrency: string;
  public SellTotalFees: string;
  public SellTotal: string;
  public SellPrice: number;
  public SellAmount: number;
}

export class MarketExchangeModal {
  public BaseValue: number;
  public MainValue: number;
  public BuyAmount: number;
  public BaseCurrency: string;
  public MainCurrency: string;
  public SellAmount: number;
  public SellPrice: number;
}

export class StopLimitModel {
  public pairId: number;
  public BaseCurrency: string;
  public MainCurrency: string;
  public BuyStop: number;
  public BuyLimit: number;
  public BuyAmount: number;
  public BuyTotal: number;

  public SellStop: number;
  public SellLimit: number;
  public SellAmount: number;
  public SellTotal: number;

  public OrderType: number;
  public BaseValue: number;
  public MainValue: number;
}

export class Exchange {
  public price: string;
  public amount: string;
  public currency_pair_id: string;
  public order_type: string;
  public side: string;
}

export class DailyExchange {
  lastPrice: string;
  // TodayOpen: number;
  volume24hours: number;
  dailyChange: number;
  highest24hours: number;
  lowest24hours: number;
}

export class ExchangePriceModel {
  RowNum: number;
  Price: number;
  Amount: number;
  Total: number;
  GrandTotal: number;
}
