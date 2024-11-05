import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalcryoComponent } from './localcryo.component';

describe('LocalcryoComponent', () => {
  let component: LocalcryoComponent;
  let fixture: ComponentFixture<LocalcryoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocalcryoComponent]
    });
    fixture = TestBed.createComponent(LocalcryoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
