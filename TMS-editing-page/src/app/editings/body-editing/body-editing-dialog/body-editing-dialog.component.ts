import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {BodyModel} from '../../../model/body.model';

@Component({
  selector: 'app-body-editing-dialog',
  templateUrl: './body-editing-dialog.component.html',
  styleUrls: ['./body-editing-dialog.component.css']
})
export class BodyEditingDialogComponent implements OnInit {

  action: string;
  title = '部位 Body part';
  body: BodyModel;

  constructor(
    public dialogRef: MatDialogRef<BodyEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data !== undefined) {
      this.action = this.data['action'];
      this.body = this.data['body'];
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
    this.dialogRef.close(this.body);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
