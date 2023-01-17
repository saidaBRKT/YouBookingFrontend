import {Component, OnInit} from '@angular/core';
import {HotelService} from "../../../services/hotel.service";
import {ChambreService} from "../../../services/chambre.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.css']
})
export class CardStatsComponent implements OnInit{
  nbrHotel:any;
  nbrChambre:any;
  nbrChambreIndispo:any;
  nbrUser:any;
  constructor(private hotelService:HotelService,private chambreService:ChambreService,private userService:UserService) {
  }
  ngOnInit(): void {
    this.GetAllHotels();
    this.GetAllChambresDispo();
    this.GetAllChambresIndispo()
    this.GetAllUsers();
  }

  GetAllHotels(){
    this.hotelService.getAllHotel().subscribe((resultData:any)=>
    {
      this.nbrHotel=resultData.length;
    });
  }
  GetAllChambresDispo(){
    this.chambreService.getAllChambredispo().subscribe((result:any)=>{
      this.nbrChambre=result.length;
    })
    }

  GetAllChambresIndispo(){
    this.chambreService.getAllChambreIndispo().subscribe((result:any)=>{
      this.nbrChambreIndispo=result.length;
    })
  }

  GetAllUsers(){
    this.userService.getAllUser().subscribe((result:any)=>{
      this.nbrUser=result.length;
    })
  }


}
