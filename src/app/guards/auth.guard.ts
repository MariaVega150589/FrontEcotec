import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export
  class AuthGuard {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> => {
    return this.loginService.isAuth$.pipe(
      map(isAuthenticated => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  };
}