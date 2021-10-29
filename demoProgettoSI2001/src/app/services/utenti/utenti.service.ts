import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  


  host:String="http://localhost:3000/utenti"
  constructor(private HttpClient: HttpClient, private router: Router) { }

  getUtenti() : any[]{
    let listaUtenti!:any []

   this.HttpClient.get(`${this.host}`).subscribe((result:any)=>{
     if(result!=null){
        listaUtenti=result
     }
   });
    return listaUtenti;
  }

  loginUtente(username:any,password:any) {
    
    this.HttpClient.post<any>(`${this.host}`,{username,password}).subscribe(res => {
     if(res.email === username  && res.password===password)

        sessionStorage.setItem("utente", JSON.stringify(res.email))


        this.router.navigate(['/home'])
       
       
      })

    
  }
}
