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
  bookedCars!:JSON[]
  bookedCarsDates!:JSON[]
  reservations!:JSON[]



  constructor(private fb: FormBuilder, private  reservationService:ReservationService, private utentiService:UtentiService, private router: Router) { }

  ngOnInit() {
    this.onChangesTemp()
  }

  onChangesTemp():void{
    if(sessionStorage.getItem("ruolo")=='admin'){
      this.tableConfig=tableConfigAdmin;
      this.getReservations()
    }else{
      this.tableConfig=tableConfigUserPrenotazioni;
      this.getUserBookedCars()
    }
    this.loginUtenteForm = this.fb.group({
      username: ['', Validators.required],
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
  event($event:any){
    console.log($event)
  }

  getUserBookedCars(){
    let cars:any[]=[]
    let dates:any[]=[]
    this.reservationService.getReservations().subscribe((res:any)=>{
      for(let i=0; i<res.length;i++){
        if(res[i].userId==sessionStorage.getItem("idUtente")){

          cars.push(res[i].car);
          dates.push(res[i].reservationDate);

        }
      }

      this.bookedCarsDates=dates
      return this.bookedCars=cars;
    })
  }

  getReservations(){
    let cars:any[]=[]
    let dates:any[]=[]
    this.reservationService.getReservations().subscribe((res:any)=>{
      for(let i=0; i<res.length;i++) {
        cars.push(res[i].car);
        dates.push(res[i].reservationDate);
      }
      this.bookedCarsDates=dates
      return this.reservations=cars;
    })
  }


  logout(){
    sessionStorage.removeItem("idUtente")
    sessionStorage.removeItem("utente")
    sessionStorage.removeItem("ruolo")
    this.router.navigate(['/home'])
  }

}
