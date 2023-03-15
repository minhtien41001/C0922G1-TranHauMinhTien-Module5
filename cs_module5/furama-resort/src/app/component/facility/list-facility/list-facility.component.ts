import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facility/facility";
import {FacilityService} from "../../../service/facility/facility.service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilityList: Facility[] = [];
  temp: Facility = {};
  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
   this.facilityService.getAllFacility().subscribe(data =>{
     this.facilityList = data
   })
  }

  delete() {
    this.facilityService.delete(this.temp.id).subscribe(data =>{
      console.log(data)
      alert("xoa thanh cong");
    })
  }
}
