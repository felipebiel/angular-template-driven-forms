import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UsersPlaceholderService } from '../services/users-placeholder.service';

@Directive({
  selector: '[appCredentialValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CredentialValidatorDirective),
      multi: true,
    },
  ],
})
export class CredentialValidatorDirective implements AsyncValidator {
  @Input({
    alias: 'appCredentialValidator',
  })
  propToCheck: 'username' | 'email' = 'username';
  constructor(private readonly _usersPlaceholderService: UsersPlaceholderService) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._usersPlaceholderService.getusersPlaceholder().pipe(
      map(usersListResponse => {
        const hasUser = usersListResponse.find(
          user => user[this.propToCheck].toLowerCase() === control.value.trim().toLowerCase()
        );

        const validateKey = this.propToCheck === 'username' ? 'invalidUsername' : 'invalidEmail';

        return hasUser ? { [validateKey]: true } : null;
      })
    );
  }
}
