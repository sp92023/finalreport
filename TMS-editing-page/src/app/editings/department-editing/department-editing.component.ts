import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {DepartmentModel} from '../../model/department.model';
import {DepartmentEditingDialogComponent} from './department-editing-dialog/department-editing-dialog.component';
import {ApiModifyService} from '../../shared/api/api-modify.service';
import {ApiQuerysService} from '../../shared/api/api-querys.service';
import {ModifyRequestModel} from '../../model/modify/modify-request.model';
import {DepartmentReferenceModel} from '../../model/department-reference.model';

@Component({
  selector: 'app-department-editing',
  templateUrl: './department-editing.component.html',
  styleUrls: ['./department-editing.component.css']
})
export class DepartmentEditingComponent implements OnInit {

  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  private departments: DepartmentModel[] = [];
  private item = 'department';

  constructor(
    public dialog: MatDialog,
    private apiModifyService: ApiModifyService,
    private apiQuerysService: ApiQuerysService
  ) { }

  ngOnInit() {
    this.queryData();
    this.departments.push(new DepartmentModel(1, 'test', 'test2', 'test3', 1, 1));
  }

  queryData(): void {
    this.apiQuerysService.httpPost(this.item)
      .subscribe(
        data => {
          this.departments = <DepartmentModel[]>data;
        },
        error => {
          console.log(error);
        }
      );

  }

  modifyData(action: string, department: DepartmentReferenceModel): void {
    let modifyRequestModel: ModifyRequestModel = null;
    modifyRequestModel.item = this.item;
    modifyRequestModel.option = action;
    modifyRequestModel.department = department;
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

  openDialog(action: string, department: DepartmentModel): void {
    let dialogRef = this.dialog.open(DepartmentEditingDialogComponent, {
      width: '640px',
      data: { action: action, department: department }
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
