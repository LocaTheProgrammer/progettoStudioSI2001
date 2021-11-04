import {Component, OnInit, ViewChild} from '@angular/core';

import {MyButtonConfig} from "./components/my-button-component/my-button-component.component";


import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'demoProgettoSI2001';
  buttonHome: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "",
    icon :"account_circle",
    customCssId : "",
  };

  constructor(private router: Router) {
  }
  ngOnInit(): void {

  }
  redirectToProfilo(){
    this.router.navigate(['/login']);
  }

  redirectToParcoAuto(){
    this.router.navigateByUrl("/parco-auto")
  }
}
