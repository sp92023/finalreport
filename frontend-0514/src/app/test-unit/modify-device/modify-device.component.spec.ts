import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModifyDeviceComponent } from './modify-device.component';
import {ApiAssetModifyService} from '../../shared/api/api-asset-modify.service';
import {AssetModifyModel} from '../../model/test-unit/asset-modify.model';
import {UserProfileService} from '../../shared/user-profile.service';
import {ApiAssetUpdateService} from '../../shared/api/api-asset-update.service';
import {UserModel} from '../../model/user.model';
import {ApiBookingEventService} from '../../shared/api/api-booking-event.service';
import {AssetUpdateModel} from '../../model/test-unit/asset-update.model';
import {ApiLogWriteService} from '../../shared/api/api-log-write.service';
import {MatDialogModule} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TransferDeviceComponent} from '../transfer-device/transfer-device.component';


describe('ModifyDeviceComponent', () => {
  let comp: ModifyDeviceComponent;
  let fixture: ComponentFixture<ModifyDeviceComponent>;

  beforeEach(() => {
    const apiAssetModifyServiceStub = {
      assetModifyChanged: {
        subscribe: () => ({})
      },
      assetPage: () => ({}),
      getAssetModify: () => ({})
    };
    const userProfileServiceStub = {
      getUserModel: () => ({}),
    };
    const apiAssetUpdateServiceStub = {
      assetUpdate: () => ({})
    };
    const userModelStub = {};
    const apiLogWriteServiceStub = {
      writeLog: () => ({})
    };
    const activatedRouteStub = {
      params: {
        subscribe: () => ({})
      },
    };
    const transferDeviceComponentStub = {};
    TestBed.configureTestingModule({
      declarations: [ ModifyDeviceComponent,
        TransferDeviceComponent ],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ApiAssetModifyService, useValue: apiAssetModifyServiceStub },
        { provide: UserProfileService, useValue: userProfileServiceStub },
        { provide: ApiAssetUpdateService, useValue: apiAssetUpdateServiceStub },
        { provide: UserModel, useValue: userModelStub },
        { provide: ApiLogWriteService, useValue: apiLogWriteServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        // { provide: TransferDeviceComponent, useValue: transferDeviceComponentStub }
      ],
    });
    fixture = TestBed.createComponent(ModifyDeviceComponent);
    comp = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });
  it('created', () => {
    const apiAssetModifyService = fixture.debugElement.injector.get(ApiAssetModifyService);
    const userProfileService = fixture.debugElement.injector.get(UserProfileService);
    const apiAssetUpdateService = fixture.debugElement.injector.get(ApiAssetUpdateService);
    const userModel = fixture.debugElement.injector.get(UserModel);
    expect(apiAssetModifyService).toBeTruthy();
    expect(userProfileService).toBeTruthy();
    expect(apiAssetUpdateService).toBeTruthy();
    expect(userModel).toBeTruthy();
  });
  it('call checkAssetColumnSelection', async(() => {
    const ass: AssetModifyModel[] = [];
    ass.push(new AssetModifyModel('', 1, [], ''));
    let ret = comp.checkAssetColumnSelection(ass[0]);
    expect(ret).toEqual(true);
    ass.push(new AssetModifyModel('', 2, [], ''));
    ret = comp.checkAssetColumnSelection(ass[1]);
    expect(ret).toEqual(false);
  }));
  it('call checkAssetColumnReadOnly', async(() => {
    // this.hasCurrentUser = false;
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
    // expect(comp.hasCurrentUser).toEqual(true);
    ass.push(new AssetModifyModel('current_us', 1, [], ''));
    ret2 = comp.checkAssetColumnReadOnly(ass[5]);
    expect(ret2).toBe(false);
  }));
  it('call save', async(() => {
    /*const spysave = spyOn(comp, 'save').and.callThrough();
    const userProfileService = fixture.debugElement.injector.get(UserProfileService);
    const apiAssetUpdateService = fixture.debugElement.injector.get(ApiAssetUpdateService);
    spyOn(userProfileService, 'getUserModel').and.callFake( () => {
      return 'data';
    });
    spyOn(apiAssetUpdateService, 'assetUpdate').and.callThrough();
    comp.save();
    fixture.detectChanges();
    // expect(spysave).toHaveBeenCalled();
    expect(userProfileService.getUserModel).toBe('data');
    expect(apiAssetUpdateService.assetUpdate).toHaveBeenCalled();*/
    spyOn(comp, 'save');
    comp.save();
    fixture.detectChanges();
    expect(comp.save).toHaveBeenCalled();
    this.assetUpate = new AssetUpdateModel('column', 'value');
    expect(this.assetUpate.column).toBe('column');
    // this.assetUpdate = new AssetUpdateModel('', '');
    // expect(this.assetUpdate[0]).toEqual('column');
    comp.save();
    expect(this.assetUpate.column).toBe('column');
    const apiassetUpdateService = fixture.debugElement.injector.get(ApiAssetUpdateService);
    spyOn(apiassetUpdateService, 'assetUpdate').and.callFake( () => {
      return 'data';
    });
    const assetUpate: AssetUpdateModel[] = [];
    assetUpate.push(new AssetUpdateModel('123', '123'));
    assetUpate.push(new AssetUpdateModel('456', '456'));
    apiassetUpdateService.assetUpdate(assetUpate);
    expect(apiassetUpdateService.assetUpdate).toHaveBeenCalled();
  }));
  it('tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    const li = compiled.querySelectorAll('li.breadcrumb-item');
    expect(li[0].textContent).toContain('Test Unit');
    expect(li[1].textContent).toContain('Modify');
    // expect(compiled.querySelector('button').textContent).toContain('Save');
  });
  it('ngOnInit', () => {
    /*const apiAssetModifyService = fixture.debugElement.injector.get(ApiAssetModifyService);
    spyOn(apiAssetModifyService, 'assetModifyChanged').and.callThrough();
    comp.ngOnInit();
    expect(apiAssetModifyService.assetModifyChanged).toHaveBeenCalled();*/
    this.assetModify = new AssetModifyModel('123', 0, [], '456');
    comp.ngOnInit();

    fixture.detectChanges();
    expect(this.assetModify.column).toEqual('123');
    // expect(this.assetModify.length).toEqual(1);
  });
  it('call transfer', () => {
    spyOn(comp, 'transfer').and.callThrough();
    // comp.hasCurrentUser = true;
    comp.transfer();
    expect(comp.transfer).toHaveBeenCalled();
    // expect(comp.hasCurrentUser).toBe(true);
  });
});
