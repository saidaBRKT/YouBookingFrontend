import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, Subject, tap} from "rxjs";
import {Hotel} from "../Models/Hotel";
import {Chambre} from "../Models/Chambre";
import {DateReservation} from "../Models/DateReservation";

@Injectable({
  providedIn: 'root'
})
export class ChambreService {


  constructor(private http:HttpClient,private router:Router) { }

  getAllChambredispo():Observable<any>{
    return this.http.get("http://localhost:8081/api/v1/chambres/AllChambreDisponible")
  }

  getAllChambreIndispo():Observable<any>{
    return this.http.get("http://localhost:8081/api/v1/chambres/AllChambreIndisponible");
  }

  getAllChambreNoteReserved(date:DateReservation):Observable<any>{
    return this.http.post("http://localhost:8081/api/v1/Reservations/AllChambresNotReserved",date);
  }

  Reserver(reservation:any){
    return this.http.post("http://localhost:8081/api/v1/Reservations/addReservation",reservation);
  }

  addChambre(chambre:Chambre):Observable<any>{
    return this.http.post<any>("http://localhost:8081/api/v1/hotels/add_hotel",chambre);
  }

  updateChambre(chambre:Chambre):Observable<any>{
    return this.http.put("http://localhost:8081/api/v1/hotels/update_hotel",chambre);
  }


   getOneChambre(id:number):Observable<any>{
    return this.http.get("http://localhost:8081/api/v1/hotels/OneHotel/id/"+id);
   }

}
