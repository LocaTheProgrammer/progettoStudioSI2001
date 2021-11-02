import { Component, OnInit } from '@angular/core';
import {CarServiceService} from "../../services/carService/car-service.service";
import {Router} from "@angular/router";
import {MyTableConfig} from "../table/table.component";

@Component({
  selector: 'app-booking-car',
  templateUrl: './booking-car.component.html',
  styleUrls: ['./booking-car.component.scss']
})
export class BookingCarComponent implements OnInit {

  constructor(private carService:CarServiceService, private router:Router) {
  }



  tableConfig!:MyTableConfig;


  ngOnInit(): void {
  }

}
