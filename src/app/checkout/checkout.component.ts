import { Item } from './../models/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  Items: Item[] = [];
  total = 0;
  constructor() { }

  ngOnInit(): void {
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
    this.total += item.product.price * item.quantity;
  }
}
}
