import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Shared/Services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username = ''
  firstName = ''
  lastName = ''
  email = '';
  password = '';
  passwordConfirm = '';


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp() {
    this.authService.registerNewUser(this.username, this.firstName, this.lastName, this.password);
  }

}
