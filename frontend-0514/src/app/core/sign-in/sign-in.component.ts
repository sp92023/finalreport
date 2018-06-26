import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { MicrosoftAuthService } from '../../shared/microsoft-auth.service';
import { GoogleAuthService } from '../../shared/google-auth.service';
import { UserProfileService } from '../../shared/user-profile.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {

  private subsMicrosoftSocialUser: Subscription;

  constructor(
    private router: Router,
    private googleAuthService: GoogleAuthService,
    private microsoftAuthService: MicrosoftAuthService,
    private userProfileService: UserProfileService,
    private authService: AuthService
    ) {
  }

  ngOnInit() {
    this.subsMicrosoftSocialUser = this.microsoftAuthService.currentSocialUser.subscribe((socialUser) => {
      if (this.microsoftAuthService.getLoggedIn()) {
        this.router.navigate(['loading']);
      } else if (this.userProfileService.getLoggedIn()) {
        this.userProfileService.changeUser(null);
        window.location.reload();
      }
    });
    this.authService.authState.subscribe((socialUser) => {
      if (this.googleAuthService.setSocialUser(socialUser)) {
        this.router.navigate(['loading']);
      } else if (this.userProfileService.getLoggedIn()) {
        this.userProfileService.changeUser(null);
        window.location.reload();
      }
    });
  }

  ngOnDestroy() {
    // this.subsMicrosoftSocialUser.unsubscribe();
  }

  signInWithGoogle(): void {
    this.googleAuthService.signInWithGoogle();
  }

  signInWithMicrosoft(): void {
    this.microsoftAuthService.signInWithMicrosoft();
  }
}
