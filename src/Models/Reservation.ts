import {Address} from "./Address";
import {Hotel} from "./Hotel";
import {Client} from "./Client";
import {Chambre} from "./Chambre";

export class Reservation {
  public id?:number;
  public client:Client;
  public chambre:Chambre;
  public StatusReservation:string;
  public dateDebut:string
  public dateFin:string



  constructor() {
    this.client=new Client();
    this.chambre=new Chambre();
    this.StatusReservation="";
    this.dateDebut="";
    this.dateFin="";
  }

}
