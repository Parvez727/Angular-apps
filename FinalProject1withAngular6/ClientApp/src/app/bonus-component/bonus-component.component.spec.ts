import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusComponentComponent } from './bonus-component.component';

describe('BonusComponentComponent', () => {
  let component: BonusComponentComponent;
  let fixture: ComponentFixture<BonusComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
