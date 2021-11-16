import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/user/login/login.component';
import { MyButtonComponentComponent } from './components/other/my-button-component/my-button-component.component';
import { TableComponent } from './components/other/table/table.component';
import {SortPipe} from "./shared/pipes/sort.pipe";
import {MatIconModule} from "@angular/material/icon";
import {FilteringPipe} from "./shared/pipes/filtering.pipe";
import {FormsModule} from "@angular/forms";
import { PaginationPipe } from './shared/pipes/pagination.pipe';
import { HomeComponent } from './pages/other/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ParcoAutoComponent } from './pages/car/parco-auto/parco-auto.component';
import { EditParcoAutoComponent } from './pages/car/edit-parco-auto/edit-parco-auto.component';
import { EditCarTableComponent } from './components/car/edit-car-table/edit-car-table.component';
import { PageNotFoundComponent } from './pages/other/page-not-found/page-not-found.component';
import { BookCarComponent } from './pages/car/book-car/book-car.component';
import { ReservationsComponent } from './pages/reservation/reservations/reservations.component';
import { ReservationTableComponent } from './components/reservation/reservation-table/reservation-table.component';
import { ViewReservationTableComponent } from './components/reservation/view-reservation-table/view-reservation-table.component';
import { ReservationDetailsComponent } from './pages/reservation/reservation-details/reservation-details.component';
import { GestioneUtentiComponent } from './pages/user/gestione-utenti/gestione-utenti.component';
import { EditUserTableComponent } from './components/user/edit-user-table/edit-user-table.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { AddCarComponent } from './pages/car/add-car/add-car.component';
import {AuthInterceptor} from "./services/auth.interceptor";
import {UtentiService} from "./services/utenti/utenti.service";


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
    EditCarTableComponent,
    PageNotFoundComponent,
    BookCarComponent,
    ReservationsComponent,
    ReservationTableComponent,
    ViewReservationTableComponent,
    ReservationDetailsComponent,
    GestioneUtentiComponent,
    EditUserTableComponent,
    EditUserComponent,
    AddUserComponent,
    AddCarComponent,



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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
