import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomDashboardComponent } from './symptom-dashboard.component';

describe('SymptomDashboardComponent', () => {
  let component: SymptomDashboardComponent;
  let fixture: ComponentFixture<SymptomDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
