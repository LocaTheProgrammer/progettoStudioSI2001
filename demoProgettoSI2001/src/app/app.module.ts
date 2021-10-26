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
import {MatIconModule} from "@angular/material/icon";
import {FilteringPipe} from "./shared/pipes/filtering.pipe";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyButtonComponentComponent,
    TableComponent,
    SortPipe,
    FilteringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    CommonModule,
    MatIconModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
