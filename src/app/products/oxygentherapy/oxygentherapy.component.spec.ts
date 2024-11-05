import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxygentherapyComponent } from './oxygentherapy.component';

describe('OxygentherapyComponent', () => {
  let component: OxygentherapyComponent;
  let fixture: ComponentFixture<OxygentherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OxygentherapyComponent]
    });
    fixture = TestBed.createComponent(OxygentherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
