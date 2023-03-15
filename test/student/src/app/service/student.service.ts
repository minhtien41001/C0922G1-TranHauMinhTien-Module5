import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {Class} from "../model/class";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API_URL = `http://localhost:3000/student`;

  API_URL_CLASSES = `http://localhost:3000/class`
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.API_URL);
  }

  getAllClass(): Observable<Class[]>{
    return this.httpClient.get<Class[]>(this.API_URL_CLASSES);
  }
}
