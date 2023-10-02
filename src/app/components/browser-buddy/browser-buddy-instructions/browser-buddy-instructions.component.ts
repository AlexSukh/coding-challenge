import {Component} from '@angular/core';
import {BrowserBuddyService} from "../browser-buddy.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-browser-buddy-instructions',
  templateUrl: './browser-buddy-instructions.component.html',
  styleUrls: ['./browser-buddy-instructions.component.css'],
  imports: [
    NgIf
  ],
  standalone: true

})
export class BrowserBuddyInstructionsComponent {
  constructor(public service: BrowserBuddyService) {
  }
}
