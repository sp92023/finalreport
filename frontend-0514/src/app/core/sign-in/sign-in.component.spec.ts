import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { MicrosoftAuthService } from '../../shared/microsoft-auth.service';
import { GoogleAuthService } from '../../shared/google-auth.service';
import { UserProfileService } from '../../shared/user-profile.service';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
    let comp: SignInComponent;
    let fixture: ComponentFixture<SignInComponent>;

    beforeEach(() => {
        const authServiceStub = {
            authState: {
                subscribe: () => ({})
            }
        };
        const routerStub = {
            navigate: () => ({})
        };
        const microsoftAuthServiceStub = {
            currentSocialUser: {
                subscribe: () => ({})
            },
            getLoggedIn: () => ({}),
            signInWithMicrosoft: () => ({})
        };
        const googleAuthServiceStub = {
            setSocialUser: () => ({}),
            signInWithGoogle: () => ({})
        };
        const userProfileServiceStub = {
            getLoggedIn: () => ({}),
            changeUser: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ SignInComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: AuthService, useValue: authServiceStub },
                { provide: Router, useValue: routerStub },
                { provide: MicrosoftAuthService, useValue: microsoftAuthServiceStub },
                { provide: GoogleAuthService, useValue: googleAuthServiceStub },
                { provide: UserProfileService, useValue: userProfileServiceStub }
            ]
        });
        fixture = TestBed.createComponent(SignInComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const routerStub: Router = fixture.debugElement.injector.get(Router);
            const microsoftAuthServiceStub: MicrosoftAuthService = fixture.debugElement.injector.get(MicrosoftAuthService);
            const googleAuthServiceStub: GoogleAuthService = fixture.debugElement.injector.get(GoogleAuthService);
            const userProfileServiceStub: UserProfileService = fixture.debugElement.injector.get(UserProfileService);
            spyOn(routerStub, 'navigate');
            spyOn(microsoftAuthServiceStub, 'getLoggedIn');
            spyOn(googleAuthServiceStub, 'setSocialUser');
            spyOn(userProfileServiceStub, 'getLoggedIn');
            spyOn(userProfileServiceStub, 'changeUser');
            comp.ngOnInit();
            /*expect(routerStub.navigate).toHaveBeenCalled();
            expect(microsoftAuthServiceStub.getLoggedIn).toHaveBeenCalled();
            expect(googleAuthServiceStub.setSocialUser).toHaveBeenCalled();
            expect(userProfileServiceStub.getLoggedIn).toHaveBeenCalled();
            expect(userProfileServiceStub.changeUser).toHaveBeenCalled();*/
        });
    });

    describe('signInWithGoogle', () => {
        it('makes expected calls', () => {
            const googleAuthServiceStub: GoogleAuthService = fixture.debugElement.injector.get(GoogleAuthService);
            spyOn(googleAuthServiceStub, 'signInWithGoogle');
            comp.signInWithGoogle();
            expect(googleAuthServiceStub.signInWithGoogle).toHaveBeenCalled();
        });
    });

    describe('signInWithMicrosoft', () => {
        it('makes expected calls', () => {
            const microsoftAuthServiceStub: MicrosoftAuthService = fixture.debugElement.injector.get(MicrosoftAuthService);
            spyOn(microsoftAuthServiceStub, 'signInWithMicrosoft');
            comp.signInWithMicrosoft();
            expect(microsoftAuthServiceStub.signInWithMicrosoft).toHaveBeenCalled();
        });
    });

});
