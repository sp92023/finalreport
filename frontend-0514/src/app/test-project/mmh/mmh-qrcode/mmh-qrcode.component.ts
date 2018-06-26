import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { ApiLogWriteService} from "../../../shared/api/api-log-write.service";
import { ApiMmhQrcodepageService } from "../../../shared/api/api-mmh-qrcodepage.service";
import { Subscription } from "rxjs/Subscription";
import { QrcodePageGetModel } from "../../../model/test-unit/qrcode-page-get.model";
import { DrugQueryModel } from "../../../model/test-unit/drug-query.model";
import { ApiMmhQueryDrugService } from "../../../shared/api/api-mmh-query-drug.service";
import { ApiMmhDrugpageService } from "../../../shared/api/api-mmh-drugpage.service";
import { QrcodePostModel } from "../../../model/test-unit/qrcode-post.model";
import { DrugPageGetModel } from "../../../model/test-unit/drug-page-get.model";
import { DrugPostModel } from "../../../model/test-unit/drug-post.model";
import { DrugDetailPostModel } from "../../../model/test-unit/drug-detail-post.model";
import { DrugDetailGetModel } from "../../../model/test-unit/drug-detail-get.model";
import { DrugPageItemService } from "../../../shared/drug-page-item.service";


@Component({
  selector: 'app-qrcode',
  templateUrl: './mmh-qrcode.component.html',
  styleUrls: ['./mmh-qrcode.component.css']
})
export class MmhQrcodeComponent implements OnInit {

  private subsQrcodePage: Subscription;
  private qrcodePageData: QrcodePageGetModel;
  private qrcodePostData: QrcodePostModel;
  private drugQueryData: DrugQueryModel;
  private drugPageGetData: DrugPageGetModel;
  private drugPostData: DrugPostModel[] = [];
  private drugDetail: DrugDetailGetModel[] = [];

  stateCtrl: FormControl;
  filteredStatesForNHI: Observable<any[]>;
  filteredStatesForMMH: Observable<any[]>;

  generateCheck = false;
  step = 0;
  medicineVersion = [];
  medicineOption = [];
  addMedicineTitle = [];
  medicineDetailTitle = [];
  medicineText = '';

  constructor(
    private apiLogWriteService: ApiLogWriteService,
    private apiMmhQrcodepageService: ApiMmhQrcodepageService,
    private apiMmhQueryDrugService: ApiMmhQueryDrugService,
    private apiMmhDrugpageService: ApiMmhDrugpageService,
    private drugPageItemService: DrugPageItemService
  ) {
    this.medicineVersion = this.drugPageItemService.medicineVersion;
    this.medicineOption = this.drugPageItemService.mmhMedicineOption;
    this.addMedicineTitle = this.drugPageItemService.mmhAddMedicineTitle;
    this.medicineDetailTitle = this.drugPageItemService.medicineDetailTitle;
    this.apiLogWriteService.writeLog('MmhQrcodeComponent | Work');
    this.stateCtrl = new FormControl();
    this.filteredStatesForNHI = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStatesForNHI(state) : this.drugPageGetData.nhi_ids.slice())
      );
    this.filteredStatesForMMH = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStatesForMMH(state) : this.drugPageGetData.mmh_ids.slice())
      );
  }

  ngOnInit() {
    this.subsQrcodePage = this.apiMmhQrcodepageService.qrcodePage()
      .subscribe(
        data => {
          this.qrcodePageData = <QrcodePageGetModel>data;
          this.drugQueryData = new DrugQueryModel(
            this.qrcodePageData.di_source[0].toString(),
            this.qrcodePageData.nhi_source[0].toString(),
            this.qrcodePageData.order_source[0].toString(),
            this.qrcodePageData.eat_source[0].toString(),
            null
          );
          this.qrcodePostData = new QrcodePostModel(
            this.qrcodePageData.type_names[0].toString(),
            this.qrcodePageData.hospitals[0].toString(),
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
    this.apiLogWriteService.writeLog('MmhQrcodeComponent | Add');
    this.drugPostData.push(new DrugPostModel(null, null, null, null, null));
  }

  delete() {
    this.apiLogWriteService.writeLog('MmhQrcodeComponent | Delete');
    this.drugPostData.pop();
  }

  generate() {
    this.apiLogWriteService.writeLog('MmhQrcodeComponent | Generate');
    this.step = 3;
    this.drugDetail = [];
    this.medicineText = '';
    for (let i = 0; i < this.medicineOption.length; i++) {
      for (let j = 0; j < this.medicineOption[i].length; j++) {
        if (this.medicineOption[i][j][1] != 'type_names') {
          if (this.medicineOption[i][j][1] == 'division') {
            this.medicineText = this.medicineText + this.qrcodePostData[this.medicineOption[i][j][1]]['Code'];
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
    this.apiLogWriteService.writeLog('MmhQrcodeComponent | Reset');
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

  checkMMH(str: string) {
    if (str == '藥袋') {
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
    this.drugQueryData.medday = this.qrcodePostData.med_day;
    this.apiMmhDrugpageService.drugPage(this.drugQueryData)
      .subscribe(
        data => {
          this.drugPageGetData = <DrugPageGetModel>data;
        }
      );
  }

  getMedicineTableData(drugPostModel: DrugPostModel) {
    let query_type = '';
    let query_value = '';
    if (this.checkMMH(this.qrcodePostData.type_names)) {
      query_type = 'mmh';
      query_value = drugPostModel.mmh_ids;
    } else {
      query_type = 'nhi';
      query_value = drugPostModel.nhi_ids;
    }
    const tmpDrugQuery = new DrugDetailPostModel(
      this.drugQueryData.di_source,
      this.drugQueryData.nhi_source,
      this.drugQueryData.order_source,
      query_type,
      query_value,
      this.transformDate(this.qrcodePostData.med_day),
      null
      );
    this.apiMmhQueryDrugService.drugDetail(tmpDrugQuery)
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

  filterStatesForMMH(name: string) {
    return this.drugPageGetData.mmh_ids.filter(state =>
      state.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  transformDate(value: string): string {
    let rc: string='';
    if(value!=''){
      let sourceYear = value.substr(0,3);
      let currentYear = parseInt(sourceYear, 10) + 1911;
      rc = currentYear + '-' + value.substr(3,2) + '-' + value.substr(5,2);
    }
    return rc;
  }
}
