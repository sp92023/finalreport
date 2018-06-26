import { Injectable } from '@angular/core';
import {AuthService, GoogleLoginProvider, SocialUser} from 'angularx-social-login';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  socialUser: SocialUser;

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

  isLogin(): boolean {
    return !!this.socialUser;
  }
}
