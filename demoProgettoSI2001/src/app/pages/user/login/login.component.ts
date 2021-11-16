import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UtentiService} from 'src/app/services/utenti/utenti.service';
import {ReservationService} from "../../../services/reservation/reservation.service";
import {MyTableConfig} from "../../../components/other/table/table.component";
import {tableConfigAdmin, tableConfigUserPrenotazioni} from "../../../components/data";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  loginUtenteForm!: FormGroup
  role?:any
  toggled = true
  passwordType = 'password'
  tableConfig!:MyTableConfig;
  utente:any
  idDataLoaded:boolean=false
  isUtenteLogged:boolean=false

  constructor(private fb: FormBuilder, private  reservationService:ReservationService, private utentiService:UtentiService, private router: Router) { }

  ngOnInit() {
    this.onChangesTemp()
    this.role=sessionStorage.getItem("ruolo")
  }

  onChangesTemp():void{

    if(sessionStorage.getItem("ruolo")==='admin'){
      this.tableConfig=tableConfigAdmin;
      this.isUtenteLogged=true
    }
    if(sessionStorage.getItem("ruolo")==='user'){
      this.tableConfig=tableConfigUserPrenotazioni;
      this.isUtenteLogged=true
    }

    if(this.isUtenteLogged){
      this.utentiService.getUtenteById(sessionStorage.getItem("idUtente")).subscribe(res=>{

        this.utente=res.result;
        this.idDataLoaded=true
      })

    }
    this.loginUtenteForm = this.fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnChanges(): void {
    this.onChangesTemp()

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
    this.utentiService.getBearerToken(this.loginUtenteForm.value.mail, this.loginUtenteForm.value.password).subscribe(res => {
    localStorage.setItem("token", res.token)
     this.userLogin()
    })
  }

  userLogin(){
    this.utentiService.loginUtente(this.loginUtenteForm.value.mail, this.loginUtenteForm.value.password).subscribe(res => {
    if(res.result.firstName!=null){
      sessionStorage.setItem("utente",res.result.email)
      sessionStorage.setItem("ruolo", res.result.role)
      sessionStorage.setItem("idUtente", res.result.id)
      this.role=res.result.role
      this.router.navigate(['/prenotazioni'])

    }
  })

  }

  linkToReservation(){
    this.router.navigate(['/prenotazioni'])
  }




  logout(){
    sessionStorage.removeItem("idUtente")
    sessionStorage.removeItem("utente")
    sessionStorage.removeItem("ruolo")
    localStorage.removeItem("token")
    this.router.navigate(['/home'])
  }


  gestisciUtenti(){
    this.router.navigate(['/gestione-utenti'])
  }

  aggiungiUtente(){
    this.router.navigate(['/aggiungi-utenti'], {queryParams: {data: 0}})

  }

  aggiungiAuto() {
    this.router.navigate(['/aggiungi-auto'], {queryParams: {data: 0}})
  }

}
