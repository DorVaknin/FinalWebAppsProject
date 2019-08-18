import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  validateUser(userName, password){
    //this.http.post()
  }

  registerNewUser(userName, email, password){
    console.log(userName, email, password);
    
    //this.http.post()
  }
}
