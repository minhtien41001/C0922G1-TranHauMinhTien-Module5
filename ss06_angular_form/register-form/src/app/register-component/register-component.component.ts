import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {ListRegister} from "../model/list-register";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  rfRegister: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.rfRegister = new FormGroup({
      email: new FormControl("",[Validators.required,Validators.email]),
      password: new FormControl("",[Validators.required,Validators.minLength(6)]),
      confirmPassword: new FormControl("",[Validators.required,Validators.minLength(6),this.checkPass]),
      country: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required,Validators.min(18)]),
      gender: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required,Validators.pattern(/^\+84\d{9,10}$/)])
    })
  }

  checkPass(control: AbstractControl){
    let check = control.value;
    if (check.password != check.confirmPassword ) {
      return {NoMatch: true}
    }
    return null;
  }
}
