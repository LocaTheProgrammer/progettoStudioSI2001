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
import { PaginationPipe } from './shared/pipes/pagination.pipe';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ParcoAutoComponent } from './components/parco-auto/parco-auto.component';
import { EditParcoAutoComponent } from './components/edit-parco-auto/edit-parco-auto.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookCarComponent } from './components/book-car/book-car.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyButtonComponentComponent,
    TableComponent,
    SortPipe,
    FilteringPipe,
    PaginationPipe,
    HomeComponent,
    ParcoAutoComponent,
    EditParcoAutoComponent,
    EditTableComponent,
    PageNotFoundComponent,
    BookCarComponent,



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
    ReactiveFormsModule,
    HttpClientModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
