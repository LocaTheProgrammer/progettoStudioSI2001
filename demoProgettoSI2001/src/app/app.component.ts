import {Component, OnInit} from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {MyButtonConfig} from "./components/my-button-component/my-button-component.component";

import {MyTableConfig} from "./components/table/table.component";
import {dataMock, tableConfig} from "./components/data";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'demoProgettoSI2001';

  buttonConfig: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "testoProva",
    icon :"",
    customCssId : "dropdownMenuButton"
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
