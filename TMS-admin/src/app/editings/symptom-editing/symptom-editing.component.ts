import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import {SymptomReferenceModel} from "../../model/symptom-reference.model";
import {SymptomEditingDialogComponent} from "./symptom-editing-dialog/symptom-editing-dialog.component";

@Component({
  selector: 'app-symptom-editing',
  templateUrl: './symptom-editing.component.html',
  styleUrls: ['./symptom-editing.component.css']
})
export class SymptomEditingComponent implements OnInit {

  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  private symptoms: SymptomReferenceModel[] = [];

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.queryData();
  }

  queryData(): void {

  }

  editData(symptom: SymptomReferenceModel): void {
    if (this.openDialog('edit', symptom) !== undefined) {
      // start to save
    }
  }

  deleteData(symptom: SymptomReferenceModel): void {
    if (this.openDialog('delete', symptom) !== undefined) {
      // start to delete
    }
  }

  openDialog(action: string, object: SymptomReferenceModel): any {
    let dialogRef = this.dialog.open(SymptomEditingDialogComponent, {
      width: '640px',
      data: { action: action, object: object }
    });

    dialogRef.afterClosed().subscribe(result => {
      return result;
    });
  }
}
