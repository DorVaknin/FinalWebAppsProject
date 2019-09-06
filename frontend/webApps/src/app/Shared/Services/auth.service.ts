import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const HTTP_OK = 200;
const HTTP_UNAUTHORIZED = 401;
const SERVER_URL = 'http://127.0.0.1:8080'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }
  isLoggedIn = false;
  isAdmin = false;

  async registerNewUser(userName, firstName, lastname, password){
    const body = {
      ID: userName,
      Password: password,
      Name: firstName,
      Lastname: lastname
    };
    await this.http.post(`${SERVER_URL}/register`,body, { observe: 'response' }).toPromise().then(response => {
      if (response.status === HTTP_OK) {
        return true;
      }
      console.log(response);
      return false;;
    },
      error => {
        console.log(error);
        return false;
      });
}

  async logIn(userId, password) {
    const body = {
      ID: userId,
      Password: password
    };
    await this.http.post(`${SERVER_URL}/login`,body,{ observe: 'response' }).toPromise().then(response => {
        if (response.status === HTTP_OK) {
          this.isLoggedIn = true;
        }
      },
        error => {
          console.log(error);
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
