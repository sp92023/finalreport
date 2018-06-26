import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomEditingDialogComponent } from './symptom-editing-dialog.component';

describe('SymptomEditingDialogComponent', () => {
  let component: SymptomEditingDialogComponent;
  let fixture: ComponentFixture<SymptomEditingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomEditingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
