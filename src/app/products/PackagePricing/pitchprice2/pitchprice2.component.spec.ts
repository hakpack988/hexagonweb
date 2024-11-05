import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pitchprice2Component } from './pitchprice2.component';

describe('Pitchprice2Component', () => {
  let component: Pitchprice2Component;
  let fixture: ComponentFixture<Pitchprice2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Pitchprice2Component]
    });
    fixture = TestBed.createComponent(Pitchprice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
