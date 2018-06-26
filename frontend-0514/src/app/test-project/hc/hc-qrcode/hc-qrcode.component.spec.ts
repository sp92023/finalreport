import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HcQrcodeComponent } from './hc-qrcode.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatAutocompleteModule, MatFormFieldModule} from '@angular/material';
import {Pipe, PipeTransform} from "@angular/core";
import {FormatStringPipe} from '../../../shared/pipe/string-format.pipe';
import {ApiLogWriteService} from '../../../shared/api/api-log-write.service';
import {ApiHcQrcodepageService} from '../../../shared/api/api-hc-qrcodepage.service';
import {ApiHcQueryDrugService} from '../../../shared/api/api-hc-query-drug.service';
import {ApiHcDrugpageService} from '../../../shared/api/api-hc-drugpage.service';
import {DrugPageItemService} from '../../../shared/drug-page-item.service';
import {ApiMmhDrugpageService} from '../../../shared/api/api-mmh-drugpage.service';
import {DrugPostModel} from '../../../model/test-unit/drug-post.model';
import {DrugPageGetModel} from '../../../model/test-unit/drug-page-get.model';

describe('HcQrcodeComponent', () => {
  let component: HcQrcodeComponent;
  let fixture: ComponentFixture<HcQrcodeComponent>;

  beforeEach(async(() => {
    const apiLogWriteServiceStub = {
      writeLog: () => ({})
    };
    const apiHcQrcodepageServiceStub = {
      qrcodePage: () => ({
        subscribe: () => ({})
      })
    };
    const apiHcQueryDrugServiceStub = {
      drugDetail: () => ({
        subscribe: () => ({})
      })
    };
    const apiHcDrugpageServiceStub = {
      drugPage: () => ({
        subscribe: () => ({})
      })
    };
    const drugPageItemServiceStub = {
      hcMedicineOption: [
        [['處方籤種類', 'pre_type'], ['原處方醫療機構案件分類', 'org_med'], ['姓名', 'names']],
        [['身份證字號', 'ids'], ['出生年月日', 'b_days'], ['就醫科別', 'division'], ['就醫日期', 'med_day'], ['健保卡就醫序號', 'med_sn']],
        [['給藥日份', 'drug_day'], ['免部分負擔代碼', 'part_code'], ['國際疾病分類碼', 'icd_code'], ['診治醫師代碼', 'doctor_id'], ['備註', 'comments']]
      ],
    };
    const drugPageGetDataStub = {
      nhi_ids: '123',
      mmh_ids: null,
      dosage: [],
      fequencys: null,
      waymethod: null
    };
    // const apiMmhDrugpageService = {};
    TestBed.configureTestingModule({
      declarations: [
        HcQrcodeComponent,
        FormatStringPipe
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        // FormatStringPipe
      ],
      providers: [
        { provide: ApiLogWriteService, useValue: apiLogWriteServiceStub },
        { provide: ApiHcQrcodepageService, useValue: apiHcQrcodepageServiceStub },
        { provide: ApiHcQueryDrugService, useValue: apiHcQueryDrugServiceStub },
        { provide: ApiHcDrugpageService, useValue: apiHcDrugpageServiceStub },
        { provide: DrugPageItemService, useValue: drugPageItemServiceStub },
        { provide: DrugPageGetModel, useValue: drugPageGetDataStub },
        // { provide: ApiMmhDrugpageService, useValue: apiMmhDrugpageService }
      ]
    });
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('call add', () => {
    spyOn(component, 'add').and.callThrough();
    component.add();
    expect(component.add).toHaveBeenCalled();
  });
  it('call delete', () => {
    spyOn(component, 'delete').and.callThrough();
    component.delete();
    expect(component.delete).toHaveBeenCalled();
  });
  it('call generate', () => {
    spyOn(component, 'generate');
    component.generate();
    expect(component.generate).toHaveBeenCalled();
    const drugPageItemServiceStub: DrugPageItemService = fixture.debugElement.injector.get(DrugPageItemService);
    spyOn(drugPageItemServiceStub, 'hcMedicineOption').and.callThrough();
  });
  it('call reset', () => {
    spyOn(component, 'reset').and.callThrough();
    component.reset();
    expect(component.reset).toHaveBeenCalled();
    expect(component.generateCheck).toEqual(false);
  });
  it('call setStep', () => {
    spyOn(component, 'setStep').and.callThrough();
    component.setStep(2);
    expect(component.setStep).toHaveBeenCalled();
    expect(component.step).toEqual(2);
    // spyOn(component, 'getMedicineSourceData').and.callThrough();
    // expect(component.getMedicineSourceData).toHaveBeenCalled();
  });
  it('call nextStep', () => {
    spyOn(component, 'nextStep').and.callThrough();
    component.nextStep();
    expect(component.nextStep).toHaveBeenCalled();
    expect(component.step).toEqual(1);
  });
  it('call prevStep', () => {
    spyOn(component, 'prevStep').and.callThrough();
    component.prevStep();
    expect(component.prevStep).toHaveBeenCalled();
    expect(component.step).toEqual(-1);
  });
  it('call checkDivision', () => {
    expect(component.checkDivision('division')).toBe(true);
    expect(component.checkDivision('')).toBe(false);
  });
  it('call checkDay', () => {
    expect(component.checkDay('med_day')).toBe(true);
    expect(component.checkDay('')).toBe(false);
  });
  it('call getMedicineSourceData', () => {
    spyOn(component, 'getMedicineSourceData').and.callThrough();
    component.getMedicineSourceData();
    expect(component.getMedicineSourceData).toHaveBeenCalled();
    // const apiMmhDrugpageService = fixture.debugElement.injector.get(ApiMmhDrugpageService);
    // spyOn(apiMmhDrugpageService, 'drugPage').and.callThrough();
    // expect(apiMmhDrugpageService.drugPage).toHaveBeenCalled();
  });
  it('call getMedicineTableData', () => {
    this.drugPostModel = new DrugPostModel('', '', '', '', '');
    spyOn(component, 'getMedicineTableData').and.callThrough();
    component.getMedicineTableData(this.drugPostModel);
    expect(component.getMedicineTableData).toHaveBeenCalled();
  });
  it('call filterStatesForNHI', fakeAsync( () => {
    const drugPageGetDataStub: DrugPageGetModel = fixture.debugElement.injector.get(DrugPageGetModel);
    spyOn(component, 'filterStatesForNHI');
    component.filterStatesForNHI('');
    tick();
    expect(component.filterStatesForNHI).toHaveBeenCalled();
   // expect(component.filterStatesForNHI('')).toEqual(drugPageGetDataStub.nhi_ids.filter);
   // expect(drugPageGetDataStub.nhi_ids.filter).toBe(undefined);
  }));
  it('call filterStates', () => {
    spyOn(component, 'filterStates');
    component.filterStates('');
    expect(component.filterStates).toHaveBeenCalled();
  });
});
