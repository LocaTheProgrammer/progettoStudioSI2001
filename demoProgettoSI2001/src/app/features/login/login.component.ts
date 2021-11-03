import {Component, OnChanges, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtentiService } from 'src/app/services/utenti/utenti.service';
import {ReservationService} from "../../services/reservation/reservation.service";
import {MyTableConfig} from "../../components/table/table.component";
import {tableConfigAdmin, tableConfigUserPrenotazioni} from "../../components/data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  loginUtenteForm!: FormGroup
  role?=sessionStorage.getItem("ruolo")
  toggled = true
  passwordType = 'password'
  tableConfig!:MyTableConfig;
  utente:any

  constructor(private fb: FormBuilder, private  reservationService:ReservationService, private utentiService:UtentiService, private router: Router) { }

  ngOnInit() {
    this.onChangesTemp()
  }

  onChangesTemp():void{
    if(sessionStorage.getItem("ruolo")=='admin'){
      this.tableConfig=tableConfigAdmin;

    }else{
      this.tableConfig=tableConfigUserPrenotazioni;

    }
    this.loginUtenteForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.getUtenteData()
  }

  ngOnChanges(): void {
    this.onChangesTemp()
  }

  getUtenteData(){
    this.utentiService.getUtenteById(sessionStorage.getItem("idUtente")).subscribe(res=>{

      this.utente=res;

    })
  }


  togglePassword() {
    if (this.toggled) {
      this.toggled = false
      this.passwordType = 'text'
    }
    else {
      this.toggled = true
      this.passwordType = 'password'
    }
  }


  login() {
    let user
    this.utentiService.loginUtente().subscribe(res => {
      user=res.find((a:any)=>{

        sessionStorage.setItem("utente",a.email)
        sessionStorage.setItem("ruolo", a.role)
        sessionStorage.setItem("idUtente", a.id)
        console.log(a.id)
        this.router.navigate(['/home'])

        return a.email === this.loginUtenteForm.value.username && a.password===this.loginUtenteForm.value.password;
      })

    })
  }

  linkToReservation(){
    this.router.navigate(['/prenotazioni'])
  }






}
