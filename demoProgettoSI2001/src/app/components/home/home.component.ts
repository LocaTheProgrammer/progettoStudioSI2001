import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {CarService} from "../../services/ca/car.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private carService:CarService) {
  }



  ngOnInit() {

  }



}
