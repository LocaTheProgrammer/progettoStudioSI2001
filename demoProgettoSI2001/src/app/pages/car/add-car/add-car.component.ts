import {Component, OnInit} from '@angular/core';
import {MyTableConfig} from "../../../components/other/table/table.component";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {tableConfigUserParcoAuto} from "../../../components/data";
import {CarService} from "../../../services/car/car.service";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {


  itemToUpdate!:any


  data!:JSON[]
  tableConfig!:MyTableConfig;

  constructor(private fb: FormBuilder, private carService: CarService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.tableConfig=tableConfigUserParcoAuto;
    this.itemToUpdate= this.route.snapshot.queryParamMap.get('data');
    this.carService.getCarById(this.itemToUpdate).subscribe((result:any)=>{

        this.data=new Array(1).fill(result.result);

      }
    );
  }



}
