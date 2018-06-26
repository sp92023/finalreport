import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {DurationModel} from '../../model/duration.model';
import {DialogComponent} from '../../core/dialog/dialog.component';
import {DurationEditingDialogComponent} from "./duration-editing-dialog/duration-editing-dialog.component";


@Component({
  selector: 'app-duration-editing',
  templateUrl: './duration-editing.component.html',
  styleUrls: ['./duration-editing.component.css']
})
export class DurationEditingComponent implements OnInit {

  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  private durations: DurationModel[];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.queryData();
  }

  queryData(): void {

  }

  editData(duration: DurationModel): void {
    if (this.openDialog('edit', duration) !== undefined) {
      // start to save
    }
  }

  deleteData(duration: DurationModel): void {
    if (this.openDialog('delete', duration) !== undefined) {
      // start to delete
    }
  }

  openDialog(action: string, object: DurationModel): any {
    let dialogRef = this.dialog.open(DurationEditingDialogComponent, {
      width: '640px',
      data: { action: action, object: object }
    });

    dialogRef.afterClosed().subscribe(result => {
      return result;
    });
  }

}
