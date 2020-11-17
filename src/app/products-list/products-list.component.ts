import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
      console.log(result);
      console.log(this.products[0].company );
    })
  }
  removeProduct(Product, index) {
    if(window.confirm('Are you sure?')) {
        this.productService.deleteProductById(Product._id).subscribe((data) => {
          this.products.splice(index, 1);
        })
      }
    }

}


