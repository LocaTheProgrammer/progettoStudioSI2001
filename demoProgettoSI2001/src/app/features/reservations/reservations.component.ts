import {Component, OnChanges, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import {
  tableConfigAdmin,
  tableConfigAdminDelete,
  tableConfigReservation,
  tableConfigUserPrenotazioni
} from "../../components/data";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MyTableConfig} from "../../components/table/table.component";
import {ReservationService} from "../../services/reservation/reservation.service";
import {UtentiService} from "../../services/utenti/utenti.service";
import {MyReservationTableConfig} from "../../components/reservation-table/reservation-table.component";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit, OnChanges {

  loginUtenteForm!: FormGroup
  role?=sessionStorage.getItem("ruolo")
  toggled = true
  tableConfig!:MyReservationTableConfig;
  bookedCars!:JSON[]
  bookedCarsDates!:JSON[]
  reservations!:JSON[]


  constructor(private fb: FormBuilder, private  reservationService:ReservationService, private utentiService:UtentiService, private router: Router) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("ruolo"))
    if(sessionStorage.getItem("ruolo")!='admin'&&sessionStorage.getItem("ruolo")!='user'){
      this.router.navigate(['/login'])
    }
    this.onChangesTemp()
  }



  ngOnChanges(): void {
    this.onChangesTemp()
  }


  logout(){
    sessionStorage.removeItem("idUtente")
    sessionStorage.removeItem("utente")
    sessionStorage.removeItem("ruolo")
    this.router.navigate(['/home'])
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

  event($event:any){
    console.log($event.data.id)
    switch($event.action.action){
      case 'DETTAGLI':
        this.router.navigate(['/dettaglio-prenotazione'], {queryParams: {data: JSON.stringify($event.data.id)}})
        break;
      case 'DELETE':
        this.reservationService.deleteReservationById($event.data.id).subscribe()
        this.onChangesTemp()
        break;
    }


  }

  onChangesTemp():void{
    if(sessionStorage.getItem("ruolo")=='admin'){
      this.tableConfig=tableConfigReservation;
      this.getReservations()
    }else{
      this.tableConfig=tableConfigReservation;
      this.getUserBookedCars()
    }
    this.loginUtenteForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
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
      this.bookedCarsDates=res
      return this.reservations=res;
    })
  }

}