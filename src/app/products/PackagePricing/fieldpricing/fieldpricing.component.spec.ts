import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldpricingComponent } from './fieldpricing.component';

describe('FieldpriceComponent', () => {
  let component: FieldpricingComponent;
  let fixture: ComponentFixture<FieldpricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FieldpricingComponent]
    });
    fixture = TestBed.createComponent(FieldpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
