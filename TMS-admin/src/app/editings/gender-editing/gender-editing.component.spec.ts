import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderEditingComponent } from './gender-editing.component';

describe('GenderEditingComponent', () => {
  let component: GenderEditingComponent;
  let fixture: ComponentFixture<GenderEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
