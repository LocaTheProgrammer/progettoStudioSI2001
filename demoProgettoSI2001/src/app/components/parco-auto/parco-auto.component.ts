import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {MyTableConfig} from "../table/table.component";


import {dataMock, tableConfig} from "../data";
import {CarServiceService} from "../../services/carService/car-service.service";


@Component({
  selector: 'app-parco-auto',
  templateUrl: './parco-auto.component.html',
  styleUrls: ['./parco-auto.component.scss']
})
export class ParcoAutoComponent implements OnInit {

  jsonDataCar!:any []

  constructor(private carService:CarServiceService) {
  }

  isContentLoaded:boolean=false;

  tableConfig!:MyTableConfig;


  ngOnInit(): void {

    this.tableConfig=tableConfig;
    this.carService.getCars().subscribe((result:any)=>{
      if(result!=null){
        this.jsonDataCar=result;
        this.isContentLoaded=true;
      }
    })

  }

  output($event: any) {
    console.log($event)
  }
}
