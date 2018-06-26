import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProjectControllerComponent } from './project-controller.component';

describe('ProjectControllerComponent', () => {
    let comp: ProjectControllerComponent;
    let fixture: ComponentFixture<ProjectControllerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ProjectControllerComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(ProjectControllerComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
