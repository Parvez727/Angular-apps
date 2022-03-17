import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayNavbarComponentComponent } from './holiday-navbar-component.component';

describe('HolidayNavbarComponentComponent', () => {
  let component: HolidayNavbarComponentComponent;
  let fixture: ComponentFixture<HolidayNavbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayNavbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
