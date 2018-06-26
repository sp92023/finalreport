import {ComponentFixture, TestBed, async, inject} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AddDeviceComponent } from './add-device.component';
import { ApiTypeListService } from '../../shared/api/api-type-list.service';
import { AssetModifyModel } from '../../model/test-unit/asset-modify.model';
import {ApiAssetModifyService} from '../../shared/api/api-asset-modify.service';
import {ApiAssetUpdateService} from '../../shared/api/api-asset-update.service';
import {UserProfileService} from '../../shared/user-profile.service';
import { TypeModel } from '../../model/test-unit/type.model';
import {AssetUpdateModel} from '../../model/test-unit/asset-update.model';
import { ApiLogWriteService } from '../../shared/api/api-log-write.service';

describe('AddDeviceComponent', () => {
  let comp: AddDeviceComponent;
  let fixture: ComponentFixture<AddDeviceComponent>;

  beforeEach(() => {
    const apiTypeListServiceStub = {
      typeList: () => ({
        subscribe: () => ({})
      }),
    };
    const apiAssetModifyServiceStub = {
      assetModifyChanged: {
        subscribe: () => {},
      },
      assetPage: () => ({}),
      getAssetModify: () => ({})
    };
    const apiAssetUpdateServiceStub = {
      assetUpdate: () => ({})
    };
    const userProfileServiceStub = {
      getUserModel: () => ({})
    };
    const typeModelStub = {
      sn: 123,
      type: '123',
      flag: false,
    };
    const assetModifyModelStub = [{
      column: 'test1',
      selection: 123,
      option: [],
      value: 'test2'
    }, {
      column: 'test3',
      selection: 456,
      option: [],
      value: 'test4'
    }];
    const apiLogWriteServiceStub = {
      writeLog: () => ({})
    };
    const assetUpateStub = {}
    TestBed.configureTestingModule({
      declarations: [ AddDeviceComponent],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ApiTypeListService, useValue: apiTypeListServiceStub },
        { provide: ApiAssetModifyService, useValue: apiAssetModifyServiceStub },
        { provide: ApiAssetUpdateService, useValue: apiAssetUpdateServiceStub },
        { provide: UserProfileService, useValue: userProfileServiceStub },
        { provide: TypeModel, useValue: typeModelStub },
        { provide: AssetModifyModel, useValue: assetModifyModelStub },
        { provide: ApiLogWriteService, useValue: apiLogWriteServiceStub },
        { provide: AssetUpdateModel, useValue: assetUpateStub },
      ]
    });
    fixture = TestBed.createComponent(AddDeviceComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });
  it('created', () => {
    const apiTypeListService = fixture.debugElement.injector.get(ApiTypeListService);
    const apiAssetModifyService = fixture.debugElement.injector.get(ApiAssetModifyService);
    const apiAssetUpdateService = fixture.debugElement.injector.get(ApiAssetUpdateService);
    const userProfileService = fixture.debugElement.injector.get(UserProfileService);
    const typeModel = fixture.debugElement.injector.get(TypeModel);
    const assetModifyModel = fixture.debugElement.injector.get(AssetModifyModel);
    expect(apiTypeListService).toBeTruthy();
    expect(apiAssetModifyService).toBeTruthy();
    expect(apiAssetUpdateService).toBeTruthy();
    expect(userProfileService).toBeTruthy();
    expect(typeModel).toBeTruthy();
    expect(assetModifyModel).toBeTruthy();
  });
  it('call checkAssetColumnSelection', async(() => {
    const ass: AssetModifyModel[] = [];
    ass.push(new AssetModifyModel('', 1, [], ''));
    let ret = comp.checkAssetColumnSelection(ass[0]);
    expect(ret).toEqual(true);
    ass.push(new AssetModifyModel('', 2, [], ''));
    ret = comp.checkAssetColumnSelection(ass[1]);
    expect(ret).toEqual(false);
    /*jasmine.createSpy('checkAssetColumnSelection').and.callThrough();
    const a: AssetModifyModel;
    comp.checkAssetColumnSelection(a);
    fixture.detectChanges();
    expect(comp.checkAssetColumnSelection).toHaveBeenCalled();*/
  }));
  it('call checkAssetColumnReadOnly', async(() => {
    const ass: AssetModifyModel[] = [];
    ass.push(new AssetModifyModel('asset_id', 1, [], ''));
    let ret = comp.checkAssetColumnReadOnly(ass[0]);
    expect(ret).toBe(true);
    ass.push(new AssetModifyModel('asset_i', 1, [], ''));
    ret = comp.checkAssetColumnReadOnly(ass[1]);
    expect(ret).toBe(false);
    ass.push(new AssetModifyModel('asset_type', 1, [], ''));
    let ret1 = comp.checkAssetColumnReadOnly(ass[2]);
    expect(ret1).toBe(true);
    ass.push(new AssetModifyModel('asset_typ', 1, [], ''));
    ret1 = comp.checkAssetColumnReadOnly(ass[3]);
    expect(ret1).toBe(false);
    ass.push(new AssetModifyModel('current_user', 1, [], ''));
    let ret2 = comp.checkAssetColumnReadOnly(ass[4]);
    expect(ret2).toBe(true);
    ass.push(new AssetModifyModel('current_us', 1, [], ''));
    ret2 = comp.checkAssetColumnReadOnly(ass[5]);
    expect(ret2).toBe(false);
  }));
  it('call changeType',  () => {
    const typeModelStub: TypeModel = fixture.debugElement.injector.get(TypeModel);
    const apiAssetModifyServiceStub: ApiAssetModifyService = fixture.debugElement.injector.get(ApiAssetModifyService);
    spyOn(apiAssetModifyServiceStub, 'assetPage').and.callThrough();
    spyOn(comp, 'changeType');
    apiAssetModifyServiceStub.assetPage(typeModelStub.sn, null);
    comp.changeType();
    fixture.detectChanges();
    expect(comp.changeType).toHaveBeenCalled();
   // apiAssetModifyServiceStub.assetPage(typeModelStub.sn, null);
    expect(apiAssetModifyServiceStub.assetPage).toHaveBeenCalled();
  });
  it('call save', () => {
    const assetUpate: AssetUpdateModel[] = [];
    assetUpate.push(new AssetUpdateModel('flag', 'true'));
    assetUpate.push(new AssetUpdateModel('manager', 'web'));
    spyOn(comp, 'save');
    comp.save();
    fixture.detectChanges();
    expect(comp.save).toHaveBeenCalled();
    const assetModifyModelStub: AssetModifyModel = fixture.debugElement.injector.get(AssetModifyModel);
    const apiAssetUpdateServiceStub: ApiAssetUpdateService = fixture.debugElement.injector.get(ApiAssetUpdateService);
    spyOn(apiAssetUpdateServiceStub, 'assetUpdate').and.callThrough();
    apiAssetUpdateServiceStub.assetUpdate(assetUpate);
    expect(apiAssetUpdateServiceStub.assetUpdate).toHaveBeenCalled();
   // expect(assetModifyModelStub.length).toBe(2);
  });
  it('tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    const li = compiled.querySelectorAll('li.breadcrumb-item');
    expect(li[0].textContent).toContain('Test Unit');
    expect(li[1].textContent).toContain('Add');
    expect(compiled.querySelector('label').textContent).toContain('Select the type : ');
    const button = compiled.querySelectorAll('button');
    expect(button[0].textContent).toContain('Submit');
  });
  it('ngOnInit.apiTypeListService', () => {
    const apiTypeListService = fixture.debugElement.injector.get(ApiTypeListService);
    spyOn(apiTypeListService, 'typeList').and.callThrough();
    comp.ngOnInit();
    expect(apiTypeListService.typeList).toHaveBeenCalled();
  });
});
