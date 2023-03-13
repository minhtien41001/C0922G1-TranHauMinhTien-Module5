import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] =[{
    id: 1,
    name: "Cafe",
    dateOfBirth: "04-10-2001",
    gender: 1,
    idCard: "123123",
    phoneNumber: "0837790795",
    email: "tranminhtien41001@gmail.com",
    address: "Ha Tinh",
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
