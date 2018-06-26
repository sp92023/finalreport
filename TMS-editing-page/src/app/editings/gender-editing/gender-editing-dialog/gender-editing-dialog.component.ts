import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {GenderModel} from '../../../model/gender.model';

@Component({
  selector: 'app-gender-editing-dialog',
  templateUrl: './gender-editing-dialog.component.html',
  styleUrls: ['./gender-editing-dialog.component.css']
})
export class GenderEditingDialogComponent implements OnInit {

  gendersEnglish = ['male', 'female', 'infant'];
  gendersChinese = ['男性', '女性', '嬰兒'];
  action: string;
  title = '性別 Gender';
  gender: GenderModel;

  constructor(
    public dialogRef: MatDialogRef<GenderEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data !== undefined) {
      this.action = this.data['action'];
      this.gender = this.data['gender'];
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
    this.dialogRef.close(this.gender);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
