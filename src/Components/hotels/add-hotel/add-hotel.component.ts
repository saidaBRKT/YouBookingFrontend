import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Hotel} from "../../../Models/Hotel";
import {HotelService} from "../../../services/hotel.service";
import * as alertify from 'alertifyjs'
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit{
  hotel:Hotel;
  respdata:any;
  EditData:any;

  constructor(private hotelService:HotelService,public dialogref:MatDialogRef<AddHotelComponent>) {
    this.hotel=new Hotel();
  }


  ngOnInit(): void {
  }

  ReactiveForm=new FormGroup({
    Nom:new FormControl("",Validators.required),
    Telephone:new FormControl("",Validators.required),
    Status:new FormControl("",Validators.required),
    Pays:new FormControl("",Validators.required),
    Ville:new FormControl("",Validators.required),
    CodePostal:new FormControl("",Validators.required)
  });

  saveHotel(){
    if(this.ReactiveForm.valid){
      this.hotelService.addHotel(this.hotel).subscribe(result=>{
        this.respdata=result;
        if(this.respdata.status="success"){
          alertify.success("saved successfuly") ;
          this.dialogref.close();
        }

        console.log(this.respdata);
        console.log(this.respdata.status);
      });
    }else {
      alertify.error("Please enter valid data") ;
    }
  }
}
