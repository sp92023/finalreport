import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {UserModel} from '../model/user.model';
import {MicrosoftAuthService} from "./microsoft-auth.service";
import {GoogleAuthService} from "./google-auth.service";

@Injectable()
export class UserProfileService {

  private user = new BehaviorSubject<UserModel>(null); // our server user profile
  private loggedIn: boolean;

  currentUser = this.user.asObservable();

  constructor(
    private microsoftAuthService: MicrosoftAuthService,
    private googleAuthService: GoogleAuthService
  ) {}

  changeUser(userModel: UserModel): void {
    this.user.next(userModel);
  }

  getUserModel(): UserModel {
    return this.user.getValue();
  }

  getLoggedIn(): boolean {
    if (this.user.getValue() === null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = !!this.user.getValue().username;
    }
    return this.loggedIn;
  }

  signOut(): void {
    if (this.microsoftAuthService.getLoggedIn()) {
      this.microsoftAuthService.signOutWithMicrosoft();
    }
    if (this.googleAuthService.getLoggedIn()) {
      this.googleAuthService.signOutWithGoogle();
    }
  }

}
