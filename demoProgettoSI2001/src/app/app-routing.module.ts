import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/user/login/login.component";
import {HomeComponent} from "./pages/other/home/home.component";
import {ParcoAutoComponent} from "./pages/car/parco-auto/parco-auto.component";
import { EditParcoAutoComponent } from './pages/car/edit-parco-auto/edit-parco-auto.component';
import { PageNotFoundComponent } from './pages/other/page-not-found/page-not-found.component';
import {BookCarComponent} from "./pages/car/book-car/book-car.component";
import {ReservationsComponent} from "./pages/reservation/reservations/reservations.component";
import {ReservationDetailsComponent} from "./pages/reservation/reservation-details/reservation-details.component";
import {GestioneUtentiComponent} from "./pages/user/gestione-utenti/gestione-utenti.component";
import {EditUserComponent} from "./pages/user/edit-user/edit-user.component";
import {AddUserComponent} from "./pages/user/add-user/add-user.component";
import {AddCarComponent} from "./pages/car/add-car/add-car.component";



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
  { path: 'aggiungi-auto', component: AddCarComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
