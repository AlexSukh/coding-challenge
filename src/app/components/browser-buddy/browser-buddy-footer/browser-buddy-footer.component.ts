import {Component} from '@angular/core';
import {BrowserBuddyService} from "../browser-buddy.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-browser-buddy-footer',
  templateUrl: './browser-buddy-footer.component.html',
  styleUrls: ['./browser-buddy-footer.component.css'],
  imports: [
    NgIf
  ],
  standalone: true

})
export class BrowserBuddyFooterComponent {
  constructor(public service: BrowserBuddyService) {
  }

}
