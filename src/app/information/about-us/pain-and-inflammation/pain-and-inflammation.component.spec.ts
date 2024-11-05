import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainAndInflammationComponent } from './pain-and-inflammation.component';

describe('PainAndInflammationComponent', () => {
  let component: PainAndInflammationComponent;
  let fixture: ComponentFixture<PainAndInflammationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PainAndInflammationComponent]
    });
    fixture = TestBed.createComponent(PainAndInflammationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
