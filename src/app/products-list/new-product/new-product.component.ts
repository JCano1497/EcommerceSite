import { NgForm } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  result: string;

  product: product = {
    _id: '',
    name: '',
    price: 0,
    quantity: 0,
    company: '',
    image: '',
  }

  product2: product;

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
  }

  Add(): void{
    this.product._id = undefined;
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe((data => this.result = data.msg))
  }
}
