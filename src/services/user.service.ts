import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../Models/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private router:Router) { }

  getAllUser():Observable<any>{
    return this.http.get("http://localhost:8081/api/v1/users/AllUsers");
  }

  register(user:User):Observable<any>{
    return this.http.post<any>(`http://localhost:8081/api/v1/users/add_user`,user)
  }

  login(signin:any) {
    return this.http.post(`http://localhost:8081/api/v1/users/auth/authenticate`,signin)
  }

  Token(){
    return  localStorage.getItem("userData")
  }

  getUser(token:string):any{
    return JSON.parse(atob(token.split('.')[1]))
  }
  authority !:string
  getAuthority():any{
    const token = this.Token()
    console.log(token)
    if(token)
    this.authority = this.getUser(token).authorities[0].authority
    return this.authority
  }



}
