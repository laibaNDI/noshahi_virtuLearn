import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/layout/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(
    public layoutService: LayoutService,
    private router: Router,
    private authService: AuthService
  ) {}

  onLogin() {
    // Optional: clear old auth data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');

    const isLoggedIn = this.authService.login(this.username, this.password);

    if (isLoggedIn) {
      const role = this.authService.getUserRole();

      // Role-based navigation
      switch (role) {
        case 'Principal':
          this.router.navigate(['/principal-dashboard']);
          break;
        case 'Teacher':
          this.router.navigate(['/teacher-dashboard']);
          break;
        case 'Student':
          this.router.navigate(['/student-dashboard']);
          break;
        default:
          this.error = 'Unknown role. Contact admin.';
          break;
      }
    } else {
      this.error = 'Invalid username or password';
    }
  }
}
