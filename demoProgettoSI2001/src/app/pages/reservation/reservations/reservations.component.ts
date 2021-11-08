import {Component, OnChanges, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import {
  tableConfigAdmin,
  tableConfigAdminDelete,
  tableConfigReservation,
  tableConfigUserPrenotazioni
} from "../../../components/data";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MyTableConfig} from "../../../components/other/table/table.component";
import {ReservationService} from "../../../services/reservation/reservation.service";
import {UtentiService} from "../../../services/utenti/utenti.service";
import {MyReservationTableConfig} from "../../../components/reservation/reservation-table/reservation-table.component";

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

    this.reservationService.getReservations().subscribe((res:any)=>{

      this.bookedCarsDates=res
      return this.bookedCars=res;
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

    this.reservationService.getReservations().subscribe((res:any)=>{

      this.bookedCarsDates=res
      return this.reservations=res;
    })
  }

}
