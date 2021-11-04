import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../services/car/car.service";
import {Router} from "@angular/router";
import {MyTableConfig} from "../edit-table/edit-table.component";
import {UtentiService} from "../../services/utenti/utenti.service";

@Component({
  selector: 'app-edit-user-table',
  templateUrl: './edit-user-table.component.html',
  styleUrls: ['./edit-user-table.component.scss']
})
export class EditUserTableComponent implements OnChanges  {

  editUtenteForm!: FormGroup
  txtSalva:string="Salva"

  @Input () tableConfig !: MyTableConfig;
  @Input () data : any []= [];
  @Output() btnEmitter = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private utentiService: UtentiService, private router: Router) {

  }


  ngOnChanges(): void {

    this.editUtenteForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    })

  }

  update(){

    this.utentiService.updateUtente(this.editUtenteForm.value, this.data[0].id).subscribe()
    this.router.navigate(["/login"]);


  }


}
