import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import { ClientIpService } from '../shared/client-ip.service';
import { ApiClockInService } from '../shared/api/api-clock-in.service';
import { UserProfileService } from '../shared/user-profile.service';
import { UserModel } from '../model/user.model';
import { UserIdModel } from '../model/user-id.model';
import { Subscription } from 'rxjs/Subscription';
import { ClockRecordModel } from '../model/clock-in/clock-record.model';
import {ApiLogWriteService} from "../shared/api/api-log-write.service";


@Component({
  selector: 'app-clock-in',
  templateUrl: './clock-in.component.html',
  styleUrls: ['./clock-in.component.css']
})
export class ClockInComponent implements OnInit {

  private subsClockList: Subscription;
  private userModel: UserModel;
  private clockRecords: ClockRecordModel[];
  private userIdModel: UserIdModel;

  constructor(
    private clientIpService: ClientIpService,
    private apiClockInService: ApiClockInService,
    private userProfileService: UserProfileService,
    private cookieService: CookieService,
    private apiLogWriteService: ApiLogWriteService
  ) {
    this.apiLogWriteService.writeLog('ClockInComponent | Work');
    this.userModel = this.userProfileService.getUserModel();
    this.userIdModel = new UserIdModel(this.userModel.user_id);
  }

  ngOnInit() {
    this.apiClockInService.clockList(this.userIdModel);
    this.subsClockList = this.apiClockInService.clockRecordsChanged
      .subscribe(
        (clockRecords: ClockRecordModel[]) => {
          this.clockRecords = clockRecords;
        }
      );
    // this.clockRecords = this.apiClockInService.getClockRecords();
  }

  clock() {
    this.apiLogWriteService.writeLog('ClockInComponent | Clock');
    if (this.getClientIpCheckCookie().toString() === 'true') {
      this.apiClockInService.addClock(this.userIdModel);
    } else {
      alert('Wrong ip address.');
    }
  }

  export() {
    alert('coming soon.');
  }

  getClientIpCheckCookie() {
    return this.cookieService.get('ClientIpCheck');
  }
}
