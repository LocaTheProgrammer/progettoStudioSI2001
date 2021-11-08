import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../../services/car/car.service";
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
  selector: 'app-edit-car-table',
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
      name: ['', Validators.required],
      milesPerGallon: ['', Validators.required],
      cylinders: ['', Validators.required],
      displacement : ['', Validators.required],
      horsePower : ['', Validators.required],
      weightInLbs : ['', Validators.required],
      acceleration : ['', Validators.required],
      year : ['', Validators.required],
      origin : ['', Validators.required],
    })

  }

  update(){

    if(this.data[0].id!=0){
      this.carService.updateCar(this.editParcoAutoForm.value, this.data[0].id).subscribe(obs =>{
        this.router.navigate(["/parco-auto"]);
      })
    }else{
      console.log(this.editParcoAutoForm.value)
      this.carService.addCar(this.editParcoAutoForm.value).subscribe(obs=>{
        this.router.navigate(['/parco-auto'])
      })
    }





  }



}
