import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../Shared/Services/auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = '';
  password = '';
  displayErrorLoginMessage = false;
  displayLoader = false;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) {
  }

  ngOnInit() {
    this.logAdmin();
  }

  async onLogin() {
    this.displayErrorLoginMessage = false;
    this.displayLoader = true;
    await this.authService.logIn(this.name, this.password);
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/home']);
    } else {
      this.displayLoader = false;
      this.displayErrorLoginMessage = true;
    }
  }

  switchToSignUp() {
    this.router.navigate(['signup']);
  }

  logAdmin() {
    this.authService.logInAsAdmin();
  }
}
