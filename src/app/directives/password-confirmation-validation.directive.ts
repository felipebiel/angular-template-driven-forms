import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordConfirmationValidationDirective, multi: true }],
})
export class PasswordConfirmationValidationDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value.passwordConfirmation) return null;

    const passwordConfirmationControl = control.get('passwordConfirmation');
    if (control.value.password !== control.value.passwordConfirmation) {
      const errorReturn = { invalidPasswordConfirmation: true };
      passwordConfirmationControl?.setErrors(errorReturn);
      return errorReturn;
    }

    return null;
  }
}
