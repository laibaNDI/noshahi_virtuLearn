import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DirectusService {
  private apiUrl = 'https://your-directus-instance.com'; // Replace with your Directus instance URL

  constructor(private http: HttpClient) {}

  createUser(user: { firstName: string, lastName: string, email: string, password: string }): Observable<any> {
    const data = {
      data: {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: user.password,
      }
    };

    return this.http.post(`${this.apiUrl}/items/users`, data); // Adjust for your Directus endpoint
  }
}
