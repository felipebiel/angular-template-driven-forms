import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from '../angular-material.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { UsersCardListComponent } from './users-card-list/users-card-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserBeforeAndAfterDialogComponent } from './user-before-and-after-dialog/user-before-and-after-dialog.component';
import { UserListLoadingComponent } from './user-list-loading/user-list-loading.component';

@NgModule({
  declarations: [
    UsersCardListComponent,
    UserFormComponent,
    UserBeforeAndAfterDialogComponent,
    UserListLoadingComponent,
  ],
  imports: [FormsModule, BrowserModule, AngularMaterialModule, DirectivesModule, PipesModule],
  exports: [UsersCardListComponent, UserFormComponent, UserBeforeAndAfterDialogComponent, UserListLoadingComponent],
})
export class ComponentsModule {}
