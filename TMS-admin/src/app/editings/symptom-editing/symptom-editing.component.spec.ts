import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomEditingComponent } from './symptom-editing.component';

describe('SymptomEditingComponent', () => {
  let component: SymptomEditingComponent;
  let fixture: ComponentFixture<SymptomEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
