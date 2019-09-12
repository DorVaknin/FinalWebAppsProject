import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../Shared/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username = '';
  firstName = '';
  lastName = '';
  password = '';
  passwordConfirm = '';
  displayLodaer = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onSignUp() {
    this.displayLodaer = true;
    await this.authService.registerNewUser(this.username, this.firstName, this.lastName, this.password);
    await this.authService.logIn(this.username, this.password);
    this.router.navigate(['/home']);

  }

}
