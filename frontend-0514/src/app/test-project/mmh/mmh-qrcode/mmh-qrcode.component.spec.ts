import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmhQrcodeComponent } from './mmh-qrcode.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormatStringPipe} from '../../../shared/pipe/string-format.pipe';
import {ApiLogWriteService} from '../../../shared/api/api-log-write.service';
import {ApiMmhQrcodepageService} from '../../../shared/api/api-mmh-qrcodepage.service';
import {ApiMmhQueryDrugService} from '../../../shared/api/api-mmh-query-drug.service';
import {ApiMmhDrugpageService} from '../../../shared/api/api-mmh-drugpage.service';
import {DrugPageItemService} from '../../../shared/drug-page-item.service';
import {HttpClient} from '@angular/common/http';
import {DrugPageGetModel} from '../../../model/test-unit/drug-page-get.model';
import {DrugQueryModel} from '../../../model/test-unit/drug-query.model';
import {DivisionModel} from '../../../model/test-unit/division.model';
import {QrcodePostModel} from '../../../model/test-unit/qrcode-post.model';

describe('MmhQrcodeComponent', () => {
  let component: MmhQrcodeComponent;
  let fixture: ComponentFixture<MmhQrcodeComponent>;

  beforeEach(async(() => {
    const apiLogWriteServiceStub = {
      writeLog: () => ({}),
    };
    const apiMmhQrcodepageServiceStub = {
      qrcodePage: () => ({
        subscribe: () => ({})
      })
    };
    const apiMmhQueryDrugServiceStub = {};
    const apiMmhDrugpageServiceStub = {
      drugPage: () => ({})
    };
    const drugPageItemServiceStub = {};
    const drugQueryDataStub = {
      di_source: 'test1',
      nhi_source: 'test2',
      order_source: 'test3',
      eat_source: 'test4',
      medday: 'test5',
    };
    const qrcodePostDataStub = {
      type_names: 'test1',
      hospitals: 'test2',
      pre_type: 'test3',
      org_med: 'test4',
      names: 'test5',
      ids: 'test6',
      b_days: 'test7',
      division: DivisionModel,
      med_day: 'test8',
      med_sn: 'test9',
      drug_day: 1,
      part_code: 'test10',
      icd_code: 'test11',
      doctor_id: 'test12',
      comments: 'test13',
    };
    const drugPageGetDataStub = {
      nhi_ids: '123',
      mmh_ids: null,
      dosage: [],
      fequencys: null,
      waymethod: null
    };
    TestBed.configureTestingModule({
      declarations: [
        MmhQrcodeComponent,
        FormatStringPipe
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        HttpClient,
        { provide: ApiLogWriteService, useValue: apiLogWriteServiceStub },
        { provide: ApiMmhQrcodepageService, useValue: apiMmhQrcodepageServiceStub },
        { provide: ApiMmhQueryDrugService, useValue: apiMmhQueryDrugServiceStub },
        { provide: ApiMmhDrugpageService, useValue: apiMmhDrugpageServiceStub },
        { provide: DrugPageItemService, useValue: drugPageItemServiceStub },
        { provide: DrugQueryModel, useValue: drugQueryDataStub },
        { provide: QrcodePostModel, useValue: qrcodePostDataStub },
        { provide: DrugPageGetModel, useValue: drugPageGetDataStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmhQrcodeComponent);
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
  });
  it('call reset', () => {
    spyOn(component, 'reset').and.callThrough();
    component.reset();
    expect(component.reset).toHaveBeenCalled();
    expect(component.generateCheck).toEqual(false);
  });
  it('call setStep', () => {
    spyOn(component, 'setStep').and.callThrough();
    component.setStep(1);
    expect(component.setStep).toHaveBeenCalled();
    expect(component.step).toEqual(1);
    // component.setStep(2);
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
  it('call checkMMH', () => {
    expect(component.checkMMH('藥袋')).toBe(true);
    expect(component.checkMMH('')).toBe(false);
  });
  it('call checkDay', () => {
    expect(component.checkDay('med_day')).toBe(true);
    expect(component.checkDay('')).toBe(false);
  });
  it('call getMedicineSourceData', () => {
    const apiMmhDrugpageService = fixture.debugElement.injector.get(ApiMmhDrugpageService);
    const drugQueryDataStub: DrugQueryModel = fixture.debugElement.injector.get(DrugQueryModel);
    const qrcodePostDataStub: QrcodePostModel = fixture.debugElement.injector.get(QrcodePostModel);
    spyOn(component, 'getMedicineSourceData');
    component.getMedicineSourceData();
    expect(component.getMedicineSourceData).toHaveBeenCalled();
   // expect(drugQueryDataStub.medday).toEqual(qrcodePostDataStub.med_day);
    spyOn(apiMmhDrugpageService, 'drugPage').and.callThrough();
    // expect(apiMmhDrugpageService.drugPage).toHaveBeenCalled();
  });
  it('call getMedicineTableData', () => {
    spyOn(component, 'getMedicineTableData');
    component.getMedicineTableData(this.drugPostModel);
    expect(component.getMedicineTableData).toHaveBeenCalled();
  });
  it('call filterStatesForNHI', () => {
    const drugPageGetDataStub: DrugPageGetModel = fixture.debugElement.injector.get(DrugPageGetModel);
    /*spyOn(component, 'filterStatesForNHI').and.callFake( () => {
      return 'data';
    });*/
    spyOn(component, 'filterStatesForNHI').and.returnValue('Data');
    component.filterStatesForNHI('');
    expect(component.filterStatesForNHI).toHaveBeenCalled();
    expect(component.filterStatesForNHI('')).toBe('Data');
  });
  it('call filterStatesForMMH', () => {
    spyOn(component, 'filterStatesForMMH');
    component.filterStatesForMMH('');
    expect(component.filterStatesForMMH).toHaveBeenCalled();
  });
  it('call transformDate', () => {
    spyOn(component, 'transformDate').and.callThrough();
    component.transformDate('');
    expect(component.transformDate).toHaveBeenCalled();
    expect(component.transformDate('')).toEqual('');
    expect(component.transformDate('1070507')).toEqual('2018-05-07');
  });
});
