import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchpriceComponent } from './pitchprice.component';

describe('PitchpriceComponent', () => {
  let component: PitchpriceComponent;
  let fixture: ComponentFixture<PitchpriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PitchpriceComponent]
    });
    fixture = TestBed.createComponent(PitchpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
