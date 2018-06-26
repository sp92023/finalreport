import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ClientIpService } from '../../shared/client-ip.service';
import { UserProfileService } from '../../shared/user-profile.service';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
    let comp: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(() => {
        const clientIpServiceStub = {
            getClientIp: () => ({})
        };
        const userProfileServiceStub = {
            signOut: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ MainComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: ClientIpService, useValue: clientIpServiceStub },
                { provide: UserProfileService, useValue: userProfileServiceStub }
            ]
        });
        fixture = TestBed.createComponent(MainComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const clientIpServiceStub: ClientIpService = fixture.debugElement.injector.get(ClientIpService);
            const userProfileServiceStub: UserProfileService = fixture.debugElement.injector.get(UserProfileService);
            spyOn(clientIpServiceStub, 'getClientIp');
            // spyOn(userProfileServiceStub, 'signOut');
            comp.ngOnInit();
            expect(clientIpServiceStub.getClientIp).toHaveBeenCalled();
            // expect(userProfileServiceStub.signOut).toHaveBeenCalled();
        });
    });

});
