import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./features/login/login.component";
import {HomeComponent} from "./features/home/home.component";
import {ParcoAutoComponent} from "./features/parco-auto/parco-auto.component";
import { EditParcoAutoComponent } from './features/edit-parco-auto/edit-parco-auto.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import {BookCarComponent} from "./features/book-car/book-car.component";
import {ReservationsComponent} from "./features/reservations/reservations.component";
import {ReservationDetailsComponent} from "./features/reservation-details/reservation-details.component";
import {GestioneUtentiComponent} from "./features/gestione-utenti/gestione-utenti.component";
import {EditUserComponent} from "./features/edit-user/edit-user.component";
import {AddUserComponent} from "./features/add-user/add-user.component";



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'parco-auto', component: ParcoAutoComponent},
  { path: 'edit-parco-auto', component: EditParcoAutoComponent },
  { path: 'booking-car', component: BookCarComponent},
  { path: 'prenotazioni', component: ReservationsComponent},
  { path: 'dettaglio-prenotazione', component: ReservationDetailsComponent},
  { path: 'gestione-utenti', component: GestioneUtentiComponent},
  { path: 'edit-user', component: EditUserComponent },
  { path: 'aggiungi-utenti', component: AddUserComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
