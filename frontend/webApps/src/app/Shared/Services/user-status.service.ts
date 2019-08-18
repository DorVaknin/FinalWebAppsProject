import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {
  isLoggedIn = false;

  constructor() { }

  setLoginState(isLoggedIn){
    this.isLoggedIn = isLoggedIn;
  }

}
