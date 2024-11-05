import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesteamComponent } from './salesteam.component';

describe('SalesteamComponent', () => {
  let component: SalesteamComponent;
  let fixture: ComponentFixture<SalesteamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SalesteamComponent]
    });
    fixture = TestBed.createComponent(SalesteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
