import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HittingtrainerComponent } from './hittingtrainer.component';

describe('HittingtrainerComponent', () => {
  let component: HittingtrainerComponent;
  let fixture: ComponentFixture<HittingtrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HittingtrainerComponent]
    });
    fixture = TestBed.createComponent(HittingtrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
