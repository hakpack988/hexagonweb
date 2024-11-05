import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedtrainerComponent } from './speedtrainer.component';

describe('SpeedtrainerComponent', () => {
  let component: SpeedtrainerComponent;
  let fixture: ComponentFixture<SpeedtrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SpeedtrainerComponent]
    });
    fixture = TestBed.createComponent(SpeedtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
