import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandambassadorComponent } from './brandambassador.component';

describe('BrandambassadorComponent', () => {
  let component: BrandambassadorComponent;
  let fixture: ComponentFixture<BrandambassadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrandambassadorComponent]
    });
    fixture = TestBed.createComponent(BrandambassadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
