import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchingtrainerComponent } from './pitchingtrainer.component';

describe('PitchingtrainerComponent', () => {
  let component: PitchingtrainerComponent;
  let fixture: ComponentFixture<PitchingtrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PitchingtrainerComponent]
    });
    fixture = TestBed.createComponent(PitchingtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
