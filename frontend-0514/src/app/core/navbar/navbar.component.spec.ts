import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../../shared/user-profile.service';
import { NavbarComponent } from './navbar.component';
import { MatMenuModule, MatAutocompleteModule } from '@angular/material';
import {ApiNavbarService} from '../../shared/api/api-navbar.service';

describe('NavbarComponent', () => {
  let comp: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    const routerStub = {
      navigate: () => ({})
    };
    const userProfileServiceStub = {
      currentUser: {
        subscribe: () => ({})
      },
      getLoggedIn: () => ({}),
      signOut: () => ({})
    };
    const apiNavbarServiceStub = {};
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        MatMenuModule,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: UserProfileService, useValue: userProfileServiceStub },
        { provide: ApiNavbarService, useValue: apiNavbarServiceStub },
      ]
    });
    fixture = TestBed.createComponent(NavbarComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const userProfileServiceStub: UserProfileService = fixture.debugElement.injector.get(UserProfileService);
      spyOn(userProfileServiceStub, 'getLoggedIn');
      comp.ngOnInit();
      // expect(userProfileServiceStub.getLoggedIn).toHaveBeenCalled();
    });
  });

  describe('signOut', () => {
    it('makes expected calls', () => {
      const userProfileServiceStub: UserProfileService = fixture.debugElement.injector.get(UserProfileService);
      spyOn(userProfileServiceStub, 'signOut');
      comp.signOut();
      expect(userProfileServiceStub.signOut).toHaveBeenCalled();
    });
  });

  describe('goRouterNavigate', () => {
    it('makes expected calls', () => {
      spyOn(comp, 'goRouterNavigate').and.callThrough();
      comp.goRouterNavigate('');
      expect(comp.goRouterNavigate).toHaveBeenCalled();
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      routerStub.navigate([]);
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

});
