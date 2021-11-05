import {Component, OnChanges, OnInit} from '@angular/core';

import {MyTableConfig} from "../../../components/other/table/table.component";


import {tableConfigAdminParcoAuto, tableConfigUserParcoAuto} from "../../../components/data";
import {CarService} from "../../../services/car/car.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-parco-auto',
  templateUrl: './parco-auto.component.html',
  styleUrls: ['./parco-auto.component.scss']
})
export class ParcoAutoComponent implements OnInit, OnChanges{

  jsonDataCar!:any []

  constructor(private carService:CarService, private router:Router) {
  }


  tableConfig!:MyTableConfig;


  ngOnInit(): void {

    this.onInitMethod()
  }

  ngOnChanges() {
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
        this.jsonDataCar=result.slice(1);
      }
    })

  }



  output($event: any) {
    switch($event.action.action){
      case 'EDIT':
        this.router.navigate(['/edit-parco-auto'], {queryParams: {data: JSON.stringify($event.data.id)}})
        break;
        case 'DELETE':
          this.carService.deleteCar($event.data.id).subscribe(obs=>{
            this.onInitMethod()
            this.router.navigate(['/login'])
          });

        break;
    }
  }
}
