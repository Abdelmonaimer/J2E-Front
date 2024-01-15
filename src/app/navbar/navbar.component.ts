// navbar.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // Assume you have a variable to track the login status
  isLoggedIn: boolean = true;

  constructor(private router: Router) {
    // Check if the user is already logged in (you can modify this logic based on your authentication setup)
    const authDataString = localStorage.getItem('auth_data');
    this.isLoggedIn = !!authDataString;
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  logout(): void {
    // Implement your logout logic here
    // For example, clear user authentication data from localStorage
    localStorage.removeItem('auth_data');
    // Update the login status
    this.isLoggedIn = false;
    // Redirect to the login page or any other desired page after logout
    this.router.navigate(['']);
  }
}
