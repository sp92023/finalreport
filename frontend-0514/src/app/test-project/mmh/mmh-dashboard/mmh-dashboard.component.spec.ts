import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MmhDashboardComponent } from './mmh-dashboard.component';

describe('MmhDashboardComponent', () => {
    let comp: MmhDashboardComponent;
    let fixture: ComponentFixture<MmhDashboardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ MmhDashboardComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(MmhDashboardComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
