import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {DepartmentModel} from '../../../model/department.model';

@Component({
  selector: 'app-department-editing-dialog',
  templateUrl: './department-editing-dialog.component.html',
  styleUrls: ['./department-editing-dialog.component.css']
})
export class DepartmentEditingDialogComponent implements OnInit {

  action: string;
  title = '科別 Department';
  department: DepartmentModel;

  constructor(
    public dialogRef: MatDialogRef<DepartmentEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data !== undefined) {
      this.action = this.data['action'];
      this.department = this.data['department'];
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
    this.dialogRef.close(this.department);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
