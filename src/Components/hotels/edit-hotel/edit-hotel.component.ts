import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import * as alertify from 'alertifyjs'
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Hotel} from "../../../Models/Hotel";
import {HotelService} from "../../../services/hotel.service";

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit{

  hotel:Hotel;
  respdata:any;
  EditData:any;

  constructor(private hotelService:HotelService,public dialogref:MatDialogRef<EditHotelComponent>,@Inject(MAT_DIALOG_DATA) public data:any) {
    this.hotel=new Hotel();
  }

  ngOnInit(): void {
    if(this.data.hotelid!=null && this.data.hotelid!=''){
      this.LoadEditData(this.data.hotelid);
    }
  }


  LoadEditData(id:any){
    this.hotelService.getOneHotel(id).subscribe(result=>{
      this.EditData=result;
      this.ReactiveForm.setValue({
        Id:this.EditData.id,
        Nom:this.EditData.nom,
        Telephone:this.EditData.tel,
        Status: this.EditData.status,
        AddressID:this.EditData.adresse.id,
        Pays: this.EditData.adresse.pays,
        Ville: this.EditData.adresse.ville,
        CodePostal: this.EditData.adresse.codePostal,
      })

    });
  }

  ReactiveForm=new FormGroup({
    Id:new FormControl("",Validators.required),
    Nom:new FormControl("",Validators.required),
    Telephone:new FormControl("",Validators.required),
    Status:new FormControl("",Validators.required),
    AddressID:new FormControl("",Validators.required),
    Pays:new FormControl("",Validators.required),
    Ville:new FormControl("",Validators.required),
    CodePostal:new FormControl("",Validators.required)
  });

  editHotel(){
    if(this.ReactiveForm.valid){
      console.log("======== hotel");
      console.log(this.hotel);
      console.log("========");
      this.hotelService.updateHotel(this.hotel).subscribe(result=>{
        this.respdata=result;
        if(this.respdata.status="success"){
          alertify.success("updated successfuly") ;
          this.dialogref.close();
        }
      });
    }else {
      alertify.error("Please enter valid data") ;
    }
  }
}
