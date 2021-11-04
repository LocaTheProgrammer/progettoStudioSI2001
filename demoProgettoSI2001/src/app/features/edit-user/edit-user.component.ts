import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../../services/car/car.service";
import {MyTableConfig} from "../../components/table/table.component";
import {tableConfigAdmin, tableConfigUtente} from "../../components/data";
import {UtentiService} from "../../services/utenti/utenti.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(private route: ActivatedRoute, private utentiService:UtentiService) { }

  itemToUpdate!:any
  data!:JSON[]
  tableConfig!:MyTableConfig;


  ngOnInit() {
    this.tableConfig=tableConfigUtente;
    this.itemToUpdate= this.route.snapshot.queryParamMap.get('data');
    console.log(this.itemToUpdate)
    this.utentiService.getUtenteById(this.itemToUpdate).subscribe((result:any)=>{
        this.data=new Array(1).fill(result);
        console.log(this.data)
      }
    );
  }
}
