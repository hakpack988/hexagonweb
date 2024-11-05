import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryotherapyComponent } from './cryotherapy.component';

describe('CryotherapyComponent', () => {
  let component: CryotherapyComponent;
  let fixture: ComponentFixture<CryotherapyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CryotherapyComponent]
    });
    fixture = TestBed.createComponent(CryotherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
