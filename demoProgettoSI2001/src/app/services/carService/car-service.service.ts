import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  logCarService:string="[Car Service]"
  constructor(private HttpClient: HttpClient) { }

  getCars() : Observable<any>{
    console.log("getting cars from http://localhost:3000/cars");
    return this.HttpClient.get('http://localhost:3000/cars')
  }
}
