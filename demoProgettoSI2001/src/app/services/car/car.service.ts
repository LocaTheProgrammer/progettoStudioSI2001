import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url:string="http://localhost:3000/cars"

  constructor(private HttpClient: HttpClient) { }

  getCars() : Observable<any>{
    return this.HttpClient.get(this.url)
  }

  getCarById(id:any):Observable<any>{
     return this.HttpClient.get<any>(`${this.url}/${id}`)
  }

  updateCar(editParcoAutoForm:any, id:any) : Observable<any>{
    return this.HttpClient.put(`${this.url}/${id}`, editParcoAutoForm);
  }

  deleteCar(id:any){
    return this.HttpClient.delete(`${this.url}/${id}`)
  }

  getBusyCars(): Observable<any>{
    return this.HttpClient.get('http://localhost:3000/reservation')
  }

}
