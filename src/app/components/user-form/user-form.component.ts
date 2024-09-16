import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { convertDateObjToPTBrDate, convertPtBrDateToDateObj } from '../../utils/convert-dates';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnChanges, OnInit {
  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  passwordStrengthValue: number = 0;
  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;

  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];
  filteredGenresList: GenresListResponse = [];

  ngOnInit(): void {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    const USER_CHANGED = changes['userSelected'];
    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatepicker(this.userSelected.birthDate);
      this.filteredGenresList = this.genresList;
    }
  }

  onPasswordChange(password: string) {
    this.passwordStrengthValue = getPasswordStrengthValue(password);
  }

  prepareProgressColorClass(): {
    [key: string]: boolean;
  } {
    return {
      'weak-password': this.passwordStrengthValue === 0 || this.passwordStrengthValue === 30,
      'medium-password': this.passwordStrengthValue === 60,
      'strong-password': this.passwordStrengthValue === 100,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onDateChange($event: MatDatepickerInputEvent<any, any>) {
    if (!$event.value) return;

    this.userSelected.birthDate = convertDateObjToPTBrDate($event.value);
  }

  displayFn(genreId: number): string {
    const genreFound = this.genresList.find(genre => genre.id === genreId);
    return genreFound ? genreFound.description : '';
  }

  filterGenres(search: string) {
    if (typeof search === 'number') return;
    const searchTerm = search.toLocaleLowerCase();

    this.filteredGenresList = this.genresList.filter(genre =>
      genre.description.toLocaleLowerCase().includes(searchTerm)
    );
  }

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate);
  }
}
