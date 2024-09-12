import { NgModule } from '@angular/core';
import { EmailPatternValidatorDirective } from './email-pattern-validator.directive';
import { CredentialValidatorDirective } from './credential-validator.directive';

@NgModule({
  declarations: [EmailPatternValidatorDirective, CredentialValidatorDirective],
  exports: [EmailPatternValidatorDirective, CredentialValidatorDirective],
})
export class DirectivesModule {}
