import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnChanges {
  @Input() genresList: GenresListResponse = [];
  @Input() statesList: StatesListResponse = [];
  @Input() userSelected: IUser = {} as IUser;

  passwordStrengthValue: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    const USER_CHANGED = changes['userSelected'];
    if (USER_CHANGED) this.onPasswordChange(this.userSelected.password);
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
}
