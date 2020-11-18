import { NewProductComponent } from './products-list/new-product/new-product.component';
import { EditProductComponent } from './products-list/edit-product/edit-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { ServicesComponent } from './services/services.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ServicesComponent,
    UserListComponent,
    EditUserComponent,
    ProductsListComponent,
    EditProductComponent,
    NewProductComponent,
    UserProductsComponent,
    UserCartComponent,
    CheckoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
