import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotfoundComponent } from "./ui/notfound/notfound.component";
import { TradeComponent } from "./trade/trade.component";
// import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  // { path: "", redirectTo: "/trade/:pair", pathMatch: "full" },
  { path: 'trade/:pair', component: TradeComponent },
  { path: 'trade', component: TradeComponent },
  // { path: "login", component: LoginComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
