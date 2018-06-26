import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityEditingComponent } from './severity-editing.component';

describe('SeverityEditingComponent', () => {
  let component: SeverityEditingComponent;
  let fixture: ComponentFixture<SeverityEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverityEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverityEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
