import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  url:string="http://localhost:3000/cars"

  constructor(private HttpClient: HttpClient) { }

  getCars() : Observable<any>{
    return this.HttpClient.get(this.url)
  }

  getCarById(id:any):Observable<any>{

     return this.HttpClient.get<any>(`${this.url}/${id}`)


  }

  updateCar(editParcoAutoForm:any) : Observable<any>{
    return this.HttpClient.put(this.url, editParcoAutoForm);

  }
}
