import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "../environments/environment";
///angular-notifier/styles.
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { CoreModule } from "./core";
import { SharedModule } from "./shared";
import { UiModule } from "./ui";
import { TradeComponent } from './trade/trade.component';
import { ExchangeModule } from "./exchange/exchange.module";
// import { LoginComponent } from "./login/login.component";

@NgModule({
  // declarations: [AppComponent, TradeComponent, LoginComponent],
  declarations: [AppComponent, TradeComponent],
  imports: [
    // Angular
    BrowserAnimationsModule,
    BrowserModule,
    // Core & Shared
    CoreModule,
    SharedModule,

    // Feature
    UiModule,

    // app
    AppRoutingModule,
    ExchangeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
