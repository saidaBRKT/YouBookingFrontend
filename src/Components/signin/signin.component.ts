import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Signin} from "../../Models/Signin";
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signin: Signin;

  constructor(private userService: UserService, private router: Router) {
    this.signin = new Signin();
  }

  signIn() {
    this.userService.login(this.signin).subscribe((resultData: any) => {
      localStorage.setItem("userData", resultData.data);
      console.log(resultData.data);
      console.log('===========');
      console.log(this.userService.Token());
      console.log(this.userService.getAuthority())

      if((this.userService.getAuthority()=="Admin")){
        this.router.navigate(["dashboard"])
      }else{
        this.router.navigate(['']);
      }

    });
  }

  save() {
    this.signIn();
  }

}
