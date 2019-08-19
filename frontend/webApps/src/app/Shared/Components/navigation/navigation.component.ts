import { Component, OnInit } from '@angular/core';
import { UserStatusService } from '../../Services/user-status.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  constructor(private userStatusService: UserStatusService) { }

  ngOnInit() {
  }

  logOut(){
    this.userStatusService.logOut();
  }

}
