import {Component, Input, OnInit} from '@angular/core';

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

  @Input () tableConfig !: MyTableConfig ;
  @Input () data !: any [];
  constructor() { }

  ngOnInit(): void {
    this.data[0]={
      "name": "pietro",
      "surname":"locatelli",
      "age": "21"
    }
    this.data[1]={
      "name": "mario",
      "surname":"rossi",
      "age": "22"
    }
    this.data[1]={
      "name": "luca",
      "surname":"verdi",
      "age": "23"
    }


  }

}
