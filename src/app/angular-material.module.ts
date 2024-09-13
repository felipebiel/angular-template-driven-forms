import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

import { provideNativeDateAdapter } from '@angular/material/core';

@NgModule({
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  providers: [provideNativeDateAdapter()],
})
export class AngularMaterialModule {}
