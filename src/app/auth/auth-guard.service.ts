import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean{

      if(!this.authService.isLoggedIn()){
        this.router.navigate(['/login']);
      }

      return true;
    }

  constructor(private authService: AuthService, private router: Router) { }
}
