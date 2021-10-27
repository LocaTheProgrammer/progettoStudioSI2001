import { Component, OnInit } from '@angular/core';
import {MyButtonConfig} from "../my-button-component/my-button-component.component";
import {MyTableConfig} from "../table/table.component";


import {dataMock, tableConfig} from "../data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buttonConfig: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "testoProva",
    icon :"",
    customCssId : "dropdownMenuButton",
  };

  dataMock=dataMock;

  tableConfig!:MyTableConfig;

  funzionePadreEmitter(){
    console.log("padre");
  }
  ngOnInit(): void {
    this.tableConfig=tableConfig;
  }

}
