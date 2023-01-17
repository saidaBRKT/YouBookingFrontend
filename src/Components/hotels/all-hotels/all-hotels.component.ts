import {Component, OnInit, ViewChild} from '@angular/core';
import {HotelService} from "../../../services/hotel.service";
import {MatDialog} from "@angular/material/dialog";
import {AddHotelComponent} from "../add-hotel/add-hotel.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import alertify from "alertifyjs";
import {EditHotelComponent} from "../edit-hotel/edit-hotel.component";



@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.css']
})
export class AllHotelsComponent implements OnInit{
  displayedColumns: string[] = ['nom', 'tel', 'adresse', 'status','action'];
  dataSource:any;
  data:any

  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private hotelService:HotelService,private dialog:MatDialog) {
  }

  ngOnInit(): void {
        this.GetAll();
        this.hotelService.RequiredRefresh.subscribe(r=>{
          this.getrow(this.GetAll())
        });
    }
  FunctionEditStatus(id:any){
    this.hotelService.getOneHotel(id).subscribe(result=>{
      console.log(result.status);
      if(result.status=="Active"){
        alertify.confirm("Desactive Hotel","Do You want to desactive this Hotel",()=>{
          this.hotelService.desactiveHotel(id).subscribe(result=>{
            this.GetAll();
            alertify.success("saved successfuly") ;
          });
        },function(){

        })
      }else{
        alertify.confirm("Active Hotel","Do You want to active this Hotel",()=>{
          this.hotelService.activeHotel(id).subscribe(result=>{
            this.GetAll();
            alertify.success("saved successfuly") ;
          });
        },function(){

        })
      }
    });



  }
  GetAll(){
    this.hotelService.getAllHotel().subscribe((resultData:any)=>
    {
      this.data=resultData;
      console.log(this.data);
      this.dataSource=new MatTableDataSource(this.data)
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });

  }
  filterchange(event:Event){
    const filvalue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filvalue;
  }

  getrow(row:any){
    console.log(row)
  }

  FunctionEdit(id:any){
    this.OpenDialogToEdit('1000ms','600ms',id)
  }

  OpenDialog(enteranimation: any, exitanimation: any,id:any) {

    this.dialog.open(AddHotelComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        hotelid:id
      }
    })
  }

  OpenDialogToEdit(enteranimation: any, exitanimation: any,id:any) {

    this.dialog.open(EditHotelComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        hotelid:id
      }
    })
  }















  // hotels: any;
  //
  // constructor(private hotelService:HotelService) {
  // }
  //
  // ngOnInit(): void {
  //   this.hotelService.getAllHotel().subscribe((resultData:any)=>
  //   {
  //     this.hotels=resultData;
  //     console.log(resultData);
  //   });
  // }

}
