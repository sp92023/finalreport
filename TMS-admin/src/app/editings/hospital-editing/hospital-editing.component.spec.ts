import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalEditingComponent } from './hospital-editing.component';

describe('HospitalEditingComponent', () => {
  let component: HospitalEditingComponent;
  let fixture: ComponentFixture<HospitalEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
