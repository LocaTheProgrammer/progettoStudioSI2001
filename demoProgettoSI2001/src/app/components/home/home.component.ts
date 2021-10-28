import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {CarServiceService} from "../../services/carService/car-service.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private carService:CarServiceService) {
  }



  ngOnInit() {

  }



}
