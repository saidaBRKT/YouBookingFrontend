import {Component, OnInit} from '@angular/core';
import {HotelService} from "../../services/hotel.service";
import {MatTableDataSource} from "@angular/material/table";
import {DateReservation} from "../../Models/DateReservation";
import {DateService} from "../../services/date.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  hotels:any;
  date:DateReservation;
  dateReturn!:DateReservation

  constructor(private hotelService:HotelService,private dateService:DateService,public router:Router) {
    this.date=new DateReservation();
    this.dateReturn=new DateReservation()
  }

  ngOnInit(): void {
    this.GetAll();

  }

  redirect(){
    this.dateReturn.dateDebut = this.date.dateDebut
    this.dateReturn.dateFin = this.date.dateFin
    console.log(this.dateReturn)
    this.dateService.putDataToStream(this.dateReturn)
    this.router.navigate(['/chambreDisponible']);
  }

  GetAll(){
    this.hotelService.getAllHotel().subscribe((resultData:any)=>
    {
      this.hotels=resultData;
      console.log(this.hotels);
    });

  }
}
