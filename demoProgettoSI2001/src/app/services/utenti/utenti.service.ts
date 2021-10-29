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

  loginUtente(username:any,password:any) {let user:any

    this.HttpClient.get<any>(`${this.host}`).subscribe(res => {
      user=res.find((a:any)=>{

        sessionStorage.setItem("utente", JSON.stringify(a.email))
        sessionStorage.setItem("ruolo", JSON.stringify(a.role))
        this.router.navigate(['/home'])
       
        return a.email === username && a.password===password;
      })
    })

   
    
  }
}
