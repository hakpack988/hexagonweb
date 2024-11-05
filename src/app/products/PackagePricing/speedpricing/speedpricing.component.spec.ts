import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedpricingComponent } from './speedpricing.component';

describe('SpeedpriceComponent', () => {
  let component: SpeedpricingComponent;
  let fixture: ComponentFixture<SpeedpricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpeedpricingComponent]
    });
    fixture = TestBed.createComponent(SpeedpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
