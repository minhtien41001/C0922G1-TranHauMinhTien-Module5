import { Injectable } from '@angular/core';
import {Contract} from "../../model/contract/contract";
import {Facility} from "../../model/facility/facility";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contractList: Contract[] =[{
    id: 1,
    startDate: "04-10-2001",
    endDate: "10-10-2001",
    deposit: "abcxyz",
    customer: {
      id: 1,
      name: "Tran Minh Tien"
    },
    facility: {
      id: 1,
      name: "Villa Beach Front"
    }}];
  constructor() {
     this.getAll()
  }
   getAll() {
    return this.contractList;
  }
}
