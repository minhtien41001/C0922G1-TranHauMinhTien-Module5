import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {NavbarComponent} from './component/header/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {NavigationComponent} from './component/navigation/navigation.component';
import {ListFacilityComponent} from './component/facility/list-facility/list-facility.component';
import {ListCustomerComponent} from './component/customer/list-customer/list-customer.component';
import {ListContractComponent} from './component/contract/list-contract/list-contract.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NavigationComponent,
   /* FacilityComponent,*/
    // CreateFacilityComponent,
    ListFacilityComponent,
    // EditFacilityComponent,
    ListCustomerComponent,
   /* EditCustomerComponent,*/
    ListContractComponent,
    CreateCustomerComponent,
    /*CreateContractComponent,*/
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
