import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { MyButtonComponentComponent } from './components/my-button-component/my-button-component.component';
import { TableComponent } from './components/table/table.component';
import {SortPipe} from "./shared/pipes/sort.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyButtonComponentComponent,
    TableComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
