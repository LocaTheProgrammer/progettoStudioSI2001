import {Component, DoCheck, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
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
  actions : MyTableActionEnum [];
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

export enum MyTableActionEnum {
  NEW_ROW= 'NEW_ROW' , EDIT='EDIT' , DELETE ='DELETE'
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  logTableComponent:string="[Table Component] ";


  showButtonAsc:boolean=true;
  showButtonDesc:boolean=false;
  searchTerm: string ="";
  sortedColumn : string ="";
  columnOrder : string ="";
  searchField : string = "";
  visibleElements:string="";
  pageNumberModel:string=""
  pageNumber!:number
  numbers!:number[]



  @Input () tableConfig !: MyTableConfig;
  @Input () data : any []= [];


  buttonConfigAsc: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "",
    icon :"arrow_upward",
    customCssId : "",
  };

  buttonConfigDesc: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "",
    icon :"arrow_downward",
    customCssId : "",
  };

  buttonEdit: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "",
    icon :"edit",
    customCssId : "",
  };

  buttonDelete: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "",
    icon :"delete",
    customCssId : "",
  };

  nome: string="nome"
  cognome: string="cognome"
  eta!: string




  setPageNumberModel(page:any){
    this.pageNumberModel=page;
  }


  isDataUndefined:boolean=true;
  ngOnChanges() {


    if(this.data!=undefined&&this.data!=null&&this.data!=[]){
      this.isDataUndefined=false
      this.dataLength=this.data.length
      this.headersLength=this.tableConfig.headers.length
      this.pageNumber=Math.ceil(this.dataLength/this.headersLength)
      this.numbers=new Array(this.pageNumber).fill(null).map((_, i) => i + 1);
    }

    console.log(this.logTableComponent, "sorted column: ",this.tableConfig.myOrder.orderType)
    console.log(this.logTableComponent, "sorted column order: ",this.tableConfig.myOrder.defaultColumn)





  }

  constructor(private carService:CarServiceService) {



  }

  dataLength!:number
  headersLength!:number

  ngOnInit(): void {


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

  modifica(action:any, record:any){
  switch (action){
    case 'EDIT':
      console.log(this.logTableComponent, "edit ", record);
      break;
    case 'DELETE':
      console.log(this.logTableComponent, "delete ", record);
      break;

  }
  }
  delete(name:string, surname:string){
    console.log("delete: "+name+" "+surname)
  }



}
