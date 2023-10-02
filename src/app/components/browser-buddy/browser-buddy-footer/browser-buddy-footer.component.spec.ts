import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserBuddyFooterComponent } from './browser-buddy-footer.component';

describe('BrowserBuddyFooterComponent', () => {
  let component: BrowserBuddyFooterComponent;
  let fixture: ComponentFixture<BrowserBuddyFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserBuddyFooterComponent]
    });
    fixture = TestBed.createComponent(BrowserBuddyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
