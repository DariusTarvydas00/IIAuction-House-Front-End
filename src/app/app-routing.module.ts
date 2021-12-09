import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./home/home-page.component";
import {AuctionPageComponent} from "./auction-page/auction-page.component";
import {LogInComponent} from "./log-in/log-in.component";
import {FaqComponent} from "./faq/faq.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  { path: 'home', component:HomePageComponent},
  { path: 'auction', component:AuctionPageComponent},
  { path: 'logIn', component:LogInComponent},
  { path: 'faq', component:FaqComponent},
  { path: 'contactUs', component:ContactUsComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, AuctionPageComponent]
