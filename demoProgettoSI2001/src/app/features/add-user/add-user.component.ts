import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtentiService} from "../../services/utenti/utenti.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUserForm!: FormGroup

  constructor(private fb: FormBuilder, private utentiService: UtentiService, private router:Router) {
  }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  update() {
    console.log(this.addUserForm.value)
    this.utentiService.addUser(this.addUserForm.value).subscribe()
    this.router.navigate(['/gestione-utenti'])
  }

}
