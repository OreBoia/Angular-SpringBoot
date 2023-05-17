import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService){}
  //DEPECRATE
  // canActivate(route: ActivatedRouteSnapshot,
  //             state: RouterStateSnapshot): 
  //             Observable<boolean | 
  //             UrlTree> | 
  //             Promise<boolean | 
  //             UrlTree> | 
  //             boolean | 
  //             UrlTree 
  // {
  //   return this.authService.IsAuthenticated();
  // }

  //NEW VERSION 1
  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  // {
  //   return this.authService.IsAuthenticated();
  // }

  // canActivate(route: ActivatedRouteSnapshot,
  //             state: RouterStateSnapshot): boolean
  // {
  //   return this.authService.IsAuthenticated()
  // }

  //NEW VERSION 2

  canActivateChild(childRoute: ActivatedRouteSnapshot, 
                  state: RouterStateSnapshot): boolean | 
                  UrlTree | 
                  Observable<boolean | 
                  UrlTree> | 
                  Promise<boolean | 
                  UrlTree> 
  {
    return this.authService.IsRoleAdmin()
  }
  
}

//NEW VERSION 3
// export const AuthGuardConst: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
//   return inject(AuthGuard).canActivate(next, state);
// }

// @Injectable({
//   providedIn: 'root'
// })
// class PermissionsService {

//   constructor(private router: Router) {}

//   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//       //your logic goes here
//   }
// }

// export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
//   return inject(PermissionsService).canActivate(next, state);
// }

