import {Component, OnChanges, OnInit} from '@angular/core';
import {UtentiService} from "../../services/utenti/utenti.service";
import {MyTableConfig} from "../../components/table/table.component";
import {tableConfigUtente} from "../../components/data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gestione-utenti',
  templateUrl: './gestione-utenti.component.html',
  styleUrls: ['./gestione-utenti.component.scss']
})
export class GestioneUtentiComponent implements OnInit, OnChanges {



  itemToUpdate!:any
  data!:JSON[]
  tableConfig!:MyTableConfig;

  constructor(private utentiService:UtentiService, private router:Router) {

  }

  ngOnInit() {
    this.ngOnChanges()
  }

  onInitMethod(){
    this.ngOnInit()
  }

  ngOnChanges() {
    this.tableConfig=tableConfigUtente;
    this.utentiService.getUtenti().subscribe((res:any)=>{
      this.data=res.slice(1);
      console.log(this.data)
    })
  }




  book($event:any){
    switch($event.action.action){
      case 'EDIT':
        this.router.navigate(['/edit-user'], {queryParams: {data: JSON.stringify($event.data.id)}})
        break;
      case 'DELETE':
        this.utentiService.deleteUtenteById($event.data.id).subscribe(obs=>{
          this.onInitMethod()
        })

        break;
    }
  }


}
