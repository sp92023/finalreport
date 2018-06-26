import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyEditingComponent } from './body-editing.component';

describe('BodyEditingComponent', () => {
  let component: BodyEditingComponent;
  let fixture: ComponentFixture<BodyEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
