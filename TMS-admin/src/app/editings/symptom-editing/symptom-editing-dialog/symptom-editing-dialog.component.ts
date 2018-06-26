import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-symptom-editing-dialog',
  templateUrl: './symptom-editing-dialog.component.html',
  styleUrls: ['./symptom-editing-dialog.component.css']
})
export class SymptomEditingDialogComponent implements OnInit {

  action = '';
  title = '疾病 Symptom';

  constructor(
    public dialogRef: MatDialogRef<SymptomEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data !== undefined) {
      this.action = this.data['action'];
      for (let key in this.data['object']) {
        if (this.data['object'].hasOwnProperty(key)) {
          console.log(key, ':', this.data['object'][key]);
        }
      }
    }
  }

  ngOnInit() {

  }

  close(data: any): void {
    this.dialogRef.close(data);
  }

}
