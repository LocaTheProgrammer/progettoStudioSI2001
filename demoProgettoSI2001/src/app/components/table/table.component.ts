import {Component, Input, OnInit} from '@angular/core';
import {MyButtonConfig} from "../my-button-component/my-button-component.component";



export interface MyTableConfig {
  headers : MyHeaders [];
}

export interface MyHeaders {
  key : string ;
  label : string ;
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

  @Input () tableConfig !: MyTableConfig;
  @Input () data !: any [];

  buttonConfigAsc: MyButtonConfig={
    customCssClass : "" ,
    text : "asc",
    icon :"",
    customCssId : "",
  };

  buttonConfigDesc: MyButtonConfig={
    customCssClass : "" ,
    text : "desc",
    icon :"",
    customCssId : "",
  };

  constructor() { }

  ngOnInit(): void {

  }



  ordinaAsc(value:string){

    this.sortedColumn=value;
    console.log(this.sortedColumn)
    this.showButtonAsc=!this.showButtonAsc;
    this.showButtonDesc=!this.showButtonDesc;

  }
  ordinaDesc(value:string){
    this.sortedColumn=value;
    console.log(this.sortedColumn)
    this.showButtonAsc=!this.showButtonAsc;
    this.showButtonDesc=!this.showButtonDesc;

  }

}
