import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { EmailModel } from '../../model/email.model';
import { UserModel } from '../../model/user.model';
import { MicrosoftAuthService } from '../../shared/microsoft-auth.service';
import { UserProfileService } from '../../shared/user-profile.service';
import { GoogleAuthService } from '../../shared/google-auth.service';
import { ApiUserProfileService } from '../../shared/api/api-user-profile.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  private subsUserInfo: Subscription;

  constructor(
    private router: Router,
    private googleAuthService: GoogleAuthService,
    private microsoftAuthService: MicrosoftAuthService,
    private userProfileService: UserProfileService,
    private apiUserProfileService: ApiUserProfileService
  ) { }

  ngOnInit() {
    let emailModel: EmailModel;
    if (this.microsoftAuthService.getLoggedIn()) {
      emailModel = new EmailModel(this.microsoftAuthService.getSocialUserMail());
    } else if (this.googleAuthService.getLoggedIn()) {
      emailModel = new EmailModel(this.googleAuthService.getSocialUserMail());
    } else {
      this.router.navigate(['/sign-in']);
    }
    if (emailModel != null) {
        this.subsUserInfo = this.apiUserProfileService.getUserInfo(emailModel).subscribe(
          data => {
            if (data !== null) {
              if (data['username'] !== undefined && data['username'] !== '') {
                this.userProfileService.changeUser(<UserModel>data);
                this.router.navigate(['/']);
              } else {
                this.goToErrorPage();
              }
            } else {
              this.goToErrorPage();
            }
          },
          (err) => {
            console.log(err);
            this.goToErrorPage();
          }
        );
    }
  }

  goToErrorPage() {
    this.userProfileService.signOut();
    this.router.navigate(['/error-page']);
  }

}
