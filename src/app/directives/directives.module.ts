import { NgModule } from '@angular/core';
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialValidatorDirective } from './credential-validator.directive';
import { PasswordStrengthValidatorDirective } from './password-strength-validator.directive';

@NgModule({
  declarations: [EmailPatternValidatorDirective, CredentialValidatorDirective, PasswordStrengthValidatorDirective],
  exports: [EmailPatternValidatorDirective, CredentialValidatorDirective, PasswordStrengthValidatorDirective],
})
export class DirectivesModule {}
