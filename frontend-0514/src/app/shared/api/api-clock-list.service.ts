import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ClockRecordModel } from '../../model/clock-in/clock-record.model';
import { environment } from '../../../environments/environment';
import { Md5HashService } from '../md5-hash.service';
import { UserIdModel } from '../../model/user-id.model';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ApiClockListService {

  private dataCheck = new BehaviorSubject<boolean>(false); // our server user profile
  private clockRecords: ClockRecordModel[][] = [];
  private clockListURL = environment.apiUrl + '/admin/clock/listall';

  currentDataCheck = this.dataCheck.asObservable();

  constructor(private http: HttpClient, private md5HashService: Md5HashService) {
    this.allClockList();
  }

  getClockRecords(): ClockRecordModel[][] {
    return this.clockRecords;
  }

  allClockList(): void {
      this.clockList();
  }

  clockList(): void {
    const date = new Date();
    const nowTime = date.getTime();
    const md5 = this.md5HashService.hash(Math.floor(nowTime / 1000).toString());
    this.http.post(this.clockListURL, '',  {headers: new HttpHeaders().set('QA-CHECK', md5)}).subscribe(
	data => {
        this.clockRecords = <ClockRecordModel[][]>data;
          this.dataCheck.next(true);

      },
      (err) => console.log(err)
    );
  }

}
