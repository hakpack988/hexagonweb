import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralsportinsturctorComponent } from './generalsportinsturctor.component';

describe('GeneralsportinsturctorComponent', () => {
  let component: GeneralsportinsturctorComponent;
  let fixture: ComponentFixture<GeneralsportinsturctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GeneralsportinsturctorComponent]
    });
    fixture = TestBed.createComponent(GeneralsportinsturctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
