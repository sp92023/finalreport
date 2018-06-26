import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from "rxjs/index";

import { UserProfileService } from "../../shared/user-profile.service";
import { AccountModel } from "../../model/account.model";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit, OnDestroy {

  hospitalForm = new FormControl();
  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];

  private subsCurrentAccount: Subscription;
  private account: AccountModel;

  constructor(
    private userProfileService: UserProfileService,
  ) { }

  ngOnInit() {
    this.subsCurrentAccount = this.userProfileService.currentAccount.subscribe(
      account => this.account = account
    );
  }

  ngOnDestroy() {
    this.subsCurrentAccount.unsubscribe();
  }

  signOut(): void {
    this.userProfileService.signOut();
  }

}
