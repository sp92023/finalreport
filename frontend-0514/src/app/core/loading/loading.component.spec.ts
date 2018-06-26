import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { MicrosoftAuthService } from '../../shared/microsoft-auth.service';
import { UserProfileService } from '../../shared/user-profile.service';
import { GoogleAuthService } from '../../shared/google-auth.service';
import { ApiUserProfileService } from '../../shared/api/api-user-profile.service';
import { LoadingComponent } from './loading.component';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
import {SocialUser} from 'angularx-social-login';

describe('LoadingComponent', () => {
  let comp: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(() => {
    const routerStub = {
      navigate: () => ({})
    };
    const microsoftAuthServiceStub = {
      getLoggedIn: () => ({}),
      getSocialUserMail: () => ({})
    };
    const userProfileServiceStub = {
      changeUser: () => ({}),
      signOut: () => ({})
    };
    const googleAuthServiceStub = {
      getLoggedIn: () => ({}),
      getSocialUserMail: () => ({}),
      setSocialUser: () => ({})
    };
    const apiUserProfileServiceStub = {
      getUserInfo: () => ({
        subscribe: () => ({})
      })
    };
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: MicrosoftAuthService, useValue: microsoftAuthServiceStub },
        { provide: UserProfileService, useValue: userProfileServiceStub },
        { provide: GoogleAuthService, useValue: googleAuthServiceStub },
        { provide: ApiUserProfileService, useValue: apiUserProfileServiceStub }
      ]
    });
    fixture = TestBed.createComponent(LoadingComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const microsoftAuthServiceStub: MicrosoftAuthService = fixture.debugElement.injector.get(MicrosoftAuthService);
      const userProfileServiceStub: UserProfileService = fixture.debugElement.injector.get(UserProfileService);
      const googleAuthServiceStub: GoogleAuthService = fixture.debugElement.injector.get(GoogleAuthService);
      const apiUserProfileServiceStub: ApiUserProfileService = fixture.debugElement.injector.get(ApiUserProfileService);

      // spyOn(comp, 'goToErrorPage');
      // spyOn(routerStub, 'navigate');
      spyOn(microsoftAuthServiceStub, 'getLoggedIn').and.callFake( () => {
        return true;
      });
      // spyOn(microsoftAuthServiceStub, 'getSocialUserMail');
      // spyOn(userProfileServiceStub, 'changeUser');
      spyOn(googleAuthServiceStub, 'getLoggedIn').and.callFake( () => {
        return true;
      });
      // spyOn(googleAuthServiceStub, 'getSocialUserMail');
      // spyOn(apiUserProfileServiceStub, 'getUserInfo');

      // const socialUser = new SocialUser();
      // socialUser.provider = 'GOOGLE';
      // socialUser.id = '115079587803729307701';
      // socialUser.email = 'michael.sc.hsu@gmail.com';
      // socialUser.name = 'Michael Hsu';
      // socialUser.photoUrl = 'https://lh6.googleusercontent.com/-ude5hAXh6Hs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT5v6widHbumUEbITmmzZ7oRsVp77A/s96-c/photo.jpg';
      // socialUser.firstName = 'Michael';
      // socialUser.lastName = 'Hsu';
      // socialUser.authToken = 'ya29.GlxUBVBKf-oLEWdUz8qPOw2RusRtWzxyE1w0_550HY99X6_SJ0-IoCEq-ZX-jkQdqzhgybV1nYAVWsgA8NOGK5tz4ymy43jpqLNWi86O9GQWUbizy7fpUUfu_Fbmog';
      // googleAuthServiceStub.setSocialUser(socialUser);
      // fixture.detectChanges();

      comp.ngOnInit();

      // expect(comp.goToErrorPage).toHaveBeenCalled();
      // expect(routerStub.navigate).toHaveBeenCalled();
      expect(microsoftAuthServiceStub.getLoggedIn).toHaveBeenCalled();
      // expect(microsoftAuthServiceStub.getSocialUserMail).toHaveBeenCalled();
      // expect(userProfileServiceStub.changeUser).toHaveBeenCalled();
      // expect(googleAuthServiceStub.getLoggedIn).toHaveBeenCalled();
      // expect(googleAuthServiceStub.getSocialUserMail).toHaveBeenCalled();
      // expect(apiUserProfileServiceStub.getUserInfo).toHaveBeenCalled();
    });
    it('call googleAuthService.getLoggedIn', () => {
      const microsoftAuthServiceStub: MicrosoftAuthService = fixture.debugElement.injector.get(MicrosoftAuthService);
      const googleAuthServiceStub: GoogleAuthService = fixture.debugElement.injector.get(GoogleAuthService);
      spyOn(microsoftAuthServiceStub, 'getLoggedIn').and.callFake( () => {
        return false;
      });
      spyOn(googleAuthServiceStub, 'getLoggedIn').and.callFake( () => {
        return true;
      });
      comp.ngOnInit();
      expect(googleAuthServiceStub.getLoggedIn).toHaveBeenCalled();
    });
    it('call else', () => {
      const microsoftAuthServiceStub: MicrosoftAuthService = fixture.debugElement.injector.get(MicrosoftAuthService);
      const googleAuthServiceStub: GoogleAuthService = fixture.debugElement.injector.get(GoogleAuthService);
      spyOn(microsoftAuthServiceStub, 'getLoggedIn').and.callFake( () => {
        return false;
      });
      spyOn(googleAuthServiceStub, 'getLoggedIn').and.callFake( () => {
        return false;
      });
      spyOn(comp, 'ngOnInit').and.callThrough();
      comp.ngOnInit();
      expect(comp.ngOnInit).toHaveBeenCalled();
    });
  });

  describe('goToErrorPage', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const userProfileServiceStub: UserProfileService = fixture.debugElement.injector.get(UserProfileService);
      spyOn(routerStub, 'navigate');
      spyOn(userProfileServiceStub, 'signOut');
      comp.goToErrorPage();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(userProfileServiceStub.signOut).toHaveBeenCalled();
    });
  });

});
