import { Component, OnInit } from '@angular/core';
import {UtentiService} from "../../services/utenti/utenti.service";
import {MyTableConfig} from "../../components/table/table.component";
import {tableConfigAdmin, tableConfigUser} from "../../components/data";

@Component({
  selector: 'app-gestione-utenti',
  templateUrl: './gestione-utenti.component.html',
  styleUrls: ['./gestione-utenti.component.scss']
})
export class GestioneUtentiComponent implements OnInit {



  itemToUpdate!:any
  data!:JSON[]
  tableConfig!:MyTableConfig;

  constructor(private utentiService:UtentiService) {

  }

  ngOnInit() {
    this.tableConfig=tableConfigUser;
    this.utentiService.getUtenti().subscribe((res:any)=>{
      this.data=res;
      console.log(this.data)
    })
  }




  book($event:any){
    console.log($event)


  }
}
