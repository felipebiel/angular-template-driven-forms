import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './base-layout.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [BaseLayoutComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [BaseLayoutComponent],
})
export class BaseLayoutModule {}
