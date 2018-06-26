import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Injectable()
export class GoogleAuthService {

  private socialUser: SocialUser; // google user profile

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOutWithGoogle(): void {
    this.authService.signOut();
  }

  setSocialUser(socialUser: SocialUser): boolean {
    this.socialUser = socialUser;
    return !!socialUser;
  }

  getLoggedIn(): boolean {
    return !!this.socialUser;
  }

  getSocialUserMail(): string {
    if (this.socialUser !== null) {
      return this.socialUser.email;
    } else {
      return '';
    }
  }
}
