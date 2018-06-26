import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogComponent } from './log.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ApiLogDisplayService} from '../../shared/api/api-log-display.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../../shared/md5-hash.service';
import {ApiLogWriteService} from '../../shared/api/api-log-write.service';
import {UserProfileService} from '../../shared/user-profile.service';
import {MicrosoftAuthService} from '../../shared/microsoft-auth.service';
import {GoogleAuthService} from '../../shared/google-auth.service';
import {Router} from '@angular/router';
import {AuthService} from 'angularx-social-login';
import {TypeModel} from '../../model/test-unit/type.model';
import {LogMessageModel} from '../../model/log-message.model';
import { of } from 'rxjs/observable/of';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;

  beforeEach(async(() => {
    const routerStub = {};
    const authServiceStub = {};
    const googleAuthServiceStub = {
      getLoggedIn: () => ({}),
      getSocialUserMail: () => ({}),
      setSocialUser: () => ({})
    };
    const microsoftAuthServiceStub = {
      getLoggedIn: () => ({}),
      getSocialUserMail: () => ({})
    };
    const userProfileServiceStub = {
      changeUser: () => ({}),
      getUserModel: () => ({}),
      getLoggedIn: () => ({}),
      signOut: () => ({}),
    };
    const apiLogWriteServiceStub = {
      writeLog: () => ({})
    };
    const apiLogDisplayServiceStub = {
      displayLog: () => ({
        subscribe: () => ({})
      }),
    };
    const typeModelStub = {};
    const logMessageModelStub = {};
    TestBed.configureTestingModule({
      declarations: [ LogComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        // { provide: HttpClient, useValue: httpclientStub },
        // { provide: HttpHandler, useValue: httpHandlerStub },
        { provide: UserProfileService, useValue: userProfileServiceStub },
        { provide: ApiLogWriteService, useValue: apiLogWriteServiceStub },
        { provide: ApiLogDisplayService, useValue: apiLogDisplayServiceStub },
        { provide: MicrosoftAuthService, useValue: microsoftAuthServiceStub },
        { provide: GoogleAuthService, useValue: googleAuthServiceStub },
        { provide: AuthService, useValue: authServiceStub },
        { provide: Router, useValue: routerStub },
        { provide: TypeModel, useValue: typeModelStub },
        { provide: LogMessageModel, useValue: logMessageModelStub },
      ]
    });
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('call search', () => {
    const data = '123';
    spyOn(component, 'search').and.callThrough();
    component.search();
    expect(component.search).toHaveBeenCalled();
    const apiLogDisplayService = fixture.debugElement.injector.get(ApiLogDisplayService);
   // spyOn(apiLogDisplayService, 'displayLog').and.returnValue(of(data));
    apiLogDisplayService.displayLog('').subscribe(
      (value) => {
       // component.message = <LogMessageModel>value;
      }
  );
    component.search();
    fixture.detectChanges();
   // expect(apiLogDisplayService.displayLog).toHaveBeenCalled();
    // expect(component.message).toEqual(data);
   // expect(component.message.message).toBe('123');
  });
});
