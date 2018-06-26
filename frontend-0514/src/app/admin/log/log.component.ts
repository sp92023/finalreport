import { Component, OnInit } from '@angular/core';
import {ApiLogDisplayService} from "../../shared/api/api-log-display.service";
import {TypeModel} from "../../model/test-unit/type.model";
import {Subscription} from "rxjs/Subscription";
import {LogMessageModel} from "../../model/log-message.model";
import {ApiLogWriteService} from "../../shared/api/api-log-write.service";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  private subsLogDisplay: Subscription;
  private message: LogMessageModel;
  keyword = '';

  constructor(
    private apiLogDisplayService: ApiLogDisplayService,
    private apiLogWriteService: ApiLogWriteService
    ) {
    this.apiLogWriteService.writeLog('LogComponent | Work');
  }

  ngOnInit() {

  }

  search() {
    this.apiLogDisplayService.displayLog(this.keyword)
      .subscribe(
        data => {
          if (data !== null) {
            this.message = <LogMessageModel>data;
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

}
