import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appEmailPatternValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailPatternValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailPatternValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(control.value);

    return isValid ? null : { invalidEmailPattern: true };
  }
}
