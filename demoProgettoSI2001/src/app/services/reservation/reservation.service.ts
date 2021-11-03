import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  host:string="http://localhost:3000/reservation"


  constructor(private HttpClient: HttpClient) { }

  insertReservation(lastId:any, userId:any, carId:any, reservationDate:any){
    console.log(userId, carId, reservationDate)

  return this.HttpClient.post<any>(`${this.host}`, {lastId, userId, carId, reservationDate})
  }

  getReservations():Observable<any>{
    return this.HttpClient.get<any>(`${this.host}`)
  }

}
