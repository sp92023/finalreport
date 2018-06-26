import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupComponent } from './user-group.component';
import {FormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ApiUserListService} from '../../shared/api/api-user-list.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../../shared/md5-hash.service';
import {ApiUsergroupListService} from '../../shared/api/api-usergroup-list.service';
import {ApiUsergroupUpdateService} from '../../shared/api/api-usergroup-update.service';
import {ApiLogWriteService} from '../../shared/api/api-log-write.service';
import {UserProfileService} from '../../shared/user-profile.service';
import {MicrosoftAuthService} from '../../shared/microsoft-auth.service';
import {GoogleAuthService} from '../../shared/google-auth.service';
import {Router} from '@angular/router';
import {AuthService, AuthServiceConfig} from 'angularx-social-login';
import {UserForAdminModel} from '../../model/admin/user-for-admin.model';
import {UserGroupModel} from '../../model/admin/user-group.model';

describe('UserGroupComponent', () => {
  let component: UserGroupComponent;
  let fixture: ComponentFixture<UserGroupComponent>;

  beforeEach(async(() => {
    const routerStub = {};
    const authServiceConfigStub = {
      // forEach: () => ({})
    };
    const apiUsergroupListServiceStub = {
      usergroupList: () => ({
        subscribe: () => ({})
      }),
    };
    const apiUserListServiceStub = {
      userList: () => ({
        subscribe: () => ({}),
      }),
    };
    const apiLogWriteServiceStub = {
      writeLog: () => ({}),
    };
    const apiUsergroupUpdateServiceStub = {
      usergroupUpdate: () => ({
        subscribe: () => ({})
      }),
    };
    const userProfileServiceStub = {
      changeUser: () => ({}),
      getUserModel: () => ({}),
      getLoggedIn: () => ({}),
      signOut: () => ({}),
    };
    const microsoftAuthServiceStub = {
      getLoggedIn: () => ({}),
      getSocialUserMail: () => ({})
    };
    const googleAuthService = {
      getLoggedIn: () => ({}),
      getSocialUserMail: () => ({}),
      setSocialUser: () => ({})
    };
    const authServiceStub = {};
    TestBed.configureTestingModule({
      declarations: [ UserGroupComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        { provide: AuthService, useValue: authServiceStub },
        { provide: GoogleAuthService, useValie: googleAuthService },
        { provide: MicrosoftAuthService, useValue: microsoftAuthServiceStub },
        { provide: UserProfileService, useValue: userProfileServiceStub },
        { provide: ApiUsergroupUpdateService, useValue: apiUsergroupUpdateServiceStub },
        { provide: ApiLogWriteService, useValue: apiLogWriteServiceStub },
        { provide: ApiUserListService, useValue: apiUserListServiceStub },
        { provide: ApiUsergroupListService, useValue: apiUsergroupListServiceStub },
        { provide: AuthServiceConfig, useValue: authServiceConfigStub },
        { provide: Router, useValue: routerStub }
      ]
    });
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('call submit', () => {
    spyOn(component, 'submit').and.callThrough();
    component.submit();
    expect(component.submit).toHaveBeenCalled();
    const apiUsergroupListService = fixture.debugElement.injector.get(ApiUsergroupListService);
    this.chooseValue = new UserForAdminModel(0, '', '', 0, '', 0, 0);
    spyOn(apiUsergroupListService, 'usergroupList').and.callThrough();
    apiUsergroupListService.usergroupList(this.chooseValue);
    // component.apiUsergroupListService.usergroupList(this.chooseValue);
    expect(apiUsergroupListService.usergroupList).toHaveBeenCalled();
  });
  it('call save', () => {
    spyOn(component, 'save').and.callThrough();
    component.save();
    expect(component.save).toHaveBeenCalled();
    const apiUsergroupUpdateService = fixture.debugElement.injector.get(ApiUsergroupUpdateService);
    const usergroup: UserGroupModel[] = [];
    spyOn(apiUsergroupUpdateService, 'usergroupUpdate');
    apiUsergroupUpdateService.usergroupUpdate(usergroup);
    expect(apiUsergroupUpdateService.usergroupUpdate).toHaveBeenCalled();
  });
});
