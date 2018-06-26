import { Subscription } from "rxjs/Subscription";
import { Component, OnInit } from '@angular/core';
import { startWith } from "rxjs/operators/startWith";
import { map } from "rxjs/operators/map";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import {MatDialog} from '@angular/material';

import {QrcodePageGetModel} from "../../../model/test-unit/qrcode-page-get.model";
import {ApiHcQueryDrugService} from "../../../shared/api/api-hc-query-drug.service";
import {QrcodePostModel} from "../../../model/test-unit/qrcode-post.model";
import {DrugPostModel} from "../../../model/test-unit/drug-post.model";
import {DrugDetailGetModel} from "../../../model/test-unit/drug-detail-get.model";
import { DrugPageGetModel } from "../../../model/test-unit/drug-page-get.model";
import { ApiHcQrcodepageService } from "../../../shared/api/api-hc-qrcodepage.service";
import { DrugDetailPostModel } from "../../../model/test-unit/drug-detail-post.model";
import { ApiLogWriteService } from "../../../shared/api/api-log-write.service";
import { ApiHcDrugpageService } from "../../../shared/api/api-hc-drugpage.service";
import { DrugPageItemService } from "../../../shared/drug-page-item.service";

@Component({
  selector: 'app-nhi-qrcode',
  templateUrl: './hc-qrcode.component.html',
  styleUrls: ['./hc-qrcode.component.css']
})
export class HcQrcodeComponent implements OnInit {

  private subsQrcodePage: Subscription;
  private qrcodePageData: QrcodePageGetModel;
  private qrcodePostData: QrcodePostModel;
  private drugPageGetData: DrugPageGetModel;
  private drugPostData: DrugPostModel[] = [];
  private drugDetail: DrugDetailGetModel[] = [];

  stateCtrlForNHI: FormControl;
  stateCtrl: FormControl;
  filteredStatesForNHI: Observable<any[]>;
  filteredStates: Observable<any[]>;

  generateCheck = false;
  step = 0;
  medicineOption = [];
  addMedicineTitle = [];
  medicineDetailTitle = [];
  medicineText = '';
  medicineCodeList = [];
  medicineDosageList = [];
  medicineFequencys = [];
  medicineMethods = [];

