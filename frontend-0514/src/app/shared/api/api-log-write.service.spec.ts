import { TestBed, inject } from '@angular/core/testing';

import { ApiLogWriteService } from './api-log-write.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../md5-hash.service';
import {AuthService, AuthServiceConfig} from 'angularx-social-login';
import {GoogleAuthService} from '../google-auth.service';
import {MicrosoftAuthService} from '../microsoft-auth.service';
import {UserProfileService} from '../user-profile.service';
import {ApiUsergroupUpdateService} from './api-usergroup-update.service';
import {ApiUserListService} from './api-user-list.service';
import {ApiUsergroupListService} from './api-usergroup-list.service';
import {Router} from '@angular/router';

describe('ApiLogWriteService', () => {
  beforeEach(() => {
    const routerStub = {};
    const authServiceConfigStub = {};
    const apiUsergroupListServiceStub = {
      usergroupList: () => ({})
    };
    const apiUserListServiceStub = {
      userList: () => ({
        subscribe: () => ({})
      })
    };
    const apiLogWriteServiceStub = {
      writeLog: () => ({})
    };
    const apiUsergroupUpdateServiceStub = {
      usergroupUpdate: () => ({})
    };
    const userProfileServiceStub = {
      changeUser: () => ({}),
      getUserModel: () => ({}),
      getLoggedIn: () => ({}),
      signOut: () => ({})
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
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        { provide: ApiLogWriteService, useValue: apiLogWriteServiceStub },
        { provide: AuthService, useValue: authServiceStub },
        { provide: GoogleAuthService, useValue: googleAuthService },
        { provide: MicrosoftAuthService, useValue: microsoftAuthServiceStub },
        { provide: UserProfileService, useValue: userProfileServiceStub },
        { provide: ApiUsergroupUpdateService, useValue: apiUsergroupUpdateServiceStub },
        { provide: ApiUserListService, useValue: apiUserListServiceStub },
        { provide: ApiUsergroupListService, useValue: apiUsergroupListServiceStub },
        { provide: AuthServiceConfig, useValue: authServiceConfigStub },
        { provide: Router, useValue: routerStub }
      ]
    });
  });

  it('should be created', inject([ApiLogWriteService], (service: ApiLogWriteService) => {
    expect(service).toBeTruthy();
  }));
});
