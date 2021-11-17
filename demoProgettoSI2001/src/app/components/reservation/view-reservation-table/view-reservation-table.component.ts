import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {MyTableConfig} from "../../other/table/table.component";

@Component({
  selector: 'app-view-reservation-table',
  templateUrl: './view-reservation-table.component.html',
  styleUrls: ['./view-reservation-table.component.scss']
})
export class ViewReservationTableComponent   {

  txtSalva:string="Salva"

  @Input () tableConfig !: MyTableConfig;
  @Input () data : any []= [];
  @Output() btnEmitter = new EventEmitter<any>();
  constructor(private router: Router) {

  }

  back(){
    this.router.navigate(['/prenotazioni'])
  }

}
