import { Injectable } from '@angular/core';
import {Facility} from "../../model/facility/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {


  constructor(private httpClient: HttpClient) { }
  getAllFacility(){
    return this.httpClient.get<Facility[]>("http://localhost:3000/facility")
  }
  createFacility(facility: Facility): Observable<Facility>{
    return this.httpClient.post<Facility>("http://localhost:3000/facility",facility)
  }
  findByID(id: any){
    return this.httpClient.get<Facility>("http://localhost:3000/facility" + id)
  }
  updateCustomer(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.patch<Facility>("http://localhost:3000/facility/"+ id,facility);
  }
  delete(id: number) {
    return this.httpClient.delete<Facility>("http://localhost:3000/facility/"+ id)
  }
}
