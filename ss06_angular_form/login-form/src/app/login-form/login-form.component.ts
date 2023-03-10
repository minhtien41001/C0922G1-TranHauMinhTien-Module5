import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  formLogin: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      passWord : new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

}
