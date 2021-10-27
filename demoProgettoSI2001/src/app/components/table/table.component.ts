import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MyButtonConfig} from "../my-button-component/my-button-component.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {dataMock} from "../data";
import {CarServiceService} from "../../services/carService/car-service.service";


export interface MySearch {
  columns : string [];
}

export interface MyTableConfig {
  headers : MyHeaders [];
  myOrder : MyOrder;
  search : MySearch;
  myPagination: MyPagination;
}

export interface MyHeaders {
  key : string ;
  label : string ;
 }
export interface MyOrder {
  defaultColumn : string ;
  orderType : string ;
}
export interface MyPagination {
  itemPerPage : number ;
  itemPerPageOptions : number [];
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  showButtonAsc:boolean=true;
  showButtonDesc:boolean=false;
  searchTerm: string ="";
  sortedColumn : string ="";
  columnOrder : string ="";
  searchField : string = "";
  visibleElements:string="";
  jsonDataCar:any

  @Input () tableConfig !: MyTableConfig;
  @Input () data !: any [];


  buttonConfigAsc: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "",
    icon :"import_export",
    customCssId : "",
    clickFunction:""
  };

  buttonConfigDesc: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "",
    icon :"import_export",
    customCssId : "",
    clickFunction:""
  };

  buttonEdit: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "",
    icon :"edit",
    customCssId : "",
    clickFunction:""
  };

  buttonDelete: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "",
    icon :"delete",
    customCssId : "",
    clickFunction:""
  };

  nome: string="nome"
  cognome: string="cognome"
  eta!: string






  constructor(private carService:CarServiceService) { }

  ngOnInit(): void {
    this.sortedColumn ="age";
    this.columnOrder  ="asc";
    this.carService.getCars().subscribe(result=>{
      console.log("result: "+ result.result)
      if(result.result!=null){
        this.jsonDataCar=result.result;
        console.log("car data: "+this.jsonDataCar)
      }else{
        console.log("result.result is null or undefined:  "+result.result)
      }
    })
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

  modifica(name:string, surname:string){
  console.log("modifica: "+name+" "+surname)
  }
  delete(name:string, surname:string){
    console.log("delete: "+name+" "+surname)
  }



}
