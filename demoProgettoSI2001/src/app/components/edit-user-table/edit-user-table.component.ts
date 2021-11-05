import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MyTableConfig} from "../edit-car-table/edit-car-table.component";
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
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })

  }

  update(){

    if(this.data[0].id!=0){
      this.utentiService.updateUtente(this.editUtenteForm.value, this.data[0].id).subscribe(obs=>{
        this.router.navigate(["/login"]);
      })
    }else{
      this.utentiService.addUser(this.editUtenteForm.value).subscribe(observable=>{
        this.router.navigate(['/gestione-utenti'])
      })
    }

  }


}
