import { Item } from './../models/item.model';
import { Cart } from './../models/cart.model';
import { CartService } from './../services/cart.services';
import { AuthService } from './../auth/auth.service';
import { product } from './../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  constructor(
    private Route: ActivatedRoute,
    private Productservice: ProductService,
    private cartservice: CartService,
    private authService: AuthService
    ) { }

  Items: Item[] = [];
  id: string;
  Item: Item;
  storedproduct: product[] = [];
  productq: product;
  result: any;
  addedproduct: product;
  dbCart: Cart;
  User = '';
  productadded: product;
  total = 0;
  cartInfo: any;

    ngOnInit() {
      this.checkDB();
      this.Route.params.subscribe(params => {
        this.id = params.id;
        console.log(this.id);
        if (this.id) {
          this.Productservice.getProductById(this.id).subscribe(result =>{
          this.Item = {
            product: result,
            quantity: 1
          }
          console.log(this.Item);
          if (localStorage.getItem('cart') == null) {
            let cart: any = [];
            cart.push(JSON.stringify(this.Item));
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            let cart: any = JSON.parse(localStorage.getItem('cart'));
            let index = -1;
            for (var i = 0; i < cart.length; i++) {
              let item: Item = JSON.parse(cart[i]);
              if (item.product._id == this.id) {
                index = i;
                break;
              }
            }
            if (index == -1) {
              cart.push(JSON.stringify(this.Item));
              localStorage.setItem('cart', JSON.stringify(cart));
            } else {
              let item: Item = JSON.parse(cart[index]);
              item.quantity += 1;
              cart[index] = JSON.stringify(item);
              localStorage.setItem("cart", JSON.stringify(cart));
            }
          }
          this.loadCart();
        });
      }
      else{
        this.loadCart();
      }
    });
  }

remove(id: string): void{
  let cart: any = JSON.parse(localStorage.getItem('cart'));
  let index = -1;
  for (var i = 0; i < cart.length; i++) {
    let item: Item = JSON.parse(cart[i]);
    if (item.product._id == id) {
      cart.splice(i, 1);
      break;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  this.loadCart();
}

loadCart(): void {
  this.total = 0.0;
  this.Items = [];
  let cart = JSON.parse(localStorage.getItem('cart'));
  for (var i = 0; i < cart.length; i++) {
    let item = JSON.parse(cart[i]);
    this.Items.push({
      product: item.product,
      quantity: item.quantity
    });
    this.productq = {
      _id: undefined,
      name: item.product.name,
      price: item.product.price,
      company: item.product.company,
      quantity: item.quantity,
      image: item.product.image
    };
    this.storedproduct.push(this.productq);
    this.total += item.product.price * item.quantity;
  }
  this.dbCart = {
    Username: this.authService.getUsername(),
    product: this.storedproduct,
  }
  this.cartservice.addItems(this.dbCart).subscribe((data => this.result = data.msg));

}

checkOut() {
  let cart: any = JSON.parse(localStorage.getItem('cart'));
  this.cartInfo = cart;
  console.log(cart);
}

checkDB() {
  this.User=this.authService.getUsername();
  if(this.User){
    this.cartservice.getCartByUsername(this.authService.getUsername()).subscribe(result =>{
      console.log(result);
  });
  }
}

}
