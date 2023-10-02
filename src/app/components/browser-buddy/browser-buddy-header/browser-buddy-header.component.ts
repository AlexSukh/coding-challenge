import {Component} from '@angular/core';
import {BrowserBuddyService} from "../browser-buddy.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-browser-buddy-header',
  templateUrl: './browser-buddy-header.component.html',
  styleUrls: ['./browser-buddy-header.component.css'],
  imports: [
    NgIf
  ],
  standalone: true

})
export class BrowserBuddyHeaderComponent {
  constructor(public service: BrowserBuddyService) {
  }
}
