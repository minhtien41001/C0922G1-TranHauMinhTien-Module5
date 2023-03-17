import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {Class} from "../model/class";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API_URL = `http://localhost:3000/students`;

  API_URL_CLASSES = `http://localhost:3000/classes`
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  getAllClass(): Observable<Class[]>{
    return this.httpClient.get<Class[]>(this.API_URL_CLASSES);
  }

  deleteStudent(id: number): Observable<Student>{
    return this.httpClient.delete<Student>(this.API_URL+"/"+id)
  }

  saveStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.API_URL, student);
  }

  findById(id: any): Observable<Student> {
    return this.httpClient.get<Student>(this.API_URL + `/` + id);
  }

  updateStudent(id: number, student: Student): Observable<Student> {
    return this.httpClient.patch<Student>(this.API_URL + `/` + id, student);
  }

  searchStudent(name: string, email: string, classes: string): Observable<any>{
    return this.httpClient.get<Student[]>("http://localhost:3000/students?name_like="+ name +"&email_like="+ email +"&class.name_like=" + classes)
  }

}
