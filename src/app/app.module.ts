import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent} from "../Components/signup/signup.component";
import { SigninComponent} from "../Components/signin/signin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NotFoundComponent } from '../Components/not-found/not-found.component';
import {AddHotelComponent} from "../Components/hotels/add-hotel/add-hotel.component";
import {AllHotelsComponent} from "../Components/hotels/all-hotels/all-hotels.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../material-module";
import {EditHotelComponent} from "../Components/hotels/edit-hotel/edit-hotel.component";
import {HeaderComponent} from "../Components/header/header.component";
import {HomeComponent} from "../Components/home/home.component";
import {FooterComponent} from "../Components/footer/footer.component";
import {SidebarComponent} from "../Components/sidebar/sidebar.component";
import {CardStatsComponent} from "../Components/cards/card-stats/card-stats.component";
import {DashboardComponent} from "../Components/dashboard/dashboard.component";
import {DetailleHotelComponent} from "../Components/hotels/detaille-hotel/detaille-hotel.component";
import {ChamberDisponibleComponent} from "../Components/Chamber/chamber-disponible/chamber-disponible.component";


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    // NotFoundComponent,
    AddHotelComponent,
    AllHotelsComponent,
    EditHotelComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    CardStatsComponent,
    DashboardComponent,
    DashboardComponent,
    DetailleHotelComponent,
    ChamberDisponibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
