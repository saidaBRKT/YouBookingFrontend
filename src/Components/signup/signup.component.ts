import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Role} from "../../Models/Role";
import {User} from "../../Models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user:User;

  constructor(private userService:UserService,public router:Router) {
    this.user=new User();
  }

  register(){
    this.userService.register(this.user).subscribe((resultData:any)=>
      {
        console.log(resultData);
        this.router.navigate(['/Signin'])

      });
  }
  save(){
    this.register();
  }


}
