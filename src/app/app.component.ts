import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: any = [];
  genresList: any = [];
  constructor(
    private readonly _usersServices: UsersService,
    private readonly _genresService: GenresService,
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
  }

  private getGenres() {
    this._genresService.getGenres().subscribe((genresListResponse) => {
      console.log(genresListResponse);
      this.genresList = genresListResponse;
    });
  }

  private getUsers() {
    this._usersServices.getUsers().subscribe((usersListResponse) => {
      console.log(usersListResponse);
      this.usersList = usersListResponse;
    });
  }
}
