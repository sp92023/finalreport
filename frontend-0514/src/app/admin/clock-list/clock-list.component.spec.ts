import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiClockListService } from '../../shared/api/api-clock-list.service';
import { ClockListComponent } from './clock-list.component';
import {} from 'jasmine';
import {ApiLogWriteService} from '../../shared/api/api-log-write.service';

describe('ClockListComponent', () => {
    let comp: ClockListComponent;
    let fixture: ComponentFixture<ClockListComponent>;

    beforeEach(() => {
        const apiClockListServiceStub = {
            currentDataCheck: {
                subscribe: () => ({})
            },
            getClockRecords: () => ({})
        };
      const apiLogWriteServiceStub = {
        writeLog: () => ({})
      };
        TestBed.configureTestingModule({
            declarations: [ ClockListComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
              { provide: ApiClockListService, useValue: apiClockListServiceStub },
              { provide : ApiLogWriteService, useValue: apiLogWriteServiceStub }
            ]
        });
        fixture = TestBed.createComponent(ClockListComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    describe('ngOnInit', () => {
        it('makes expected calls', () => {
            const apiClockListServiceStub: ApiClockListService = fixture.debugElement.injector.get(ApiClockListService);
            spyOn(apiClockListServiceStub, 'getClockRecords');
            comp.ngOnInit();
          //  expect(apiClockListServiceStub.getClockRecords).toHaveBeenCalled();
        });
    });

});
