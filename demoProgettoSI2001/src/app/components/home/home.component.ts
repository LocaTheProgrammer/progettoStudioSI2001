import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MyButtonConfig} from "../my-button-component/my-button-component.component";
import {MyTableConfig} from "../table/table.component";


import {dataMock, tableConfig} from "../data";
import {CarServiceService} from "../../services/carService/car-service.service";
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jsonDataCar!:any []

  constructor(private carService:CarServiceService, private route: ActivatedRoute) {
  }
  dataMock=dataMock;
  jsonMock:string="";
  isContentLoaded:boolean=false;

  tableConfig!:MyTableConfig;
  onChanges = new Subject<SimpleChanges>();

  ngOnInit() {
    this.tableConfig=tableConfig;
    this.carService.getCars().subscribe((result:any)=>{

      if(result!=null){
        this.jsonDataCar=result;
        this.isContentLoaded=true;


      }else{
        console.log("result.result is null or undefined:  "+result.result)
      }
    })

  }



}
