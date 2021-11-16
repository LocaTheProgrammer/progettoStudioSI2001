import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  host:string="http://localhost:3000/reservation"
  url:string="http://localhost:8090/rentalCar/rest/reservation/"

  constructor(private HttpClient: HttpClient) { }

  insertReservation(id:Number, userId:Number, carId:Number, fromDate:any, toDate:any){
    return this.HttpClient.post<any>(`${this.url+'create'}`, {id, userId, carId, fromDate, toDate})
  }

  getReservations():Observable<any>{
    return this.HttpClient.get<any>(`${this.url+'findAllReservations'}`)
  }

  getReservationsAdmin():Observable<any>{
    return this.HttpClient.get<any>(`${this.url+'findAllReservationAdmin'}`)
  }


  getReservationsByUserID(id:any):Observable<any>{
    return this.HttpClient.get(`${this.url+'getReservationTableByUserId'}/${id}`)
  }

  deleteReservationById(id:any){
    return this.HttpClient.delete(`${this.url+'deleteReservationById'}/${id}`)
  }

  getReservationById(id:any){
    return this.HttpClient.get(`${this.url+'getReservationDetailsByReservationId'}/${id}`)
  }

  approveReservation(id:any){
    return this.HttpClient.get(`${this.url+'approveReservation'}/${id}`)
  }



}
