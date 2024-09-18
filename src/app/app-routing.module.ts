import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { UsersCardListComponent } from './components/users-card-list/users-card-list.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '/',
        component: UsersCardListComponent,
      },
    ],
  },
  { path: '**', component: BaseLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