  constructor(
    private apiLogWriteService: ApiLogWriteService,
    private apiHcQrcodepageService: ApiHcQrcodepageService,
    private apiHcQueryDrugService: ApiHcQueryDrugService,
    private apiHcDrugpageService: ApiHcDrugpageService,
    private drugPageItemService: DrugPageItemService
  ) {
    this.medicineOption = this.drugPageItemService.hcMedicineOption;
    this.addMedicineTitle = this.drugPageItemService.hcAddMedicineTitle;
    this.medicineDetailTitle = this.drugPageItemService.medicineDetailTitle;
    this.apiLogWriteService.writeLog('HcQrcodeComponent | Work');
    this.stateCtrlForNHI = new FormControl();
    this.stateCtrl = new FormControl();
    this.filteredStatesForNHI = this.stateCtrlForNHI.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStatesForNHI(state) : this.drugPageGetData.nhi_ids.slice())
      );
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.qrcodePageData.hospitals.slice())
      );
  }

  ngOnInit() {
    this.subsQrcodePage = this.apiHcQrcodepageService.qrcodePage()
      .subscribe(
        data => {
          this.qrcodePageData = <QrcodePageGetModel>data;
          this.qrcodePostData = new QrcodePostModel(
            null,
            null,
            this.qrcodePageData.pre_type[0].toString(),
            this.qrcodePageData.org_med[0].toString(),
            this.qrcodePageData.names[0].toString(),
            this.qrcodePageData.ids[0].toString(),
            this.qrcodePageData.b_days[0].toString(),
            this.qrcodePageData.division[0],
            this.qrcodePageData.med_day[0].toString(),
            this.qrcodePageData.med_sn[0].toString(),
            this.qrcodePageData.drug_day[0],
            this.qrcodePageData.part_code[0].toString(),
            this.qrcodePageData.icd_code[0].toString(),
            this.qrcodePageData.doctor_id[0].toString(),
            this.qrcodePageData.comments[0].toString()
          )
        }
      )
  }

  add() {
    this.apiLogWriteService.writeLog('HcQrcodeComponent | Add');
    this.drugPostData.push(new DrugPostModel(null, null, null, null, null));
  }

  delete() {
    this.apiLogWriteService.writeLog('HcQrcodeComponent | Delete');
    this.drugPostData.pop();
  }

  generate() {
    this.apiLogWriteService.writeLog('HcQrcodeComponent | Generate');
    this.step = 3;
    this.drugDetail = [];
    this.medicineText = this.qrcodePostData['hospitals'] + ';';
    for (let i = 0; i < this.medicineOption.length; i++) {
      for (let j = 0; j < this.medicineOption[i].length; j++) {
        if (this.medicineOption[i][j][1] != 'type_names') {
          if (this.medicineOption[i][j][1] == 'division') {
            this.medicineText = this.medicineText + this.qrcodePostData[this.medicineOption[i][j][1]]['code'];
          } else {
            this.medicineText = this.medicineText + this.qrcodePostData[this.medicineOption[i][j][1]];
          }
          this.medicineText = this.medicineText + ';';
        }
      }
    }
    for (let i = 0; i < this.drugPostData.length; i++) {
      this.getMedicineTableData(this.drugPostData[i]);
      for (let j = 0; j < this.addMedicineTitle.length; j++) {
        if (j == 0) {
          if (this.drugPostData[i][this.addMedicineTitle[j][1]] != null) {
            this.medicineText = this.medicineText + this.drugPostData[i][this.addMedicineTitle[j][1]];
          } else if (this.drugPostData[i][this.addMedicineTitle[j][2]] != null) {
            this.medicineText = this.medicineText + this.drugPostData[i][this.addMedicineTitle[j][2]];
          } else {
            this.medicineText = this.medicineText + '';
          }
        } else {
          this.medicineText = this.medicineText + this.drugPostData[i][this.addMedicineTitle[j][1]];
        }
        this.medicineText = this.medicineText + ';';
      }
      this.medicineText = this.medicineText + parseInt(this.drugPostData[i]['dosage'], 10) * this.qrcodePostData['drug_day'] + ';';
    }
    this.generateCheck = true;
  }

  reset() {
    this.apiLogWriteService.writeLog('HcQrcodeComponent | Reset');
    this.generateCheck = false;
  }

  setStep(index: number) {
    this.step = index;
    if (this.step == 2) {
      this.getMedicineSourceData();
    }
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  checkDivision(str: string) {
    if (str == 'division') {
      return true;
    } else {
      return false;
    }
  }

  checkDay(str: string) {
    if (str == 'med_day') {
      return true;
    } else {
      return false;
    }
  }

  getMedicineSourceData() {
    this.apiHcDrugpageService.drugPage()
      .subscribe(
        data => {
          this.drugPageGetData = <DrugPageGetModel>data;
          this.medicineCodeList = this.drugPageGetData.nhi_ids;
          this.medicineDosageList = this.drugPageGetData.dosage;
          this.medicineFequencys = this.drugPageGetData.fequencys;
          this.medicineMethods = this.drugPageGetData.waymethod;
        }
      );
  }

  getMedicineTableData(drugPostModel: DrugPostModel) {
    const tmpDrugQuery = new DrugDetailPostModel(
      null,
      null,
      null,
      null,
      null,
      null,
      drugPostModel.nhi_ids
    );
    this.apiHcQueryDrugService.drugDetail(tmpDrugQuery)
      .subscribe(
        data => {
          this.drugDetail.push(<DrugDetailGetModel>data);
        }
      );
  }

  filterStatesForNHI(name: string) {
    return this.drugPageGetData.nhi_ids.filter(state =>
      state.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  filterStates(name: string) {
    return this.qrcodePageData.hospitals.filter(state =>
      state['name'].toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

}
