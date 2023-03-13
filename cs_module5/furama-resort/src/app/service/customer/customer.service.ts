import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] =[{
    id: 1,
    name: "Cafe",
    dateOfBirth: "17-11-1999",
    gender: 1,
    idCard: "2232323",
    phoneNumber: "0799061071",
    email: "gamquangvinh@gmail.com",
    address: "Quang Binh",
    customerType: {
      id: 1,
      name: "Diamond"
    }
  }];
  constructor() { }
   getAllCustomer(){
    return this.customerList
   }

}
