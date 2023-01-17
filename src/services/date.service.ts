import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  private _dataSream = new BehaviorSubject("")

  getData():any{
    return this._dataSream.asObservable();
  }

  putDataToStream(data:any){
    this._dataSream.next(data)
  }

}
