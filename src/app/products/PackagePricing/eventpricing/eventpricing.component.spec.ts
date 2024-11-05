import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventpricingComponent } from './eventpricing.component';

describe('HitpriceComponent', () => {
  let component: EventpricingComponent;
  let fixture: ComponentFixture<EventpricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EventpricingComponent]
    });
    fixture = TestBed.createComponent(EventpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
