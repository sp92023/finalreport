import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfileService } from '../../shared/user-profile.service';
import { GoogleAuthService } from '../../shared/google-auth.service';
import { MicrosoftAuthService } from '../../shared/microsoft-auth.service';
import {UserModel} from '../../model/user.model';
import {TypeModel} from '../../model/test-unit/type.model';
import {ApiNavbarService} from '../../shared/api/api-navbar.service';
import {Subscription} from 'rxjs/Subscription';
import {UserIdModel} from '../../model/user-id.model';
import {FunctionModel} from '../../model/core/navbar/function.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private userModel: UserModel;
  private loggedIn: boolean;
  private searchValue = '';
  private subsNavbarList = Subscription;
  private functionLists: FunctionModel[];

  constructor(
    private router: Router,
    private userProfileService: UserProfileService,
    private apiNavbarService: ApiNavbarService
  ) { }

  ngOnInit() {
    this.userProfileService.currentUser.subscribe((userModel) => {
      this.userModel = userModel;
      this.loggedIn = this.userProfileService.getLoggedIn();

      if (this.loggedIn === true) {
        const userIdModel = new UserIdModel(this.userModel.user_id);
        this.apiNavbarService.navbarList(userIdModel)
          .subscribe(
            data => {
              if (data !== null) {
                this.functionLists = <FunctionModel[]>data;
              }
            },
            (err) => {
              console.log(err);
            }
          );
      }
    });
  }

  signOut(): void {
    this.userProfileService.signOut();
  }

  goRouterNavigate(commands: string): void {
    this.router.navigate([commands]);
  }
}
