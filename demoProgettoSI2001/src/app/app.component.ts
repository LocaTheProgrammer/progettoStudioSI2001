import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {MyButtonConfig} from "./components/my-button-component/my-button-component.component";

import {MyTableConfig} from "./components/table/table.component";
import {dataMock, tableConfig} from "./components/data";
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
    console.log("redirect to profile")
    this.router.navigateByUrl("login");
  }
}
