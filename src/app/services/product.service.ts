import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // URL to web api
  private productUrl = 'http://localhost:5000/api/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.productUrl);
  }

  getProductById(id: any): Observable<product> {
    return this.http.get<product>(`${this.productUrl}/${id}`);
  }

  addProduct(product: product): Observable<any> {
    return this.http.post<any>(this.productUrl, product, httpOptions);
  }

  updateProductById(product: product, id: any): Observable<product> {
    return this.http.put<product>(`${this.productUrl}/${id}`, product, httpOptions);
  }

  deleteProductById(id: any): Observable<product> {
    return this.http.delete<product>(`${this.productUrl}/${id}`);
  }

}
