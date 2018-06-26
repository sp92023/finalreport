import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyEditingDialogComponent } from './body-editing-dialog.component';

describe('BodyEditingDialogComponent', () => {
  let component: BodyEditingDialogComponent;
  let fixture: ComponentFixture<BodyEditingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyEditingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
