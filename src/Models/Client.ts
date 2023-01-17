import {Role} from "./Role";
import {Address} from "./Address";

export class Client {
  public id?:number;
  public nom: string;
  public email: string;
  public password: string;
  public tel:string;
  public role: Role;
  public address: Address;

  constructor() {
   this.nom="";
   this.email="";
   this.password="";
   this.tel="";
   this.role=new Role();
   this.address=new Address();
  }
}
