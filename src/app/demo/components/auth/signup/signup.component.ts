import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/layout/service/auth.service';
import { DirectusService } from 'src/app/layout/service/directus.service.ts';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  role: string = '';  // New role property
  error: string = '';

  roles = [
    { label: 'Principal', value: 'Principal' },
    { label: 'Teacher', value: 'Teacher' },
    { label: 'Student', value: 'Student' }
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
    public layoutService: LayoutService,
    private directusService: DirectusService  // Inject Directus service
  ) {}

  onSignUp() {
    // Clear previous errors
    this.error = '';

    if (!this.firstName || !this.lastName || !this.email || !this.password || !this.role) {
      this.error = 'All fields are required.';
      return;
    }

    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      role: this.role  // Include the role in the user data
    };

    // Register the user via the Directus service or AuthService
    this.authService.signup(user).subscribe(
      (response) => {
        // Handle successful user creation (e.g., login automatically)
        this.authService.login(this.email, this.password).subscribe(
          (loginResponse) => {
            this.authService.storeToken(loginResponse.token); // Store the token
            this.router.navigate(['/dashboard']); // Redirect to the dashboard or appropriate page
          },
          (loginError) => {
            this.error = 'Login failed. Please try again.';
          }
        );
      },
      (error) => {
        this.error = 'An error occurred while creating your account.';
      }
    );
  }
}
