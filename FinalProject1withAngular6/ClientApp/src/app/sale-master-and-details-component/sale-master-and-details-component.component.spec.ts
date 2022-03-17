import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleMasterAndDetailsComponentComponent } from './sale-master-and-details-component.component';

describe('SaleMasterAndDetailsComponentComponent', () => {
  let component: SaleMasterAndDetailsComponentComponent;
  let fixture: ComponentFixture<SaleMasterAndDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleMasterAndDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleMasterAndDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
