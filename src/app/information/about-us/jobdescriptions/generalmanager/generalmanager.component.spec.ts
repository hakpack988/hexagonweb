import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralmanagerComponent } from './generalmanager.component';

describe('GeneralmanagerComponent', () => {
  let component: GeneralmanagerComponent;
  let fixture: ComponentFixture<GeneralmanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GeneralmanagerComponent]
    });
    fixture = TestBed.createComponent(GeneralmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
