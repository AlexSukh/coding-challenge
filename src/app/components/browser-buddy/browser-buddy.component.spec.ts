import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserBuddyComponent } from './browser-buddy.component';

describe('BrowserBuddyComponent', () => {
  let component: BrowserBuddyComponent;
  let fixture: ComponentFixture<BrowserBuddyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserBuddyComponent]
    });
    fixture = TestBed.createComponent(BrowserBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
