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
  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.facilityList = this.facilityService.getAllFacility();
  }
}
