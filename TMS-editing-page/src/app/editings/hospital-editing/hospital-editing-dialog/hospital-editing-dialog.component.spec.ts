import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalEditingDialogComponent } from './hospital-editing-dialog.component';

describe('HospitalEditingDialogComponent', () => {
  let component: HospitalEditingDialogComponent;
  let fixture: ComponentFixture<HospitalEditingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalEditingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
