import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GenresService } from './services/genres.service';
import { BrazilianStatesService } from './services/brazilian-states.service';
import { UsersListResponse } from './types/users-list-reponse';
import { GenresListResponse } from './types/genres-list-response';
import { StatesListResponse } from './types/states-list-response';
import { IUser } from './interfaces/user/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserBeforeAndAfterDialogComponent } from './components/user-before-and-after-dialog/user-before-and-after-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  userSeletedCopy: IUser = {} as IUser;
  userSeletedIndex: number | undefined;

  usersList: UsersListResponse = [];
  genresList: GenresListResponse = [];
  statesList: StatesListResponse = [];

  constructor(
    private readonly _usersServices: UsersService,
    private readonly _genresService: GenresService,
    private readonly _brazilianStatesService: BrazilianStatesService,
    private readonly _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }

  userSelected(userIndex: number) {
    const userFound = this.usersList[userIndex];
    if (userFound) {
      this.userSeletedIndex = userIndex;
      this.userSeletedCopy = structuredClone(userFound);
    }
  }

  onFormSubmit() {
    if (this.userSeletedIndex === undefined) return;

    const originalUser = this.usersList[this.userSeletedIndex];
    this.openBewforeAndAfterDialog(originalUser, this.userSeletedCopy);
  }

  openBewforeAndAfterDialog(originalUser: IUser, updatedUser: IUser) {
    this._dialog.open(UserBeforeAndAfterDialogComponent, {
      data: {
        originalUser,
        updatedUser,
      },
      minWidth: '70%',
    });
  }

  private getStates() {
    this._brazilianStatesService.getStates().subscribe(statesListResponse => {
      this.statesList = statesListResponse;
    });
  }

  private getGenres() {
    this._genresService.getGenres().subscribe(genresListResponse => {
      this.genresList = genresListResponse;
    });
  }

  private getUsers() {
    this._usersServices.getUsers().subscribe(usersListResponse => {
      this.usersList = usersListResponse;
    });
  }
}
