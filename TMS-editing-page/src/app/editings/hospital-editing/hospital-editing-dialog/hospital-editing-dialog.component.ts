import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HospitalModel } from "../../../model/hospital.model";

@Component({
  selector: 'app-hospital-editing-dialog',
  templateUrl: './hospital-editing-dialog.component.html',
  styleUrls: ['./hospital-editing-dialog.component.css']
})
export class HospitalEditingDialogComponent implements OnInit {

  action: string;
  title = '醫院 Hospital';
  hospital: HospitalModel;

  constructor(
    public dialogRef: MatDialogRef<HospitalEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data !== undefined) {
      this.action = this.data['action'];
      this.hospital = this.data['hospital'];
    }
    if (this.action === 'edit') {
      this.title = '編輯 ' + this.title;
    } else if (this.action === 'delete') {
      this.title = '刪除 ' + this.title;
    }
  }

  ngOnInit() {

  }

  save(): void {
    this.dialogRef.close(this.hospital);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
