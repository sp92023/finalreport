import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {HospitalPermissionModel} from '../../model/hospital-permission.model';
import {MatDialog} from '@angular/material';
import {ApiModifyService} from '../../shared/api/api-modify.service';
import {ApiQuerysService} from '../../shared/api/api-querys.service';
import {ModifyRequestModel} from '../../model/modify/modify-request.model';

@Component({
  selector: 'app-hospital-permission',
  templateUrl: './hospital-permission.component.html',
  styleUrls: ['./hospital-permission.component.css']
})
export class HospitalPermissionComponent implements OnInit {

  hospitalForm = new FormControl();
  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  private hospital_permissions: HospitalPermissionModel[] = [];
  private item: 'hospital-permission';
  action: string;

  constructor(
    public dialog: MatDialog,
    private apiModifyService: ApiModifyService,
    private apiQuerysService: ApiQuerysService
  ) { }

  ngOnInit() {
    this.queryData();
    this.hospital_permissions.push(new HospitalPermissionModel(1, 1, 1, 'rw'));
  }

  queryData(): void {
    this.apiQuerysService.httpPost(this.item)
      .subscribe(
        data => {
          this.hospital_permissions = <HospitalPermissionModel[]>data;
        },
        error => {
          console.log(error);
        }
      );
  }

  modifyData(action: string, hospital_permission: HospitalPermissionModel): void {
    let modifyRequestModel: ModifyRequestModel = null;
    modifyRequestModel.item = this.item;
    modifyRequestModel.option = action;
    modifyRequestModel.hospital_permission = hospital_permission;
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
}
