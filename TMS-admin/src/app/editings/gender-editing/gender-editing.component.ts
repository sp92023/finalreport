import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {GenderModel} from '../../model/gender.model';
import {DialogComponent} from '../../core/dialog/dialog.component';
import {GenderEditingDialogComponent} from "./gender-editing-dialog/gender-editing-dialog.component";


@Component({
  selector: 'app-gender-editing',
  templateUrl: './gender-editing.component.html',
  styleUrls: ['./gender-editing.component.css']
})
export class GenderEditingComponent implements OnInit {

  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  private genders: GenderModel[];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.queryData();
  }

  queryData(): void {

  }

  editData(gender: GenderModel): void {
    if (this.openDialog('edit', gender) !== undefined) {
      // start to save
    }
  }

  deleteData(gender: GenderModel): void {
    if (this.openDialog('delete', gender) !== undefined) {
      // start to delete
    }
  }

  openDialog(action: string, object: GenderModel): any {
    let dialogRef = this.dialog.open(GenderEditingDialogComponent, {
      width: '640px',
      data: { action: action, object: object }
    });

    dialogRef.afterClosed().subscribe(result => {
      return result;
    });
  }

}
