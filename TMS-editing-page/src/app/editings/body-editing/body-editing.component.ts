import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {BodyModel} from '../../model/body.model';
import {BodyEditingDialogComponent} from './body-editing-dialog/body-editing-dialog.component';
import {ApiModifyService} from '../../shared/api/api-modify.service';
import {ApiQuerysService} from '../../shared/api/api-querys.service';
import {BodyReferenceModel} from '../../model/body-reference.model';
import {ModifyRequestModel} from '../../model/modify/modify-request.model';

@Component({
  selector: 'app-body-editing',
  templateUrl: './body-editing.component.html',
  styleUrls: ['./body-editing.component.css']
})
export class BodyEditingComponent implements OnInit {

  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  private bodys: BodyModel[] = [];
  private item = 'body';

  constructor(
    public dialog: MatDialog,
    private apiModifyService: ApiModifyService,
    private apiQuerysService: ApiQuerysService
  ) { }

  ngOnInit() {
    this.queryData();
    this.bodys.push(new BodyModel(1, 'test1', 'test2', 1, 1));
  }

  queryData(): void {
    this.apiQuerysService.httpPost(this.item)
      .subscribe(
        data => {
          this.bodys = <BodyModel[]>data;
        },
      error => {
          console.log(error);
        }
      );
  }

  modifyData(action: string, body: BodyReferenceModel): void {
    let modifyRequestModel: ModifyRequestModel = null;
    modifyRequestModel.item = this.item;
    modifyRequestModel.option = action;
    modifyRequestModel.body = body;
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

  openDialog(action: string, body: BodyModel): any {
    let dialogRef = this.dialog.open(BodyEditingDialogComponent, {
      width: '640px',
      data: {action: action, body: body}
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
