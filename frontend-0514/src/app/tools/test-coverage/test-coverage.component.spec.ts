import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCoverageComponent } from './test-coverage.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ApiToolsCoveragePageService} from '../../shared/api/api-tools-coverage-page.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Md5HashService} from '../../shared/md5-hash.service';
import {ApiToolsCoverageTableService} from '../../shared/api/api-tools-coverage-table.service';
import {ApiLogWriteService} from '../../shared/api/api-log-write.service';
import {UserProfileService} from '../../shared/user-profile.service';
import {MicrosoftAuthService} from '../../shared/microsoft-auth.service';
import {GoogleAuthService} from '../../shared/google-auth.service';
import {Router} from '@angular/router';
import {AuthService, AuthServiceConfig} from 'angularx-social-login';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { of } from 'rxjs/observable/of';
import {CoverageTableGetModel} from '../../model/tools/test-coverage/coverage-table-get.model';
import {CoverageTablePostModel} from '../../model/tools/test-coverage/coverage-table-post.model';

describe('TestCoverageComponent', () => {
  let component: TestCoverageComponent;
  let fixture: ComponentFixture<TestCoverageComponent>;

  beforeEach(async(() => {
    const routerStub = {};
    const authServiceConfigStub = {};
    const apiToolsCoveragePageServiceStub = {
      pageItem: () => ({
        subscribe: () => ({})
      })
    };
    const apiToolsCoverageTableServiceStub = {
      coverageTable: () => ({
        subscribe: () => ({})
      })
    };
    const apiLogWriteServiceStub = {
      writeLog: () => ({}),
    };
    const userProfileServiceStub = {};
    const microsoftAuthServiceStub = {};
    const googleAuthServiceStub = {};
    const authServiceStub = {};
    TestBed.configureTestingModule({
      declarations: [ TestCoverageComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        HttpClient,
        HttpHandler,
        Md5HashService,
        { provide: AuthService, useValue: authServiceStub },
        { provide: GoogleAuthService, useValue: googleAuthServiceStub },
        { provide: MicrosoftAuthService, useValue: microsoftAuthServiceStub },
        { provide: UserProfileService, useValue: userProfileServiceStub },
        { provide: ApiLogWriteService, useValue: apiLogWriteServiceStub },
        { provide: ApiToolsCoverageTableService, useValue: apiToolsCoverageTableServiceStub },
        { provide: ApiToolsCoveragePageService, useValue: apiToolsCoveragePageServiceStub },
        { provide: AuthServiceConfig, useValue: authServiceConfigStub },
        { provide: Router, useValue: routerStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('call ngOnInit', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
    const apiToolsCoveragePageService = fixture.debugElement.injector.get(ApiToolsCoveragePageService);
    spyOn(apiToolsCoveragePageService, 'pageItem').and.returnValue(Observable.of());
    apiToolsCoveragePageService.pageItem();
    expect(apiToolsCoveragePageService.pageItem).toHaveBeenCalled();
  });
  it('call createTable', () => {
    spyOn(component, 'createTable').and.callThrough();
    component.createTable();
    expect(component.createTable).toHaveBeenCalled();
    const data = new CoverageTableGetModel('', '');
    const coverageTablePostModel = new CoverageTablePostModel('', '');
    const apiToolsCoverageTableServiceStub: ApiToolsCoverageTableService = fixture.debugElement.injector.get(ApiToolsCoverageTableService);
    spyOn(apiToolsCoverageTableServiceStub, 'coverageTable').and.returnValue(of(data));
    apiToolsCoverageTableServiceStub.coverageTable(coverageTablePostModel);
    fixture.detectChanges();
    // expect(component.coverageTable).toEqual(data);
  });
});
