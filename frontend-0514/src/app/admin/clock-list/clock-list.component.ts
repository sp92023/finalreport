import { Component, OnInit } from '@angular/core';

import { ApiClockListService } from '../../shared/api/api-clock-list.service';
import { ClockRecordModel } from '../../model/clock-in/clock-record.model';
import {ApiLogWriteService} from "../../shared/api/api-log-write.service";

@Component({
  selector: 'app-clock-list',
  templateUrl: './clock-list.component.html',
  styleUrls: ['./clock-list.component.css']
})
export class ClockListComponent implements OnInit {

  private clockRecords: ClockRecordModel[][] = [];


  constructor(
    private apiClockListService: ApiClockListService,
    private apiLogWriteService: ApiLogWriteService
  ) {
    this.apiLogWriteService.writeLog('ClockListComponent | Work');
  }

  ngOnInit() {
    this.apiClockListService.currentDataCheck.subscribe(dataCheck => {
      if (dataCheck) {
        this.clockRecords = this.apiClockListService.getClockRecords();
      }
    });
  }

}
