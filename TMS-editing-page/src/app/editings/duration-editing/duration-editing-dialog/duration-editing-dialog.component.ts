import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {DurationModel} from '../../../model/duration.model';

@Component({
  selector: 'app-duration-editing-dialog',
  templateUrl: './duration-editing-dialog.component.html',
  styleUrls: ['./duration-editing-dialog.component.css']
})
export class DurationEditingDialogComponent implements OnInit {

  action: string;
  title = '持續時間 Duration';
  duration: DurationModel;

  constructor(
    public dialogRef: MatDialogRef<DurationEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data !== undefined) {
      this.action = this.data['action'];
      this.duration = this.data['duration'];
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
    this.dialogRef.close(this.duration);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
