import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UtentiService} from "../../services/utenti/utenti.service";
import {ActivatedRoute} from "@angular/router";
import {MyTableConfig} from "../../components/table/table.component";
import {tableConfigUtente} from "../../components/data";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  itemToUpdate!:any


  data!:JSON[]
  tableConfig!:MyTableConfig;

  constructor(private fb: FormBuilder, private utentiService: UtentiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

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
