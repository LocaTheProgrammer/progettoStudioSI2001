import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


export interface MySearch {
  columns : string [];
}

export interface MyReservationTableConfig {
  carHeaders : MyHeaders [];
  headersDate:MyHeaders[];
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
   EDIT='EDIT' , DELETE ='DELETE', DETTAGLI='DETTAGLI'
}



@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.scss']
})
export class ReservationTableComponent implements OnInit {

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




  @Input () tableConfig !: MyReservationTableConfig;
  @Input () data : any []= [];
  @Input () fromDate?:any
  @Input () toDate?:any
  @Output() btnEmitter = new EventEmitter<any>();



  constructor() {}

  ngOnChanges() {
    this.visibleElements=this.tableConfig.myPagination.itemPerPage.toString()
    if((this.data!=undefined&&this.data!=null&&this.data!=[])){
      console.log(this.data)
      this.isDataUndefined=false
      this.dataLength=this.data.length
      this.visualize()
    }
  }


  visualize(){
    this.headersLength=this.tableConfig.carHeaders.length
    this.pageNumber=Math.ceil(this.dataLength/+this.visibleElements)
    this.numbers=new Array(this.pageNumber)

    for(let i=0; i<this.pageNumber;i++){
      this.numbers[i]=i;
    }
  }


  ngOnInit(): void {}

  onInputChange($event:any){
    this.visibleElements=$event;
    this.visualize();
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
