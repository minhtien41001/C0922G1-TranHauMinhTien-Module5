import { Component, OnInit } from '@angular/core';
import {Class} from "../../model/class";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  classList: Class[] = [];
  studentForm: FormGroup;

  constructor(private studentService: StudentService,
              private router:Router) {
    this.studentForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl("",[Validators.required]),
      phoneNumber: new FormControl("",[Validators.required,Validators.pattern(/^\+84\d{9,10}$/)]),
      address: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required,Validators.email]),
      dateOfBirth: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      class: new FormControl("",[Validators.required])
    })
  }

  ngOnInit(): void {
    this.studentService.getAllClass().subscribe(data =>{
      this.classList = data;
      console.log(data)
    })
  }

  submit(){
    if (this.studentForm.invalid) return;
    const student = this.studentForm.value;
    this.studentService.saveStudent(student).subscribe(data =>{
      alert("them moi thanh cong")
      this.router.navigateByUrl("")
    })
  }
}
