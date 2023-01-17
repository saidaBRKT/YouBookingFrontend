import {Component, OnInit} from '@angular/core';
import {DateService} from "../../../services/date.service";
import {ChambreService} from "../../../services/chambre.service";
import {DateReservation} from "../../../Models/DateReservation";
import alertify from "alertifyjs";
import {Reservation} from "../../../Models/Reservation";
import {Chambre} from "../../../Models/Chambre";
import {Client} from "../../../Models/Client";

@Component({
  selector: 'app-chamber-disponible',
  templateUrl: './chamber-disponible.component.html',
  styleUrls: ['./chamber-disponible.component.css']
})
export class ChamberDisponibleComponent implements  OnInit{
 date!:DateReservation;
 Chambres:any;
 reservation:Reservation;
 chambre:Chambre;
 client:Client;
  constructor(private dateService:DateService,private chambreService:ChambreService) {
    this.reservation=new Reservation();
    this.chambre=new Chambre();
    this.client=new Client();
  }
  ngOnInit(): void {
    this.dateService.getData().subscribe((res:any)=>{
      this.date = res
    })
    console.log(this.date)
    this.getAllChambre();

  }

  getAllChambre(){
    this.chambreService.getAllChambreNoteReserved(this.date).subscribe((result)=>{
      this.Chambres=result;
      console.log(this.Chambres)
    })
  }

  reserver(id:any){
    this.chambre.id=id
    this.client.id=1
    this.reservation.StatusReservation="Accepted"
    this.reservation.dateFin=this.date.dateFin
    this.reservation.dateDebut=this.date.dateDebut
    this.reservation.chambre=this.chambre
    this.reservation.client=this.client
    console.log(this.reservation)
    alertify.confirm("Reserver ","Do You want to reserve this Room",()=>{
      this.chambreService.Reserver(this.reservation).subscribe((result)=>{
        console.log(result);
        alertify.success("saved successfuly") ;
      })
    },function(){

    })
  }

//   this.hotelService.getOneHotel(id).subscribe(result=>{
//   console.log(result.status);
//   if(result.status=="Active"){
//   alertify.confirm("Desactive Hotel","Do You want to desactive this Hotel",()=>{
//   this.hotelService.desactiveHotel(id).subscribe(result=>{
//   this.GetAll();
//   alertify.success("saved successfuly") ;
// });
// },function(){
//
// })
// }






}
