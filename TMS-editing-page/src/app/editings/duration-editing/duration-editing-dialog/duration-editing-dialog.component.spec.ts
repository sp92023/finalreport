import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationEditingDialogComponent } from './duration-editing-dialog.component';

describe('DurationEditingDialogComponent', () => {
  let component: DurationEditingDialogComponent;
  let fixture: ComponentFixture<DurationEditingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationEditingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
