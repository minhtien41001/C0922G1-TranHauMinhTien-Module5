import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../../model/customer/customer-type";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypeList: CustomerType [] = [];
  customerForm: FormGroup;

  constructor( private customerTypeService: CustomerTypeService,
               private customerService: CustomerService,
               private router: Router) {
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerType: new FormControl()
    });
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(data =>{data
      this.customerTypeList = data;
    })
  }


  submit(){
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer).subscribe(data =>{
      alert("them moi thanh cong")
      this.router.navigateByUrl("/customer/list")
    })
  }

}

