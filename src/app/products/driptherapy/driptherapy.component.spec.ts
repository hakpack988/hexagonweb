import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriptherapyComponent } from './driptherapy.component';

describe('DriptherapyComponent', () => {
  let component: DriptherapyComponent;
  let fixture: ComponentFixture<DriptherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DriptherapyComponent]
    });
    fixture = TestBed.createComponent(DriptherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
