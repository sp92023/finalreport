import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

import { UserIdModel } from '../../model/user-id.model';
import { ClockRecordModel } from '../../model/clock-in/clock-record.model';
import {environment} from "../../../environments/environment";
import {Md5HashService} from "../md5-hash.service";

@Injectable()
export class ApiClockInService {

  clockRecordsChanged = new Subject<ClockRecordModel[]>();
  private clockRecords: ClockRecordModel[] = [];
  private clockListURL = environment.apiUrl + '/general/clock/list';
  private clockAddURL = environment.apiUrl + '/general/clock/add';

  constructor(private http: HttpClient, private md5HashService: Md5HashService) { }

  clockList(userIdModel: UserIdModel) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.clockListURL, userIdModel, {headers: new HttpHeaders().set('QA-CHECK', md5)}).subscribe(
      data => {
        this.setClockRecords(<ClockRecordModel[]>data);
      },
      (err) => console.log(err)
    );
  }

  addClock(userIdModel: UserIdModel) {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    return this.http.post(this.clockAddURL, userIdModel, {headers: new HttpHeaders().set('QA-CHECK', md5)}).subscribe(
      data => {
        if (data != null) {
          this.addClockRecord(<ClockRecordModel>data);
          alert('Clock Success ! ');
        } else {
          alert('Error ! ');
        }
      },
      (err) => console.log(err)
    );
  }

  setClockRecords(clockRecords: ClockRecordModel[]) {
    if (clockRecords == null) {
      this.clockRecords = [];
    } else {
      this.clockRecords = clockRecords;
    }
    this.clockRecordsChanged.next(this.clockRecords.slice());
  }

  getClockRecords() {
    return this.clockRecords.slice();
  }

  addClockRecord(clockRecord: ClockRecordModel) {
    this.clockRecords.push(clockRecord);
    this.clockRecordsChanged.next(this.clockRecords.slice());
  }

}
