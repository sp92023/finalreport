import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityEditingDialogComponent } from './severity-editing-dialog.component';

describe('SeverityEditingDialogComponent', () => {
  let component: SeverityEditingDialogComponent;
  let fixture: ComponentFixture<SeverityEditingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverityEditingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverityEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
