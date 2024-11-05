import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyAndAntiagingComponent } from './beauty-and-antiaging.component';

describe('BeautyAndAntiagingComponent', () => {
  let component: BeautyAndAntiagingComponent;
  let fixture: ComponentFixture<BeautyAndAntiagingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BeautyAndAntiagingComponent]
    });
    fixture = TestBed.createComponent(BeautyAndAntiagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
