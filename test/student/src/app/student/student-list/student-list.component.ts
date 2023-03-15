import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {Class} from "../../model/class";
import {StudentService} from "../../service/student.service";

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
  constructor(private studentService: StudentService) {
    this.studentService.getAllClass().subscribe(classes =>{
      this.classList = classes;
    });
  }

  ngOnInit(): void {
  }

}
