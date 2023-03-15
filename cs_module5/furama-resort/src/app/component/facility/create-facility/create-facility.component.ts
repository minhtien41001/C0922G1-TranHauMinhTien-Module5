import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility/facility.service";
import {Facility} from "../../../model/facility/facility";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {RentTypeService} from "../../../service/facility/rent-type.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
import {FacilityType} from "../../../model/facility/facility-type";
import {RentType} from "../../../model/facility/rent-type";

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {

  facilityForm: FormGroup;
   facilityTypeList: FacilityType[] = [];
   rentTypeList: RentType[] = [];

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private router: Router) {
        this.facilityForm = new FormGroup({
          id: new FormControl(),


        })

  }


  ngOnInit() {
    this.rentTypeService.getAllRentType().subscribe(data =>{
      this.rentTypeList = data;
    })
    this.facilityTypeService.getAllFacilityType().subscribe(data =>{
      this.facilityTypeList = data;
    })
  }

  private addFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.createFacility(facility).subscribe(data =>{
      alert("them moi thanh cong")
      this.router.navigateByUrl("/facility/list")
    })
  }
}
