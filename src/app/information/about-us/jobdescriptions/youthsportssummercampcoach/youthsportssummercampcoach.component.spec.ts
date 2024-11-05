import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthsportssummercampcoachComponent } from './youthsportssummercampcoach.component';

describe('YouthsportssummercampcoachComponent', () => {
  let component: YouthsportssummercampcoachComponent;
  let fixture: ComponentFixture<YouthsportssummercampcoachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YouthsportssummercampcoachComponent],
    });
    fixture = TestBed.createComponent(YouthsportssummercampcoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
