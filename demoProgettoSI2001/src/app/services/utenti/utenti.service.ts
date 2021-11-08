import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {



  host:String="http://localhost:3000/utenti"
  url:string="http://localhost:8090/rentalCar/rest/user/"
  constructor(private HttpClient: HttpClient) { }


  loginUtente() :Observable<any> {
    return this.HttpClient.get<any>(`${this.host}`)
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
