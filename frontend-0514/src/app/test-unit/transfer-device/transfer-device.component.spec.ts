import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Inject, NO_ERRORS_SCHEMA} from '@angular/core';
import { TransferDeviceComponent } from './transfer-device.component';
// import { MatDialogRef } from '@angular/material';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ApiLogWriteService} from '../../shared/api/api-log-write.service';
import {ApiTransferListUserService} from '../../shared/api/api-transfer-list-user.service';
import {ApiTransferAssetService} from '../../shared/api/api-transfer-asset.service';
import {TransferHistoryModel} from '../../model/test-unit/transfer-history.model';

describe('TransferDeviceComponent', () => {
  let comp: TransferDeviceComponent;
  let fixture: ComponentFixture<TransferDeviceComponent>;

  beforeEach(() => {
    const matDialogRefStub = {
      close: () => ({})
    };
    const matDialogDataStub = {};
    const apiTransferListUserServiceStub = {
      listUser: () => ({
        subscribe: () => ({}),
      })
    };
    const apiTransferAssetServiceStub = {
      transferAsset: () => ({
        subscribe: () => ({}),
      }),
    };
    const apiLogWriteServiceStub = {
      writeLog: () => ({}),
    };
    TestBed.configureTestingModule({
      declarations: [ TransferDeviceComponent ],
      imports: [
        MatDialogModule,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefStub },
        { provide: MAT_DIALOG_DATA, useValue: matDialogDataStub },
        { provide: ApiTransferListUserService, useValue: apiTransferListUserServiceStub },
        { provide: ApiTransferAssetService, useValue: apiTransferAssetServiceStub },
        { provide: ApiLogWriteService, useValue: apiLogWriteServiceStub },
      ]
    });
    fixture = TestBed.createComponent(TransferDeviceComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });
  it('call transferAsset', () => {
    spyOn(comp, 'transferAsset').and.callThrough();
    comp.transferAsset();
    expect(comp.transferAsset).toHaveBeenCalled();
    const apiLogWriteService = fixture.debugElement.injector.get(ApiLogWriteService);
    spyOn(apiLogWriteService, 'writeLog').and.callThrough();
    apiLogWriteService.writeLog('');
    expect(apiLogWriteService.writeLog).toHaveBeenCalled();
    const apiTransferAssetService = fixture.debugElement.injector.get(ApiTransferAssetService);
    spyOn(apiTransferAssetService, 'transferAsset').and.callThrough();
    const transferHistoryModel = new TransferHistoryModel(parseInt(this.assetId, 10), '', this.currentUser, 'web');
    // comp.apiTransferAssetService.transferAsset(transferHistoryModel);
    // expect(comp.apiTransferAssetService.transferAsset).toHaveBeenCalled();
  });
  it('call ngOnInit', () => {
    spyOn(comp, 'ngOnInit').and.callThrough();
    comp.ngOnInit();
    expect(comp.ngOnInit).toHaveBeenCalled();
  });
});
