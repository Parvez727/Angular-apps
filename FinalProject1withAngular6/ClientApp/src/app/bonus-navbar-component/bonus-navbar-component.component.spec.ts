import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusNavbarComponentComponent } from './bonus-navbar-component.component';

describe('BonusNavbarComponentComponent', () => {
  let component: BonusNavbarComponentComponent;
  let fixture: ComponentFixture<BonusNavbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusNavbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
