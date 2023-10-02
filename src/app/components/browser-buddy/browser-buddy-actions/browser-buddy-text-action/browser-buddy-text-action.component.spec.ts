import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserBuddyTextActionComponent } from './browser-buddy-text-action.component';

describe('BrowserBuddyTextActionComponent', () => {
  let component: BrowserBuddyTextActionComponent;
  let fixture: ComponentFixture<BrowserBuddyTextActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserBuddyTextActionComponent]
    });
    fixture = TestBed.createComponent(BrowserBuddyTextActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
