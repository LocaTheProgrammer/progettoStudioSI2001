import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {MyReservationTableConfig} from "../reservation-table/reservation-table.component";

@Component({
  selector: 'app-view-reservation-table',
  templateUrl: './view-reservation-table.component.html',
  styleUrls: ['./view-reservation-table.component.scss']
})
export class ViewReservationTableComponent   {

  txtSalva:string="Salva"

  @Input () tableConfig !: MyReservationTableConfig;
  @Input () data : any []= [];
  @Output() btnEmitter = new EventEmitter<any>();
  constructor(private router: Router) {

  }

  back(){
    this.router.navigate(['/prenotazioni'])
  }

}
