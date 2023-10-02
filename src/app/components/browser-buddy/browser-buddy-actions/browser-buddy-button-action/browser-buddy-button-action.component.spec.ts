import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserBuddyButtonActionComponent } from './browser-buddy-button-action.component';

describe('BrowserBuddyButtonActionComponent', () => {
  let component: BrowserBuddyButtonActionComponent;
  let fixture: ComponentFixture<BrowserBuddyButtonActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserBuddyButtonActionComponent]
    });
    fixture = TestBed.createComponent(BrowserBuddyButtonActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
