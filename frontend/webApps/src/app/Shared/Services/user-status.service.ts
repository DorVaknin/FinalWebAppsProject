import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {log} from 'util';

const HTTP_OK = 200;
const HTTP_UNAUTHORIZED = 401;

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {
  isLoggedIn = false;
  isAdmin = false;

  constructor(private router: Router, private http: HttpClient) {
  }

  logIn(userId, password) {
    this.http.post('http://127.0.0.1:8080/login', {
      ID: userId,
      Password: password
    }).subscribe(response => {
        console.log(response);
      },
      error => log(error));
    this.isLoggedIn = true;
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
