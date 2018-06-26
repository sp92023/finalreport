import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {SeverityModel} from '../../../model/severity.model';

@Component({
  selector: 'app-severity-editing-dialog',
  templateUrl: './severity-editing-dialog.component.html',
  styleUrls: ['./severity-editing-dialog.component.css']
})
export class SeverityEditingDialogComponent implements OnInit {

  action: string;
  title = '嚴重程度 ';
  severity: SeverityModel;

  constructor(
    public dialogRef: MatDialogRef<SeverityEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data !== undefined) {
      this.action = this.data['action'];
      this.severity = this.data['severity'];
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
    this.dialogRef.close(this.severity);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
