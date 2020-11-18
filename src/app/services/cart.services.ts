import { Cart } from './../models/cart.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // URL to web api
  private CartUrl = 'http://localhost:5000/api/Carts';
  constructor(private http: HttpClient) { }

  getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.CartUrl);
  }

  getCartByUsername(Username: any): Observable<Cart> {
    return this.http.get<Cart>(`${this.CartUrl}/${Username}`);
  }

  addItems(Cart: Cart): Observable<any> {
    return this.http.post<any>(this.CartUrl, Cart, httpOptions);
  }

  updateCartById(Cart: Cart, id: any): Observable<Cart> {
    return this.http.put<Cart>(this.CartUrl, Cart, httpOptions);
  }

  deleteCartById(id: any): Observable<Cart> {
    return this.http.delete<Cart>(this.CartUrl);
  }

}
