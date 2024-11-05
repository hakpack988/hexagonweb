import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedlighttherapyComponent } from './redlighttherapy.component';

describe('RedlighttherapyComponent', () => {
  let component: RedlighttherapyComponent;
  let fixture: ComponentFixture<RedlighttherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RedlighttherapyComponent]
    });
    fixture = TestBed.createComponent(RedlighttherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
