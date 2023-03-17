import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {Class} from "../../model/class";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentList: Student[] = [];
  classList: Class[] = [];
  temp: Student = {
    id: 0
  };
  p:   number = 0;
  constructor(private studentService: StudentService,
              private router: Router) {
    this.getAll();
    this.getAllClass();
  }

  getAllClass(){
    this.getAll();
    this.studentService.getAllClass().subscribe(classes =>{
      this.classList = classes;
    });
  }

  ngOnInit(): void {
  }

  getAll(){
    this.studentService.getAll().subscribe(student => {
      this.studentList = student;
    })
  }

  deleteStudent(){
    if (this.temp.id != null) {
      this.studentService.deleteStudent(this.temp.id).subscribe(data => {
        this.getAll()
        alert("Delete success")
      }, error => {

      },()=>{

      })
    }
  }

  searchStudent(name: string, email: string, classes: string) {
    this.studentService.searchStudent(name, email, classes).subscribe(data =>{
      this.studentList = data;
    })
  }
}
