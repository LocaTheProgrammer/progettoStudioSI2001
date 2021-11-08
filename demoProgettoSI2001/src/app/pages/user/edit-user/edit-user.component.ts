import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MyTableConfig} from "../../../components/other/table/table.component";
import {tableConfigUtente} from "../../../components/data";
import {UtentiService} from "../../../services/utenti/utenti.service";

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
    this.utentiService.getUtenteById(this.itemToUpdate).subscribe((result:any)=>{
        this.data=new Array(1).fill(result.result);
      }
    );
  }
}
