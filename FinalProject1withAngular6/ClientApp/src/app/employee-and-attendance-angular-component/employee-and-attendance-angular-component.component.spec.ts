import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAndAttendanceAngularComponentComponent } from './employee-and-attendance-angular-component.component';

describe('EmployeeAndAttendanceAngularComponentComponent', () => {
  let component: EmployeeAndAttendanceAngularComponentComponent;
  let fixture: ComponentFixture<EmployeeAndAttendanceAngularComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAndAttendanceAngularComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAndAttendanceAngularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
