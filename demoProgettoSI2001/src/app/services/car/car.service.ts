import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url:string="http://localhost:8090/rentalCar/rest/car/"

  constructor(private HttpClient: HttpClient) { }

  getCars() : Observable<any>{
    return this.HttpClient.get(this.url+'findAll')
  }

  getCarById(id:any):Observable<any>{
     return this.HttpClient.get<any>(`${this.url+'findCarById'}/${id}`)
  }

  updateCar(editParcoAutoForm:any, id:any) : Observable<any>{
    return this.HttpClient.put(`${this.url+'updateCar'}/${id}`, editParcoAutoForm);
  }

  deleteCar(id:any){
    return this.HttpClient.delete(`${this.url+'deleteCarById'}/${id}`)
  }

  addCar(editCarForm:any):Observable<any>{
    return this.HttpClient.post(`${this.url+'create'}`, editCarForm);
  }

  getBusyCars(): Observable<any>{
    return this.HttpClient.get('http://localhost:3000/reservation')
  }

}
