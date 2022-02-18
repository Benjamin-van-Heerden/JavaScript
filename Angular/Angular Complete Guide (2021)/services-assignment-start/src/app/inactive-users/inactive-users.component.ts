import { Component, Input } from '@angular/core';
import { UserStatusService } from '../userStatus.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private userStatusService: UserStatusService) {}

  onSetToActive(id: number) {
    this.userStatusService.setActive(id)
  }
}
