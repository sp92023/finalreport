import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import {SymptomReferenceModel} from '../../../model/symptom-reference.model';

@Component({
  selector: 'app-symptom-editing-dialog',
  templateUrl: './symptom-editing-dialog.component.html',
  styleUrls: ['./symptom-editing-dialog.component.css']
})
export class SymptomEditingDialogComponent implements OnInit {

  action: string;
  title = '疾病 Symptom';
  symptom: SymptomReferenceModel;

  constructor(
    public dialogRef: MatDialogRef<SymptomEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data !== undefined) {
      this.action = this.data['action'];
      this.symptom = this.data['symptom'];
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
    this.dialogRef.close(this.symptom);
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
