import { ProductService } from './../../services/product.service';
import { product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: string;
  product: product = {
    _id: '',
    name: '',
    price: 0,
    quantity: 0,
    company: '',
    image: '',
  }

  constructor(private Productservice: ProductService, private Route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id= this.Route.snapshot.params.id;
    this.product._id = this.id;
    this.Productservice.getProductById(this.id).subscribe(result =>{
        console.log(result)
        this.product.name = result.name,
        this.product.price = result.price,
        this.product.quantity = result.quantity;
        this.product.company = result.company;
    });
  }

  Update(){
    this.Productservice.updateProductById(this.product, this.id).subscribe(result =>{
      console.log(this.product);
      this.product = result;
    })
  }
}
