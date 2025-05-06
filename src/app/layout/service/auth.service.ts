import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8055/admin/users/login'; // Your backend login URL

  constructor(private http: HttpClient) {}

  // Signup method
  signup(userData: { firstName: string; lastName: string; email: string; password: string; role: string; }): Observable<any> {
    // Replace with actual API call for user registration
    return this.http.post<any>('http://localhost:8055/admin/users', userData);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  // Store token after login
  storeToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  // Get stored token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  // Get user role
  getUserRole(): string | null {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decoding the JWT payload
      return payload.role;
    }
    return null;
  }
}
