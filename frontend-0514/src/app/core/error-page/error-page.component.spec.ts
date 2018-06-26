import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ErrorPageComponent } from './error-page.component';

describe('ErrorPageComponent', () => {
    let comp: ErrorPageComponent;
    let fixture: ComponentFixture<ErrorPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ErrorPageComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(ErrorPageComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
