import { Injectable } from '@angular/core';
import {CustomerType} from "../../model/customer/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  customerTypeList: CustomerType[] = [{
    id: 1,
    name: "Diamond"
  }]
  constructor() { }

  getAll(){
    return this.customerTypeList;
  }
}
