import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { UserStatusService } from './userStatus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private userStatusService: UserStatusService, public counterService: CounterService) {}

  ngOnInit() {
    this.activeUsers = this.userStatusService.activeUsers;
    this.inactiveUsers = this.userStatusService.inactiveUsers;
  }
}
