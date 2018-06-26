import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderEditingDialogComponent } from './gender-editing-dialog.component';

describe('GenderEditingDialogComponent', () => {
  let component: GenderEditingDialogComponent;
  let fixture: ComponentFixture<GenderEditingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderEditingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
