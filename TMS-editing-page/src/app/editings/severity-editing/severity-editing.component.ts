import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {SeverityModel} from '../../model/severity.model';
import {SeverityEditingDialogComponent} from './severity-editing-dialog/severity-editing-dialog.component';
import {ApiModifyService} from '../../shared/api/api-modify.service';
import {ApiQuerysService} from '../../shared/api/api-querys.service';
import {SeverityReferenceModel} from '../../model/severity-reference.model';
import {ModifyRequestModel} from '../../model/modify/modify-request.model';

@Component({
  selector: 'app-severity-editing',
  templateUrl: './severity-editing.component.html',
  styleUrls: ['./severity-editing.component.css']
})
export class SeverityEditingComponent implements OnInit {

  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  private severitys: SeverityModel[] = [];
  private item = 'severity';

  constructor(
    public dialog: MatDialog,
    private apiModifyService: ApiModifyService,
    private apiQuerysService: ApiQuerysService
  ) { }

  ngOnInit() {
    this.queryData();
    this.severitys.push(new SeverityModel(1, 'test1', 'test2', 1));
  }

  queryData(): void {
    this.apiQuerysService.httpPost(this.item)
      .subscribe(
        data => {
          this.severitys = <SeverityModel[]>data;
        },
      error => {
          console.log(error);
        }
      );
  }

  modifyData(action: string, severity: SeverityReferenceModel): void {
    let modifyRequestModel: ModifyRequestModel = null;
    modifyRequestModel.item = this.item;
    modifyRequestModel.option = action;
    modifyRequestModel.severity = severity;
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

  openDialog(action: string, severity: SeverityModel): any {
    let dialogRef = this.dialog.open(SeverityEditingDialogComponent, {
      width: '640px',
      data: { action: action, severity: severity }
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
