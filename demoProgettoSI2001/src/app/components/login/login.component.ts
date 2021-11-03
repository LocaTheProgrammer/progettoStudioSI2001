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

  toggled = true
  passwordType = 'password'
  erroreLogin = false;
  isLoginAttemptValid=true;


  constructor(private fb: FormBuilder, private utentiService:UtentiService, private router: Router) { }

  ngOnInit(): void {
    this.loginUtenteForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
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
    let user
    this.utentiService.loginUtente().subscribe(res => {
      user=res.find((a:any)=>{

        sessionStorage.setItem("utente",a.email)
        sessionStorage.setItem("ruolo", a.role)
          sessionStorage.setItem("idUtente", a.id)
        console.log(a.id)
        this.router.navigate(['/home'])

        return a.email === this.loginUtenteForm.value.username && a.password===this.loginUtenteForm.value.password;
      })
    })


  }

}
