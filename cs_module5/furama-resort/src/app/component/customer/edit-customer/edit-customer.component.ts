import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../../model/customer/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../service/customer/customer.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerTypes: CustomerType[] = [];

  formUpdateCustomer: FormGroup;

  public compareWith(object1: CustomerType, object2: CustomerType): boolean  {
    return object1 && object2 ? object1.id===object2.id : object1===object2;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) {
    this.formUpdateCustomer = new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerType: new FormControl()
    });
    this.activatedRoute.paramMap.subscribe(data=>{
      const id = data.get("id");
      if (id != null){
        this.getCustomer(+id);
      }
    })
  }

  ngOnInit(): void {
    this.customerService.getAllCustomerType().subscribe(customerType => {
      this.customerTypes = customerType;
    });
  }

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(data => {
      this.formUpdateCustomer.patchValue(data);
    });
  };

  submit1() {
    const customer = this.formUpdateCustomer.value;
    this.customerService.updateCustomer(customer.id, customer).subscribe(data =>{
      this.router.navigate(['customer/list']);
      alert('Update success');
    });
  }

}
