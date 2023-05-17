import { Injectable } from '@angular/core';

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
}
