import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantprogramdirectorComponent } from './assistantprogramdirector.component';

describe('AssistantprogramdirectorComponent', () => {
  let component: AssistantprogramdirectorComponent;
  let fixture: ComponentFixture<AssistantprogramdirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AssistantprogramdirectorComponent]
    });
    fixture = TestBed.createComponent(AssistantprogramdirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
