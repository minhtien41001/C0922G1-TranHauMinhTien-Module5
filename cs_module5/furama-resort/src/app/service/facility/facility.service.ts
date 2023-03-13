import { Injectable } from '@angular/core';
import {Facility} from "../../model/facility/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] =[{
    id: 1,
    name: "Villa Beach Front",
    area: 5,
    cost: 500000,
    maxPeople: 4,
    facilityType: {
      id: 1,
      name: "villa"
    },
    rentType: {
      id: 1,
      name: "year"
    },
    standardRoom: "vip",
    description: "Có hồ bơi",
    poolArea: 5,
    numberOfFloors: 5,
    facilityFree: "co xe dap",
  }];

  constructor() { }

  getAllFacility(){
    return this.facilityList;
  }
}
