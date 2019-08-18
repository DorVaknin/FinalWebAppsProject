import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  passwordConfirm = '';


  constructor(private authService: AuthService) { }

  ngOnInit() { 
  }

  onSignUp(){
   this.authService.registerNewUser(this.name, this.email, this.password);
  }

}
