import {Component, OnInit} from '@angular/core';
import {HotelService} from "../../../services/hotel.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detaille-hotel',
  templateUrl: './detaille-hotel.component.html',
  styleUrls: ['./detaille-hotel.component.css']
})
export class DetailleHotelComponent implements OnInit{
  idHotel!:number;
  data:any;
  constructor(private hotelService:HotelService,private routeActive:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.idHotel=this.routeActive.snapshot.params['id'];
    this.hotelService.getOneHotel(this.idHotel).subscribe((result:any)=>{
      this.data=result;
      console.log(this.data);
    })
  }

  getHotel(){

  }

}
