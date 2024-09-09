import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { UsersListResponse } from './types/users-list-reponse';
import { GenresListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: UsersListResponse = [];
  genresList: GenresListResponse = [];
  statesList: StatesListResponse = [];
  constructor(
    private readonly _usersServices: UsersService,
    private readonly _genresService: GenresService,
    private readonly _BrazilianStatesService: BrazilianStatesService,
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }
  private getStates() {
    this._BrazilianStatesService.getStates().subscribe((statesListResponse) => {
      console.log(statesListResponse);
      this.statesList = statesListResponse;
    });
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
