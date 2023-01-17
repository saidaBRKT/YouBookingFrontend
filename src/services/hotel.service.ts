import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, Subject, tap} from "rxjs";
import {Hotel} from "../Models/Hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private _refreshrequired=new Subject<void>();
  get RequiredRefresh(){
    return this._refreshrequired;
  }
  constructor(private http:HttpClient,private router:Router) { }

  getAllHotel():Observable<any>{
    return this.http.get("http://localhost:8081/api/v1/hotels/AllHotels")
  }

  addHotel(hotel:Hotel):Observable<any>{
    return this.http.post<any>("http://localhost:8081/api/v1/hotels/add_hotel",hotel).pipe(
      tap(()=>{
        this.RequiredRefresh.next();
      })
    );
  }

  updateHotel(hotel:Hotel):Observable<any>{
    return this.http.put("http://localhost:8081/api/v1/hotels/update_hotel",hotel).pipe(
      tap(()=>{
        this.RequiredRefresh.next();
      })
    );
  }

   desactiveHotel(id:number):Observable<any>{
     return this.http.put("http://localhost:8081/api/v1/hotels/desactive/id/"+id,null);
   }

   activeHotel(id:number):Observable<any>{
     return this.http.put("http://localhost:8081/api/v1/hotels/active/id/"+id,null)
   }
   getOneHotel(id:number):Observable<any>{
    return this.http.get("http://localhost:8081/api/v1/hotels/OneHotel/id/"+id);
   }

}
