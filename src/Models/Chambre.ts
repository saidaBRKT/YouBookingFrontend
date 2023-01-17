import {Address} from "./Address";
import {Hotel} from "./Hotel";

export class Chambre {
  public id?:number;
  public prix:number;
  public nbrLits:number;
  public StatusChambre:string;
  public hotel:Hotel;


  constructor() {
    this.prix=0;
    this.nbrLits=0;
    this.StatusChambre="";
    this.hotel=new Hotel();
  }
}
