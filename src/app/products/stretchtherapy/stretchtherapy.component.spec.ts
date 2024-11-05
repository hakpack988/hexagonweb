import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchtherapyComponent } from './stretchtherapy.component';

describe('StretchtherapyComponent', () => {
  let component: StretchtherapyComponent;
  let fixture: ComponentFixture<StretchtherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StretchtherapyComponent]
    });
    fixture = TestBed.createComponent(StretchtherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
