import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from '../../types/users-list-reponse';

@Component({
  selector: 'app-users-card-list',
  templateUrl: './users-card-list.component.html',
  styleUrl: './users-card-list.component.scss',
})
export class UsersCardListComponent {
  @Input() usersList: UsersListResponse = [];

  @Output() userSelected = new EventEmitter<number>();

  onUsersSelected(userIndex: number) {
    this.userSelected.emit(userIndex);
  }
}
