
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';
import { EditCompaniesComponent } from './companies-list/edit-companies/edit-companies.component';
import { NewCompaniesComponent } from './companies-list/new-companies/new-companies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard] },
  { path: 'user-list',component:UserListComponent,canActivate:[AuthGuard]},
  { path: 'edit-user/:id',component:EditUserComponent,canActivate:[AuthGuard]},
  { path: 'edit-companies/:id',component:EditCompaniesComponent,canActivate:[AuthGuard]},
  { path: 'new-companies',component:NewCompaniesComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
