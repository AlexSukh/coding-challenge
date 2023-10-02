import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserBuddyHeaderComponent } from './browser-buddy-header.component';

describe('BrowserBuddyHeaderComponent', () => {
  let component: BrowserBuddyHeaderComponent;
  let fixture: ComponentFixture<BrowserBuddyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserBuddyHeaderComponent]
    });
    fixture = TestBed.createComponent(BrowserBuddyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
