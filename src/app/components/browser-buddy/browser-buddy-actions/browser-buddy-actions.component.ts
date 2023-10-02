import {Component} from '@angular/core';
import {BrowserBuddyService} from "../browser-buddy.service";
import {NgIf} from "@angular/common";
import {BrowserBuddyTextActionComponent} from "./browser-buddy-text-action/browser-buddy-text-action.component";
import {BrowserBuddyButtonActionComponent} from "./browser-buddy-button-action/browser-buddy-button-action.component";

@Component({
  selector: 'app-browser-buddy-actions',
  templateUrl: './browser-buddy-actions.component.html',
  styleUrls: ['./browser-buddy-actions.component.css'],
  imports: [
    NgIf,
    BrowserBuddyTextActionComponent,
    BrowserBuddyButtonActionComponent
  ],
  standalone: true

})
export class BrowserBuddyActionsComponent {
  constructor(public service: BrowserBuddyService) {
  }
}
