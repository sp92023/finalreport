import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalPermissionComponent } from './hospital-permission.component';

describe('HospitalPermissionComponent', () => {
  let component: HospitalPermissionComponent;
  let fixture: ComponentFixture<HospitalPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
