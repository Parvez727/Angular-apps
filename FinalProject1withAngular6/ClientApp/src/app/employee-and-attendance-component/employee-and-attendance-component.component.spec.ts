import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAndAttendanceComponentComponent } from './employee-and-attendance-component.component';

describe('EmployeeAndAttendanceComponentComponent', () => {
  let component: EmployeeAndAttendanceComponentComponent;
  let fixture: ComponentFixture<EmployeeAndAttendanceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAndAttendanceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAndAttendanceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
