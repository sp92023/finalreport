import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {DurationModel} from '../../model/duration.model';
import {DurationEditingDialogComponent} from './duration-editing-dialog/duration-editing-dialog.component';
import {ApiModifyService} from '../../shared/api/api-modify.service';
import {ApiQuerysService} from '../../shared/api/api-querys.service';
import {DurationReferenceModel} from '../../model/duration-reference.model';
import {ModifyRequestModel} from '../../model/modify/modify-request.model';


@Component({
  selector: 'app-duration-editing',
  templateUrl: './duration-editing.component.html',
  styleUrls: ['./duration-editing.component.css']
})
export class DurationEditingComponent implements OnInit {

  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  private durations: DurationModel[] = [];
  private item = 'duration';

  constructor(
    public dialog: MatDialog,
    private apiModifyService: ApiModifyService,
    private apiQuerysService: ApiQuerysService
  ) { }

  ngOnInit() {
    this.queryData();
    this.durations.push(new DurationModel(1, 'test1', 'test2', 1));
  }

  queryData(): void {
    this.apiQuerysService.httpPost(this.item)
      .subscribe(
        data => {
          this.durations = <DurationModel[]>data;
        },
        error => {
          console.log(error);
        }
      );
  }

  modifyData(action: string, duration: DurationReferenceModel): void {
    let modifyRequestModel: ModifyRequestModel = null;
    modifyRequestModel.item = this.item;
    modifyRequestModel.option = action;
    modifyRequestModel.duration = duration;
    this.apiModifyService.httpPost(modifyRequestModel)
      .subscribe(
        data => {
          this.queryData();
        },
        error => {
          console.log(error);
        }
      );
  }

  openDialog(action: string, duration: DurationModel): void {
    let dialogRef = this.dialog.open(DurationEditingDialogComponent, {
      width: '640px',
      data: { action: action, duration: duration }
    });

    dialogRef.afterClosed()
      .subscribe(
        result => {
          if (result !== undefined) {
            // if undefined mean null no value return
            this.modifyData(action, result);
          }
        });
  }

}
