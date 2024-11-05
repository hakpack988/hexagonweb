import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitymarketingassistantComponent } from './communitymarketingassistant.component';

describe('CommunitymarketingassistantComponent', () => {
  let component: CommunitymarketingassistantComponent;
  let fixture: ComponentFixture<CommunitymarketingassistantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommunitymarketingassistantComponent]
    });
    fixture = TestBed.createComponent(CommunitymarketingassistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
