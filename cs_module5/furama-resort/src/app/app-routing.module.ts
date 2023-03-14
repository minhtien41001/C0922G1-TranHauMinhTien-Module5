import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {HomeComponent} from "./component/home/home.component";
import {ListFacilityComponent} from "./component/facility/list-facility/list-facility.component";
import {ListContractComponent} from "./component/contract/list-contract/list-contract.component";
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";



const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "customer/list", component: ListCustomerComponent},
  {path: "facility/list", component: ListFacilityComponent},
  {path: "contract/list", component: ListContractComponent},
  {path: "customer/create", component: CreateCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
