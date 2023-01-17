import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "../Components/signup/signup.component";
import {SigninComponent} from "../Components/signin/signin.component";
import {NotFoundComponent} from "../Components/not-found/not-found.component";
import {AllHotelsComponent} from "../Components/hotels/all-hotels/all-hotels.component";
import {HomeComponent} from "../Components/home/home.component";
import {DashboardComponent} from "../Components/dashboard/dashboard.component";
import {DetailleHotelComponent} from "../Components/hotels/detaille-hotel/detaille-hotel.component";
import {ChamberDisponibleComponent} from "../Components/Chamber/chamber-disponible/chamber-disponible.component";


const routes: Routes = [
  {path:"Signin",component:SigninComponent},
  {path:"Signup",component:SignupComponent},
  {path:"allHotel",component:AllHotelsComponent},
  {path:"home",component:HomeComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"detailleHotel/:id",component:DetailleHotelComponent},
  {path:"chambreDisponible",component:ChamberDisponibleComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
