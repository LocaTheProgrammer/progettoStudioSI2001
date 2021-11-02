import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
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
  actions : any ;
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
  customCssClass:string
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
  dataLength!:number
  headersLength!:number
  isDataUndefined:boolean=true;
  campoDiRiecerca : string ="";
  role?:any=sessionStorage.getItem("ruolo")?.replace('"', '').replace('"','');




  @Input () tableConfig !: MyTableConfig;
  @Input () data : any []= [];
  @Output() btnEmitter = new EventEmitter<any>();



  constructor() {}

  ngOnChanges() {
  this.visibleElements=this.tableConfig.myPagination.itemPerPage.toString()
    if((this.data!=undefined&&this.data!=null&&this.data!=[])){
      this.isDataUndefined=false
      this.dataLength=this.data.length
      this.headersLength=this.tableConfig.headers.length
      this.pageNumber=Math.floor(this.dataLength/+this.visibleElements)

      this.numbers=new Array(this.pageNumber).fill(null).map((_, i) => i + 1);
    }
  }



  ngOnInit(): void {}

  onInputChange($event:any){
   this.visibleElements=$event;
    this.headersLength=this.tableConfig.headers.length
    this.pageNumber=Math.floor(this.dataLength/+this.visibleElements)

    this.numbers=new Array(this.pageNumber).fill(null).map((_, i) => i + 1);
  }








  ordinaAsc(value:string){

    this.sortedColumn=value;

    this.showButtonAsc=!this.showButtonAsc;
    this.showButtonDesc=!this.showButtonDesc;
    this.columnOrder="asc";

  }
  ordinaDesc(value:string){
    this.sortedColumn=value;

    this.showButtonAsc=!this.showButtonAsc;
    this.showButtonDesc=!this.showButtonDesc;
    this.columnOrder="desc";

  }

  click(action:any, record:any){
  this.btnEmitter.emit({action:action, data:record})



  }

  setPageNumberModel(page:any){
    this.pageNumberModel=page;
  }



}
