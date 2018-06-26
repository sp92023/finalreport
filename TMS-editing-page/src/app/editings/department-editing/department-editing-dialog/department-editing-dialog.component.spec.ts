import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEditingDialogComponent } from './department-editing-dialog.component';

describe('DepartmentEditingDialogComponent', () => {
  let component: DepartmentEditingDialogComponent;
  let fixture: ComponentFixture<DepartmentEditingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentEditingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
