// signup.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const userData = this.signUpForm.value;
      // You can customize the user object or validation here if needed
      this.userService.signUp(userData).subscribe(
        response => {
          console.log('Sign-up successful:', response);
          // Redirect to another page or perform any other action after successful sign-up
        },
        error => {
          console.error('Sign-up failed:', error);
          // Handle error appropriately, e.g., show an error message to the user
        }
      );
    }
  }
}
