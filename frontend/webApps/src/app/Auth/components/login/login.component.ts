import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserStatusService} from '../../../Shared/Services/user-status.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = '';
  password = '';

  constructor(private router: Router, private http: HttpClient, private userStatusService: UserStatusService) {
  }

  ngOnInit() {
  }

  onLogin() {
    // this.http.post()
    this.userStatusService.logIn(this.name, this.password);
    this.router.navigate(['/home']);
  }

  switchToSignUp() {
    this.router.navigate(['signup']);
  }

  logAdmin() {
    this.userStatusService.logInAsAdmin();
  }
}
