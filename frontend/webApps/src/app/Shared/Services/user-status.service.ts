import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserStatusService {
  isLoggedIn = false;
  isAdmin = false;

  constructor(private router: Router) { }

  logIn(){
    this.isLoggedIn = true;
  }

  logOut(){
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.router.navigate(['/login'])
  }

  logInAsAdmin(){
    this.isLoggedIn = true;
    this.isAdmin = true;
  }

}
