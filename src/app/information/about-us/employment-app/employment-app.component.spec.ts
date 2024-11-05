import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentAppComponent } from './employment-app.component';

describe('EmploymentAppComponent', () => {
  let component: EmploymentAppComponent;
  let fixture: ComponentFixture<EmploymentAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmploymentAppComponent]
    });
    fixture = TestBed.createComponent(EmploymentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
