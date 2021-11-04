import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {



  host:String="http://localhost:3000/utenti"
  constructor(private HttpClient: HttpClient) { }


  loginUtente() :Observable<any> {
    return this.HttpClient.get<any>(`${this.host}`)
  }


  getUtenteById(id:any) : Observable<any>{
    return this.HttpClient.get<any>(`${this.host}/${id}`)
  }

  getUtenti(): Observable<any>{
    return this.HttpClient.get<any>(`${this.host}`)
  }

  updateUtente(editUtenteForm:any, id:any) : Observable<any>{
    return this.HttpClient.put(`${this.host}/${id}`, editUtenteForm);
  }



}
