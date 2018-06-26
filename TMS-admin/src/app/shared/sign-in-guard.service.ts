import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import {UserProfileService} from './user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuardService implements CanActivate {

  constructor(
    private userProfileService: UserProfileService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkSignIn();
  }

  checkSignIn(): boolean {
    if (this.userProfileService.isLogin()) {
      return true;
    } else {
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}
