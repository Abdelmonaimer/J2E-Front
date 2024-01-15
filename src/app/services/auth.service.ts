// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8888/USERS/api/auth';
  private storageKey = 'auth_data';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.apiUrl}/signin`, body).pipe(
      tap((response) => {
        this.router.navigate(['/terrains']);
        // Store the entire response object in localStorage
        localStorage.setItem(this.storageKey, JSON.stringify(response));
      })
    );
  }

  getStoredData(): any | null {
    // Retrieve the stored data from localStorage
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : null;
  }

  isLoggedIn(): boolean {
    // Check if the user is logged in by verifying the presence of stored data
    return !!this.getStoredData();
  }

  logout(): void {
    // Remove the stored data from localStorage on logout
    localStorage.removeItem(this.storageKey);
  }
}
