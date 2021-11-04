import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../services/car/car.service";
import {MyTableConfig} from "../../components/table/table.component";
import {tableConfigAdmin, tableConfigReservation} from "../../components/data";
import {ReservationService} from "../../services/reservation/reservation.service";
import {MyReservationTableConfig} from "../../components/reservation-table/reservation-table.component";

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private reservationService:ReservationService) { }

  itemToUpdate!:any
  data!:JSON[]
  tableConfig!:MyReservationTableConfig;


  ngOnInit() {
    this.tableConfig=tableConfigReservation;
    this.itemToUpdate= this.route.snapshot.queryParamMap.get('data');
    console.log(this.itemToUpdate)
    this.reservationService.getReservationById(this.itemToUpdate).subscribe((result:any)=>{
        this.data=new Array(1).fill(result);
        console.log(this.data)
      }
    );
  }

  output($event:any){
    console.log($event)
  }
}