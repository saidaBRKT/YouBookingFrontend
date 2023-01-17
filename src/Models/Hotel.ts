import {Address} from "./Address";

export class Hotel {
  public id?:number;
  public nom:string;
  public tel: string;
  public adresse:Address;
  public status:string;


  constructor() {
    this.nom = "";
    this.tel = "";
    this.adresse = new Address();
    this.status="";
  }
}
