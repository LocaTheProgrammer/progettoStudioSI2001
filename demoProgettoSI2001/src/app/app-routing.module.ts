import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./components/login/login.component";
import {TableComponent} from "./components/table/table.component";
import {HomeComponent} from "./components/home/home.component";
import {ParcoAutoComponent} from "./components/parco-auto/parco-auto.component";
import { EditParcoAutoComponent } from './components/edit-parco-auto/edit-parco-auto.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {BookingCarComponent} from "./components/booking-car/booking-car.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'parco-auto', component: ParcoAutoComponent},
  { path: 'edit-parco-auto', component: EditParcoAutoComponent },
  { path: 'booking-car', component: BookingCarComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
