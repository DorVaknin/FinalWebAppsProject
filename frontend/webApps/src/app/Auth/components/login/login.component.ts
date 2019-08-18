import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = '';
  email = '';
  constructor(private router: Router, private http: HttpClient ) { }

  ngOnInit() {
  }

  onLogin(){
    // this.http.post()
    this.router.navigate(['/home-page']);
  }

  switchToSignUp(){
    this.router.navigate(['signup']);
  }

}
