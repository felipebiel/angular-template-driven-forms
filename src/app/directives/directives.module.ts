import { NgModule } from '@angular/core';
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialValidatorDirective } from './credential-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';
import { PasswordConfirmationValidationDirective } from './password-confirmation-validation.directive';

@NgModule({
  declarations: [
    EmailPatternValidatorDirective,
    CredentialValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordConfirmationValidationDirective,
  ],
  exports: [
    EmailPatternValidatorDirective,
    CredentialValidatorDirective,
    PasswordStrengthValidatorDirective,
    PasswordConfirmationValidationDirective,
  ],
})
export class DirectivesModule {}
