import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: any = [];
  constructor(private readonly _usersServices: UsersService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._usersServices.getUsers().subscribe((usersListResponse) => {
      console.log(usersListResponse);
      this.usersList = usersListResponse;
    });
  }
}
