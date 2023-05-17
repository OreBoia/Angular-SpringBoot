import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = true
  admin: boolean = true;

  constructor() { }

  IsAuthenticated()
  {
    return this.isLoggedIn
  }

  IsRoleAdmin()
  {
    return this.admin
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean
  {
    return this.IsAuthenticated()
  }
}

export const AuthGuardConst: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthService).canActivate(next, state);
}
