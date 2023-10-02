import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserBuddyInstructionsComponent } from './browser-buddy-instructions.component';

describe('BrowserBuddyInstructionsComponent', () => {
  let component: BrowserBuddyInstructionsComponent;
  let fixture: ComponentFixture<BrowserBuddyInstructionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserBuddyInstructionsComponent]
    });
    fixture = TestBed.createComponent(BrowserBuddyInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
