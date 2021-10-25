import { Component } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {MyButtonConfig} from "./components/my-button-component/my-button-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'demoProgettoSI2001';

  buttonConfig: MyButtonConfig={
    customCssClass : "btn btn-outline-primary" ,
    text : "testoProva",
    icon :"",
    customCssId : "dropdownMenuButton"
  };


  funzionePadreEmitter(){
    console.log("padre");
  }

}
