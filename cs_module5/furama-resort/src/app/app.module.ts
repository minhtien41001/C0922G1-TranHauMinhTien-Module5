import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/header/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { FacilityComponent } from './component/facility/facility.component';
import { CreateFacilityComponent } from './component/facility/create-facility/create-facility.component';
import { ListFacilityComponent } from './component/facility/list-facility/list-facility.component';
import { EditFacilityComponent } from './component/facility/edit-facility/edit-facility.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { EditCustomerComponent } from './component/customer/edit-customer/edit-customer.component';
import { ListContractComponent } from './component/contract/list-contract/list-contract.component';
import { CreateContractComponent } from './component/contract/create-contract/create-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NavigationComponent,
    FacilityComponent,
    CreateFacilityComponent,
    ListFacilityComponent,
    EditFacilityComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    EditCustomerComponent,
    ListContractComponent,
    CreateContractComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
