import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {MyTableConfig} from "../table/table.component";
import {dataMock, tableConfig} from "../data";
@Component({
  selector: 'app-edit-parco-auto',
  templateUrl: './edit-parco-auto.component.html',
  styleUrls: ['./edit-parco-auto.component.scss']
})
export class EditParcoAutoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  itemToUpdate!:any
  data!:JSON[]
  tableConfig!:MyTableConfig;

  ngOnInit(): void {
    this.tableConfig=tableConfig;
    this.itemToUpdate= this.route.snapshot.queryParamMap.get('data');
    //this.data=JSON.parse(this.itemToUpdate);
    this.data=new Array(1).fill(JSON.parse(this.itemToUpdate));

  }
  output($event:any){}

}
