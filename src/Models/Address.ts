export class Address {
  public id?: number;
  public ville:String;
  public pays:String
  public codePostal:String;
  public address:String;

  constructor(){
    this.ville="";
    this.pays="";
    this.codePostal="";
    this.address=""
  }
}
