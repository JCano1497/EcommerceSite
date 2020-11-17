import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from "../models/user.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // URL to web api
  private userUrl = 'http://localhost:5000/api/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.userUrl);
  }

  getUserById(id: any): Observable<user> {
    return this.http.get<user>(`${this.userUrl}/${id}`);
  }


  updateUserById(user: user, id: any): Observable<user> {
    return this.http.put<user>(`${this.userUrl}/${id}`, user, httpOptions);
  }

  deleteUserById(id: any): Observable<user> {
    return this.http.delete<user>(`${this.userUrl}/${id}`);
  }

}
