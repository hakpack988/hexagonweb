import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthsportinstructorComponent } from './youthsportinstructor.component';

describe('YouthsportinstructorComponent', () => {
  let component: YouthsportinstructorComponent;
  let fixture: ComponentFixture<YouthsportinstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YouthsportinstructorComponent]
    });
    fixture = TestBed.createComponent(YouthsportinstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
