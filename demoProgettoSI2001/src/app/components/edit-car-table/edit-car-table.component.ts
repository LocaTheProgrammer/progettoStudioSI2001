import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../services/car/car.service";
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
  templateUrl: './edit-car-table.component.html',
  styleUrls: ['./edit-car-table.component.scss']
})
export class EditCarTableComponent implements OnChanges {

  editParcoAutoForm!: FormGroup
  txtSalva:string="Salva"

  @Input () tableConfig !: MyTableConfig;
  @Input () data : any []= [];
  @Output() btnEmitter = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private carService: CarService, private router: Router) {

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
    this.carService.updateCar(this.editParcoAutoForm.value, this.data[0].id).subscribe(obs =>{
      this.router.navigate(["/parco-auto"]);
    })




  }



}
