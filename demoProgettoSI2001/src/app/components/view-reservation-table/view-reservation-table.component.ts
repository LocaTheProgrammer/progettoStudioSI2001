import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../services/car/car.service";
import {Router} from "@angular/router";
import {MyTableConfig} from "../edit-table/edit-table.component";
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
