import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MyButtonConfig} from "../my-button-component/my-button-component.component";
import {MatSort} from "@angular/material/sort";

export interface MySearch {
  columns : string [];
}

export interface MyTableConfig {
  headers : MyHeaders [];
  myOrder: MyOrder;
  search:MySearch;
}

export interface MyHeaders {
  key : string ;
  label : string ;
 }
export interface MyOrder {
  defaultColumn : string ;
  orderType : string ;
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  showButtonAsc:boolean=true;
  showButtonDesc:boolean=false;

  sortedColumn : string ="";
  columnOrder : string ="";
  @Input () tableConfig !: MyTableConfig;
  @Input () data !: any [];

  nomeForm:string = "";
  cognomeForm:string ="";
  etaForm!:number;

  buttonConfigAsc: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "",
    icon :"import_export",
    customCssId : "",
  };

  buttonConfigDesc: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "",
    icon :"import_export",
    customCssId : "",
  };



  constructor() { }

  ngOnInit(): void {
    this.sortedColumn ="age";
    this.columnOrder  ="asc";
  }



  ordinaAsc(value:string){

    this.sortedColumn=value;
    console.log(this.sortedColumn)
    this.showButtonAsc=!this.showButtonAsc;
    this.showButtonDesc=!this.showButtonDesc;
    this.columnOrder="asc";

  }
  ordinaDesc(value:string){
    this.sortedColumn=value;
    console.log(this.sortedColumn)
    this.showButtonAsc=!this.showButtonAsc;
    this.showButtonDesc=!this.showButtonDesc;
    this.columnOrder="desc";

  }

}
