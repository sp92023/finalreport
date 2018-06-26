import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import {SymptomReferenceModel} from "../../model/symptom-reference.model";
import {SymptomEditingDialogComponent} from "./symptom-editing-dialog/symptom-editing-dialog.component";
import {ApiModifyService} from '../../shared/api/api-modify.service';
import {ApiQuerysService} from '../../shared/api/api-querys.service';
import {CuiModel} from '../../model/cui.model';
import {TermModel} from '../../model/term.model';
import {ModifyRequestModel} from '../../model/modify/modify-request.model';

@Component({
  selector: 'app-symptom-editing',
  templateUrl: './symptom-editing.component.html',
  styleUrls: ['./symptom-editing.component.css']
})
export class SymptomEditingComponent implements OnInit {

  hospitals = ['General data', '萬芳醫院', '馬偕醫院', '三軍總醫院'];
  private symptoms: SymptomReferenceModel[] = [];
  private item = 'symptom';
  private cuiModel: CuiModel = {cui_id: 1, cui_number: 'test1', cui_english_name: 'test2', cui_chinese_name: 'test3'};
  private snomed: TermModel = {term_id: 1, term_snomed: 'test4', term_english_name: 'test5', term_chinese_name: 'test6', hospital_id: 1};
  private termModel: TermModel[] = [];

  constructor(
    public dialog: MatDialog,
    private apiModifyService: ApiModifyService,
    private apiQuerysService: ApiQuerysService
  ) { }

  ngOnInit() {
    this.queryData();
    this.termModel.push(new TermModel(1, 'teste7', 'test8', 'test9', 1));
    this.symptoms.push(new SymptomReferenceModel(1, this.cuiModel, this.snomed, this.termModel));
  }

  queryData(): void {
    this.apiQuerysService.httpPost(this.item)
      .subscribe(
        data => {
          this.symptoms = <SymptomReferenceModel[]>data;
        },
      error => {
          console.log(error);
        }
      );
}

  modifyData(action: string, symptom: SymptomReferenceModel): void {
    let modifyRequestModel: ModifyRequestModel = null;
    modifyRequestModel.item = this.item;
    modifyRequestModel.option = action;
    modifyRequestModel.symptom = symptom;
    this.apiModifyService.httpPost(modifyRequestModel)
      .subscribe(
        data => {
          this.queryData();
        },
        error => {
          console.log(error);
        }
      );
  }

  openDialog(action: string, symptom: SymptomReferenceModel): void {
    let dialogRef = this.dialog.open(SymptomEditingDialogComponent, {
      width: '640px',
      data: { action: action, symptom: symptom }
    });

    dialogRef.afterClosed()
      .subscribe(
        result => {
          if (result !== undefined) {
            // if undefined mean null no value return
            this.modifyData(action, result);
          }
        });
  }
}
