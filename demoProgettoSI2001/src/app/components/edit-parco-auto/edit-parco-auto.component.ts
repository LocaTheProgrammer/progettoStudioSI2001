import {Component, OnChanges, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {MyTableConfig} from "../table/table.component";
import {dataMock, tableConfig} from "../data";
import {CarService} from "../../services/ca/car.service";
import {coerceStringArray} from "@angular/cdk/coercion";
@Component({
  selector: 'app-edit-parco-auto',
  templateUrl: './edit-parco-auto.component.html',
  styleUrls: ['./edit-parco-auto.component.scss']
})
export class EditParcoAutoComponent implements OnInit{

  constructor(private route: ActivatedRoute, private carService:CarService) { }

  itemToUpdate!:any
  data!:JSON[]
  tableConfig!:MyTableConfig;


  ngOnInit() {
    this.tableConfig=tableConfig;
    this.itemToUpdate= this.route.snapshot.queryParamMap.get('data');
    this.carService.getCarById(this.itemToUpdate).subscribe((result:any)=>{
      this.data=new Array(1).fill(result);
      }
    );
  }


}
