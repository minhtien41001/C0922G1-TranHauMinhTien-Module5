import { Component, OnInit } from '@angular/core';
import {Class} from "../../model/class";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  classList: Class[] = [];

  formUpdateStudent: FormGroup;

  public compareWith(object1: Class, object2: Class): boolean {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private studentService: StudentService,
              private router: Router) {
    this.formUpdateStudent = new FormGroup({
      id: new FormControl(),
      name: new FormControl("",[Validators.required]),
      phoneNumber: new FormControl("",[Validators.required,Validators.pattern(/^\+84\d{9,10}$/)]),
      address: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required,Validators.email]),
      dateOfBirth: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      class: new FormControl("",[Validators.required])
    });
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get("id");
      if (id != null) {
        this.getStudent(+id);
      }
    })
  }

  ngOnInit(): void {
    this.studentService.getAllClass().subscribe(classes => {
      this.classList = classes;
    });
  }


  getStudent(id: number) {
    return this.studentService.findById(id).subscribe(data => {
      this.formUpdateStudent.patchValue(data);
    });
  };

  submit() {
    const student = this.formUpdateStudent.value;
    this.studentService.updateStudent(student.id, student).subscribe(data => {
      this.router.navigate(['']);
      alert('Update success');
    });
  }
}
