import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAndAttendanceNavbarComponentComponent } from './employee-and-attendance-navbar-component.component';

describe('EmployeeAndAttendanceNavbarComponentComponent', () => {
  let component: EmployeeAndAttendanceNavbarComponentComponent;
  let fixture: ComponentFixture<EmployeeAndAttendanceNavbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAndAttendanceNavbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAndAttendanceNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
