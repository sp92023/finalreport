import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';

import { HospitalModel } from '../../model/hospital.model';
import { HospitalEditingDialogComponent } from "./hospital-editing-dialog/hospital-editing-dialog.component";
import { ApiModifyService } from "../../shared/api/api-modify.service";
import { ModifyRequestModel } from "../../model/modify/modify-request.model";
import { ApiQuerysService } from "../../shared/api/api-querys.service";

@Component({
  selector: 'app-hospital-editing',
  templateUrl: './hospital-editing.component.html',
  styleUrls: ['./hospital-editing.component.css']
})
export class HospitalEditingComponent implements OnInit {

  private hospitals: HospitalModel[] = [];
  private item = 'hospital';

  constructor(
    public dialog: MatDialog,
    private apiModifyService: ApiModifyService,
    private apiQuerysService: ApiQuerysService
  ) {
  }

  ngOnInit() {
    this.queryData();
    this.hospitals.push(new HospitalModel(1, 'test1', 'test2', 'test3'))
  }

  queryData(): void {
    this.apiQuerysService.httpPost(this.item)
      .subscribe(
        data => {
          this.hospitals = <HospitalModel[]>data;
        },
        error => {
          console.log(error);
        }
      );
  }

  modifyData(action: string, hospital: HospitalModel): void {
    let modifyRequestModel: ModifyRequestModel = null;
    modifyRequestModel.item = this.item;
    modifyRequestModel.option = action;
    modifyRequestModel.hospital = hospital;
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

  openDialog(action: string, hospital: HospitalModel): void {
    let dialogRef = this.dialog.open(HospitalEditingDialogComponent, {
      width: '640px',
      data: { action: action, hospital: hospital }
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
