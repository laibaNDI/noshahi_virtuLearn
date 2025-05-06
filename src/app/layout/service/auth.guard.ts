// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/layout/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    // Check if the user is authenticated
    if (!this.authService.isAuthenticated()) {
      // If not authenticated, redirect to login
      this.router.navigate(['/login']);
      return false;
    }

    // If authenticated, allow navigation
    return true;
  }
}
