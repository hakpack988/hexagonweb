import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantmanagerComponent } from './assistantmanager.component';

describe('AssistantmanagerComponent', () => {
  let component: AssistantmanagerComponent;
  let fixture: ComponentFixture<AssistantmanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AssistantmanagerComponent]
    });
    fixture = TestBed.createComponent(AssistantmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
