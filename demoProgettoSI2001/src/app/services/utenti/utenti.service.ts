import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  host:String="http://localhost:3000/utenti"
  constructor(private HttpClient: HttpClient) { }

  getUtenti() : any[]{
    let listaUtenti!:any []

   this.HttpClient.get(`${this.host}`).subscribe((result:any)=>{
     if(result!=null){
        listaUtenti=result
     }
   });
    return listaUtenti;
  }
}
