import { Injectable } from '@angular/core';
import {Contract} from "../../model/contract/contract";
import {Facility} from "../../model/facility/facility";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contractList: Contract[] =[{
    id: 1,
    startDate: "Villa Beach Front",
    endDate: "h",
    deposit: "h",
    customer: {
      id: 1,
      name: "villa"
    },
    facility: {
      id: 1,
      name: "year"
    }}];
  constructor() {
     this.getAll()
  }
   getAll() {
    return this.contractList;
  }
}
