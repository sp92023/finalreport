import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMinComponent } from './side-nav-min.component';

describe('SideNavMinComponent', () => {
  let component: SideNavMinComponent;
  let fixture: ComponentFixture<SideNavMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
