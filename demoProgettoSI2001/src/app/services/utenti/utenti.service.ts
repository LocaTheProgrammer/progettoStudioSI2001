import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {



  host:String="http://localhost:3000/utenti"
  auth:string="http://localhost:8090/rentalCar/authenticate"
  url:string="http://localhost:8090/rentalCar/rest/user/"
  constructor(private HttpClient: HttpClient) { }


  getBearerToken(username:any, password:any) :Observable<any> {
    return this.HttpClient.post<any>(`${this.auth}`, {username, password})
  }

  loginUtente(username:any, password:any) :Observable<any> {
    return this.HttpClient.post<any>(`${this.url+'logIn'}`, {username, password})
  }



  getUtenteById(id:any) : Observable<any>{
    return this.HttpClient.get<any>(`${this.url+'findById'}/${id}`)
  }

  getUtenti(): Observable<any>{
    return this.HttpClient.get<any>(`${this.url+'findAll'}`)
  }

  updateUtente(editUtenteForm:any, id:any) : Observable<any>{
    return this.HttpClient.put(`${this.url+'update'}/${id}`, editUtenteForm);
  }

  addUser(addUserForm:any):Observable<any>{
    return this.HttpClient.post(`${this.url+'create'}`, addUserForm);
  }

  deleteUtenteById(id:any){
    return this.HttpClient.delete(`${this.url+'delete'}/${id}`)
  }



}
