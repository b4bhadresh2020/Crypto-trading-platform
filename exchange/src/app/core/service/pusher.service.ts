import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import Pusher from 'pusher-js';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { HttpService } from "./http.service";
import { List } from 'immutable';

@Injectable({
    providedIn: 'root',
})
export class PusherService {
    pusher: any;
    private channels: any[];
    
    // Private Channels
    private _ch_user_open_order: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    public ch_user_open_order: Observable<List<string>> = this._ch_user_open_order.asObservable();

    private _ch_user_confirm_order: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    public ch_user_confirm_order: Observable<List<string>> = this._ch_user_confirm_order.asObservable();

    private _ch_wallet_amount: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    public ch_wallet_amount: Observable<List<string>> = this._ch_wallet_amount.asObservable();

    private _ch_order_cancel: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    public ch_order_cancel: Observable<List<string>> = this._ch_order_cancel.asObservable();
    
    
    // Public Channels

    private _ch_buy_order: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    public ch_buy_order: Observable<List<string>> = this._ch_buy_order.asObservable();

    private _ch_sell_order: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    public ch_sell_order: Observable<List<string>> = this._ch_sell_order.asObservable();

    private _ch_pending_order: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    public ch_pending_order: Observable<List<string>> = this._ch_pending_order.asObservable();

    private _ch_chart: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    public ch_chart: Observable<List<string>> = this._ch_chart.asObservable();

    private _ch_currency_pair: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    public ch_currency_pair: Observable<List<string>> = this._ch_currency_pair.asObservable();

    private _ch_trade_history: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    public ch_trade_history: Observable<List<string>> = this._ch_trade_history.asObservable();

    private _ch_daily_exchange: BehaviorSubject<List<string>> = new BehaviorSubject(List([]));
    public ch_daily_exchange: Observable<List<string>> = this._ch_daily_exchange.asObservable();

    currentUser: any;

    constructor(private http: HttpClient, public httpService: HttpService) {
        this.channels = [];
        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        }

        if (this.currentUser != undefined) {
            this.pusher = new Pusher('7b488ce6d8fea3f95cc6', {
                authEndpoint: `${environment.apiUrl}pusher/auth`,
                cluster: 'ap2',
                encrypted: true,
                auth: {
                    headers: {
                        'Authorization': "Bearer " + this.currentUser.api_token,
                        'Accept': "application/json"
                    }
                }
            });

            var channel = this.pusher.subscribe('private-user_open_order'+this.currentUser.id);
            channel.bind('App\\Events\\UserOpenOrder', (data) => {
                console.log(data.data);
                this._ch_user_open_order.next(data.data);
            });

            var channel = this.pusher.subscribe('private-user_confirm_order'+this.currentUser.id);
            channel.bind('App\\Events\\UserConfirmOrder', (data) => {
                console.log(data.data);
                this._ch_user_confirm_order.next(data.data);
            });

            var channel = this.pusher.subscribe('private-wallet_amount'+this.currentUser.id);
            channel.bind('App\\Events\\WalletAmount', (data) => {
                this._ch_wallet_amount.next(data.data);
            });

            var channel = this.pusher.subscribe('private-order_cancel'+this.currentUser.id);
            channel.bind('App\\Events\\OrderCancel', (data) => {
                console.log(data.data);
                this._ch_order_cancel.next(data.data);
            });

        } else {
            this.pusher = new Pusher('7b488ce6d8fea3f95cc6', {
                cluster: 'ap2',
                encrypted: true
            });
        }

        var channel = this.pusher.subscribe('buy_order');
        channel.bind('App\\Events\\BuyOrder', (data) => {
            this._ch_buy_order.next(data.data);
        });

        var channel = this.pusher.subscribe('sell_order');
        channel.bind('App\\Events\\SellOrder', (data) => {
            this._ch_sell_order.next(data.data);
        });

        var channel = this.pusher.subscribe('pending_order');
        channel.bind('App\\Events\\PendingOrder', (data) => {
            this._ch_pending_order.next(data.data);
        });

        var channel = this.pusher.subscribe('chart');
        channel.bind('App\\Events\\Chart', (data) => {
            this._ch_chart.next(data.data);
        });

        var channel = this.pusher.subscribe('currency_pair');
        channel.bind('App\\Events\\CurrencyPair', (data) => {
            this._ch_currency_pair.next(data.data);
        });

        var channel = this.pusher.subscribe('trade_history');
        channel.bind('App\\Events\\TradeHistory', (data) => {
            this._ch_trade_history.next(data.data);
        });

        var channel = this.pusher.subscribe('daily_exchange');
        channel.bind('App\\Events\\DailyExchange', (data) => {
            console.log(data.data);
            this._ch_daily_exchange.next(data.data);
        });
    }
}