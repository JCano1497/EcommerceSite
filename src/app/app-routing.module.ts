import { UserCartComponent } from './user-cart/user-cart.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NewProductComponent } from './products-list/new-product/new-product.component';
import { EditProductComponent } from './products-list/edit-product/edit-product.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'products-list', component: ProductsListComponent, canActivate: [AuthGuard] },
  { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard]},
  { path: 'edit-user/:id', component: EditUserComponent, canActivate: [AuthGuard]},
  { path: 'edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard]},
  { path: 'new-product', component: NewProductComponent, canActivate: [AuthGuard]},
  { path: 'userProducts', component: UserProductsComponent, canActivate: [AuthGuard]},
  { path: 'userCart', component: UserCartComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
