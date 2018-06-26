import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { ClientIpService } from '../shared/client-ip.service';
import { ApiClockInService } from '../shared/api/api-clock-in.service';
import { UserProfileService } from '../shared/user-profile.service';
import { ClockInComponent } from './clock-in.component';
import {ReversePipe} from '../shared/pipe/reverse.pipe';
import {ApiLogWriteService} from '../shared/api/api-log-write.service';

describe('ClockInComponent', () => {
  let comp: ClockInComponent;
  let fixture: ComponentFixture<ClockInComponent>;

  beforeEach(() => {
    const cookieServiceStub = {
      get: () => ({})
    };
    const clientIpServiceStub = {};
    const apiClockInServiceStub = {
      clockList: () => ({}),
      clockRecordsChanged: {
        subscribe: () => ({})
      },
      getClockRecords: () => ({}),
      addClock: () => ({})
    };
    const userProfileServiceStub = {
      getUserModel: () => ({})
    };
    const apiLogWriteServiceStub = {
      writeLog: () => ({})
    }
    TestBed.configureTestingModule({
      declarations: [
        ClockInComponent,
        ReversePipe,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: CookieService, useValue: cookieServiceStub },
        { provide: ClientIpService, useValue: clientIpServiceStub },
        { provide: ApiClockInService, useValue: apiClockInServiceStub },
        { provide: UserProfileService, useValue: userProfileServiceStub },
        { provide: ApiLogWriteService, useValue: apiLogWriteServiceStub },
      ]
    });
    fixture = TestBed.createComponent(ClockInComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const apiClockInServiceStub: ApiClockInService = fixture.debugElement.injector.get(ApiClockInService);
      spyOn(apiClockInServiceStub, 'clockList');
      spyOn(apiClockInServiceStub, 'getClockRecords');
      comp.ngOnInit();
      expect(apiClockInServiceStub.clockList).toHaveBeenCalled();
      // expect(apiClockInServiceStub.getClockRecords).toHaveBeenCalled();
    });
  });

  describe('clock', () => {
    it('makes expected calls', () => {
      const apiClockInServiceStub: ApiClockInService = fixture.debugElement.injector.get(ApiClockInService);
      spyOn(comp, 'getClientIpCheckCookie').and.callFake(() => {
        return true;
      });
      spyOn(apiClockInServiceStub, 'addClock');
      comp.clock();
      expect(comp.getClientIpCheckCookie).toHaveBeenCalled();
      expect(apiClockInServiceStub.addClock).toHaveBeenCalled();
    });
    it('call', () => {
      spyOn(comp, 'getClientIpCheckCookie').and.callFake(() => {
        return false;
      });
      spyOn(comp, 'clock').and.callThrough();
      comp.clock();
      expect(comp.clock).toHaveBeenCalled();
    });
  });

  describe('getClientIpCheckCookie', () => {
    it('makes expected calls', () => {
      const cookieServiceStub: CookieService = fixture.debugElement.injector.get(CookieService);
      spyOn(cookieServiceStub, 'get');
      comp.getClientIpCheckCookie();
      // expect(cookieServiceStub.get).toHaveBeenCalled();
    });
  });

  describe('export', () => {
    it('call export', () => {
      spyOn(comp, 'export').and.callThrough();
      comp.export();
      expect(comp.export).toHaveBeenCalled();
    });
  });

});
