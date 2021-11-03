import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

import {MyTableConfig} from "../../components/table/table.component";


import {dataMock, tableConfigAdmin, tableConfigAdminParcoAuto, tableConfigUserParcoAuto} from "../../components/data";
import {CarService} from "../../services/car/car.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-parco-auto',
  templateUrl: './parco-auto.component.html',
  styleUrls: ['./parco-auto.component.scss']
})
export class ParcoAutoComponent implements OnInit{

  jsonDataCar!:any []

  constructor(private carService:CarService, private router:Router) {
  }


  tableConfig!:MyTableConfig;


  ngOnInit(): void {

    this.onInitMethod()
  }


  onInitMethod():void{
    if(sessionStorage.getItem("ruolo")==='admin'){
      this.tableConfig=tableConfigAdminParcoAuto;
    }else{
      this.tableConfig=tableConfigUserParcoAuto;
    }

    this.carService.getCars().subscribe((result:any)=>{
      if(result!=null){
        this.jsonDataCar=result;
      }
    })

  }



  output($event: any) {
    switch($event.action.action){
      case 'EDIT':
        this.router.navigate(['/edit-parco-auto'], {queryParams: {data: JSON.stringify($event.data)}})
        break;
        case 'DELETE':
          this.carService.deleteCar($event.data).subscribe();
          this.onInitMethod()
        break;
    }
  }
}
