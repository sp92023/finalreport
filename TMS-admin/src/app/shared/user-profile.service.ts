import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from "angularx-social-login";

import { GoogleAuthService } from './google-auth.service';
import { AccountModel } from '../model/account.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private account = new BehaviorSubject<AccountModel>(null);

  currentAccount = this.account.asObservable();

  constructor(
    private googleAuthService: GoogleAuthService,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.authState.subscribe((socialUser) => {
      if (this.googleAuthService.setSocialUser(socialUser)) {
        this.changeAccount(new AccountModel(0, socialUser.email, socialUser.name, socialUser.id, socialUser.photoUrl));
        this.router.navigate(['/']);
      } else {
        this.changeAccount(null);
        this.router.navigate(['/sign-in']);
      }
    });
  }

  changeAccount(account: AccountModel): void {
    this.account.next(account);
  }

  getAccount(): AccountModel {
    return this.account.getValue();
  }

  isLogin(): boolean {
    return !!this.account.getValue();
  }

  signOut(): void {
    if (this.googleAuthService.isLogin()) {
      this.googleAuthService.signOutWithGoogle();
    }
  }
}
