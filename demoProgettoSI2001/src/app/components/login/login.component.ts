import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtentiService } from 'src/app/services/utenti/utenti.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUtenteForm!: FormGroup
  recuperoForm!: FormGroup

  toggled = true
  passwordType = 'password'
  erroreLogin = false;
  isLoginAttemptValid=true;

  
  constructor(private fb: FormBuilder, private utentiService:UtentiService) { }

  ngOnInit(): void {
    this.loginUtenteForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

    this.recuperoForm = this.fb.group({
      email: ['', Validators.required],
      password: [''],
    })

  }

  togglePassword() {
    if (this.toggled) {
      this.toggled = false
      this.passwordType = 'text'
    }
    else {
      this.toggled = true
      this.passwordType = 'password'
    }
  }


  login() {
    this.utentiService.loginUtente(this.loginUtenteForm.value.username, this.loginUtenteForm.value.password)
    if(sessionStorage.getItem("utente")!=null&&sessionStorage.getItem("utente")!=undefined&&sessionStorage.getItem("utente")!=""){
      console.log("funziona")
      console.log(sessionStorage.getItem("utente"))
    }
  }

}
