import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleMasterAndDetailsNavbarComponentComponent } from './sale-master-and-details-navbar-component.component';

describe('SaleMasterAndDetailsNavbarComponentComponent', () => {
  let component: SaleMasterAndDetailsNavbarComponentComponent;
  let fixture: ComponentFixture<SaleMasterAndDetailsNavbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleMasterAndDetailsNavbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleMasterAndDetailsNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
