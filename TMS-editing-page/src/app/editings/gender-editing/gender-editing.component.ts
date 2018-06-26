import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {GenderModel} from '../../model/gender.model';
import {GenderEditingDialogComponent} from "./gender-editing-dialog/gender-editing-dialog.component";
import {ApiModifyService} from '../../shared/api/api-modify.service';
import {ApiQuerysService} from '../../shared/api/api-querys.service';
import {ModifyRequestModel} from '../../model/modify/modify-request.model';
import {GenderReferenceModel} from '../../model/gender-reference.model';


@Component({
  selector: 'app-gender-editing',
  templateUrl: './gender-editing.component.html',
  styleUrls: ['./gender-editing.component.css']
})
export class GenderEditingComponent implements OnInit {

  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  private genders: GenderModel[] = [];
  private item = 'gender';

  constructor(
    public dialog: MatDialog,
    private apiModifyService: ApiModifyService,
    private apiQuerysService: ApiQuerysService
  ) { }

  ngOnInit() {
    this.queryData();
    this.genders.push(new GenderModel(1, 'test1', 'test2', 1));
  }

  queryData(): void {
    this.apiQuerysService.httpPost(this.item)
      .subscribe(
        data => {
          this.genders = <GenderModel[]>data;
        },
      error => {
          console.log(error);
        }
      );
  }

  modifyData(action: string, gender: GenderReferenceModel): void {
    let modifyRequestModel: ModifyRequestModel = null;
    modifyRequestModel.item = this.item;
    modifyRequestModel.option = action;
    modifyRequestModel.gender = gender;
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

  openDialog(action: string, gender: GenderModel): void {
    let dialogRef = this.dialog.open(GenderEditingDialogComponent, {
      width: '640px',
      data: { action: action, gender: gender }
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
