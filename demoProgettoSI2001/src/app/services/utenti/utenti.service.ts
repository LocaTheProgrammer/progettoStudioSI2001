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
}
