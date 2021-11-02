import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CarServiceService} from "../../services/carService/car-service.service";
import {Router} from "@angular/router";


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
export class EditTableComponent implements OnChanges {

  editParcoAutoForm!: FormGroup
  txtSalva:string="Salva"

  @Input () tableConfig !: MyTableConfig;
  @Input () data : any []= [];
  @Output() btnEmitter = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private carService: CarServiceService, private router: Router) {

   }


  ngOnChanges(): void {

    this.editParcoAutoForm = this.fb.group({
      Name: ['', Validators.required],
      Miles_per_Gallon: ['', Validators.required],
      Cylinders: ['', Validators.required],
      Displacement : ['', Validators.required],
      Horsepower : ['', Validators.required],
      Weight_in_lbs : ['', Validators.required],
      Acceleration : ['', Validators.required],
      Year : ['', Validators.required],
      Origin : ['', Validators.required],
    })

  }

  update(){
    this.carService.updateCar(this.editParcoAutoForm.value, this.data[0].id).subscribe()

    this.router.navigate(["/parco-auto"]);


  }



}
