import {Component} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {BrowserBuddyService} from "../../browser-buddy.service";

@Component({
  selector: 'app-browser-buddy-text-action',
  templateUrl: './browser-buddy-text-action.component.html',
  styleUrls: ['./browser-buddy-text-action.component.css'],
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  standalone: true
})
export class BrowserBuddyTextActionComponent {
  constructor(public service: BrowserBuddyService) {
  }
}
