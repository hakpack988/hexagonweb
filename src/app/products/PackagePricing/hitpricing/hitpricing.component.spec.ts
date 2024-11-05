import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitpricingComponent } from './hitpricing.component';

describe('HitpriceComponent', () => {
  let component: HitpricingComponent;
  let fixture: ComponentFixture<HitpricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HitpricingComponent]
    });
    fixture = TestBed.createComponent(HitpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
