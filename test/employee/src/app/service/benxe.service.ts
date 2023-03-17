import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BenXe} from "../model/ben-xe";
import {LoaiXe} from "../model/loai-xe";

@Injectable({
  providedIn: 'root'
})
export class BenxeService {

  API_URL = `http://localhost:8080/ben-xe/list-xe`;

  API_URL_LOAIXE = `http://localhost:3000/diemdi`;


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<BenXe[]> {
    return this.httpClient.get<BenXe[]>(this.API_URL);
  }

  getAllLoaiXe(): Observable<LoaiXe[]> {
    return this.httpClient.get<LoaiXe[]>(this.API_URL_LOAIXE);
  }

  deleteBenxe(id: number): Observable<BenXe> {
    return this.httpClient.delete<BenXe>(this.API_URL + "/" + id)
  }

  saveStudent(benxe: BenXe): Observable<BenXe> {
    return this.httpClient.post<BenXe>(this.API_URL, benxe);
  }

  findById(id: any): Observable<BenXe> {
    return this.httpClient.get<BenXe>(this.API_URL + `/` + id);
  }

  updateStudent(id: number, benxe: BenXe): Observable<BenXe> {
    return this.httpClient.patch<BenXe>(this.API_URL + `/` + id, benxe);
  }
}





