// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe(
        (response) => {
          // Handle successful login (navigate, store token, etc.)
          console.log('Login successful', response);
        },
        (error) => {
          // Handle login error (show error message, etc.)
          console.error('Login failed', error);
        }
      );
    }
  }
}
