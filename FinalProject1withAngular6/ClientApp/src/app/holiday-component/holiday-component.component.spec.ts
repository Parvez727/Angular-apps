import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayComponentComponent } from './holiday-component.component';

describe('HolidayComponentComponent', () => {
  let component: HolidayComponentComponent;
  let fixture: ComponentFixture<HolidayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
