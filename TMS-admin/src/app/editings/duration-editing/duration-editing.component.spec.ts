import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationEditingComponent } from './duration-editing.component';

describe('DurationEditingComponent', () => {
  let component: DurationEditingComponent;
  let fixture: ComponentFixture<DurationEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
