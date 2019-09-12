import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {SERVER, HTTP_STATUS} from '../enums';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) { }
  isLoggedIn = false;
  isAdmin = false;

  async registerNewUser(userName, firstName, lastname, password){
    const body = {
      ID: userName,
      Password: password,
      Name: firstName,
      Lastname: lastname
    };
    await this.http.post(`${SERVER.URL}/register`,body, { observe: 'response' }).toPromise().then(response => {
      if (response.status === HTTP_STATUS.OK) {
        const cookie = this.cookieService.get('authToken');
        this.cookieService.set('authToken', cookie);
        return true;
      }
      console.log(response);
      return false;
    },
      error => {
        console.error(error);
        return false;
      });
}

  async logIn(userId, password) {
    const body = {
      ID: userId,
      Password: password
    };
    await this.http.post(`${SERVER.URL}/login`,body,{ observe: 'response', withCredentials: true }).toPromise().then(response => {
      console.log(response);
        if (response.status === HTTP_STATUS.OK) {
          const cookie = this.cookieService.get('authToken');
          this.cookieService.set('authToken', cookie);
          this.isLoggedIn = true;
          if ((<any>response.body).isAdmin) {
            this.isAdmin = true;
          }
        }
      },
        error => {
          console.error(error);
        });
  }

  logOut() {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.router.navigate(['/login']);
  }

  logInAsAdmin() {
    this.isLoggedIn = true;
    this.isAdmin = true;
  }
}
