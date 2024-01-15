// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8888/USERS/api/auth/signup';

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
