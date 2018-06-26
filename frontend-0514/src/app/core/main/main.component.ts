import { Component, OnInit } from '@angular/core';

import { ClientIpService } from '../../shared/client-ip.service';
import {UserProfileService} from '../../shared/user-profile.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private firstIpAddress = '10';
  private secondIpAddress = '91';
  private timeOut = 3600000;

  constructor(
    private clientIpService: ClientIpService,
    private userProfileService: UserProfileService
  ) {
  }

  ngOnInit() {
    this.clientIpService.getClientIp(this.firstIpAddress, this.secondIpAddress);
    setTimeout(() => {
      this.userProfileService.signOut();
      }, this.timeOut);
  }

}
