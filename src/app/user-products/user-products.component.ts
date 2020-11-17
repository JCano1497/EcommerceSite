import { ProductService } from './../services/product.service';
import { product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {

  products: product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
      console.log(result);
      console.log(this.products[0].company );
    })
  }

}
