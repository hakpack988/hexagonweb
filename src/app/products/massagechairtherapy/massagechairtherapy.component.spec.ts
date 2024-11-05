import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagechairtherapyComponent } from './massagechairtherapy.component';

describe('MassagechairtherapyComponent', () => {
  let component: MassagechairtherapyComponent;
  let fixture: ComponentFixture<MassagechairtherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MassagechairtherapyComponent]
    });
    fixture = TestBed.createComponent(MassagechairtherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
