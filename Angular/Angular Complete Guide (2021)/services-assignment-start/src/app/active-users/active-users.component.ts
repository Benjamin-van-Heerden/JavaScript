import { Component, Input } from '@angular/core';
import { UserStatusService } from '../userStatus.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private userStatusService: UserStatusService) {}

  onSetToInactive(id: number) {
    this.userStatusService.setInactive(id);
  }
}
