import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {SeverityModel} from '../../model/severity.model';
import {DialogComponent} from '../../core/dialog/dialog.component';
import {SeverityEditingDialogComponent} from "./severity-editing-dialog/severity-editing-dialog.component";

@Component({
  selector: 'app-severity-editing',
  templateUrl: './severity-editing.component.html',
  styleUrls: ['./severity-editing.component.css']
})
export class SeverityEditingComponent implements OnInit {

  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  private severitys: SeverityModel[];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.queryData();
  }

  queryData(): void {

  }

  editData(severity: SeverityModel): void {
    if (this.openDialog('edit', severity) !== undefined) {
      // start to save
    }
  }

  deleteData(severity: SeverityModel): void {
    if (this.openDialog('delete', severity) !== undefined) {
      // start to delete
    }
  }

  openDialog(action: string, object: SeverityModel): any {
    let dialogRef = this.dialog.open(SeverityEditingDialogComponent, {
      width: '640px',
      data: { action: action, object: object }
    });

    dialogRef.afterClosed().subscribe(result => {
      return result;
    });
  }

}
