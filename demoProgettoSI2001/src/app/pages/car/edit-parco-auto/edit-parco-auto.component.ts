import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MyTableConfig} from "../../../components/other/table/table.component";
import {tableConfigAdmin} from "../../../components/data";
import {CarService} from "../../../services/car/car.service";

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
    this.tableConfig=tableConfigAdmin;
    this.itemToUpdate= this.route.snapshot.queryParamMap.get('data');
    this.carService.getCarById(this.itemToUpdate).subscribe((result:any)=>{
      this.data=new Array(1).fill(result);
      }
    );
  }


}
