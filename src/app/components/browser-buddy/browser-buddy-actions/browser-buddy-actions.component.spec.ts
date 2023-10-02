import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserBuddyActionsComponent } from './browser-buddy-actions.component';

describe('BrowserBuddyActionsComponent', () => {
  let component: BrowserBuddyActionsComponent;
  let fixture: ComponentFixture<BrowserBuddyActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserBuddyActionsComponent]
    });
    fixture = TestBed.createComponent(BrowserBuddyActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
