import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEditingComponent } from './department-editing.component';

describe('DepartmentEditingComponent', () => {
  let component: DepartmentEditingComponent;
  let fixture: ComponentFixture<DepartmentEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
