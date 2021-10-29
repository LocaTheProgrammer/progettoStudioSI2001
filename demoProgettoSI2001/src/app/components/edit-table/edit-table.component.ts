import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";


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




@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent implements OnInit {

  editParcoAutoForm!: FormGroup

  @Input () tableConfig !: MyTableConfig;
  @Input () data : any []= [];
  @Output() btnEmitter = new EventEmitter<any>();
  constructor() { }


  ngOnInit(): void {


  }

}
