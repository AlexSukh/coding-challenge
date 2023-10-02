import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {BrowserBuddyService} from "./browser-buddy.service";
import {AppModule} from "../../app.module";
import {BrowserBuddyHeaderComponent} from "./browser-buddy-header/browser-buddy-header.component";
import {BrowserBuddyInstructionsComponent} from "./browser-buddy-instructions/browser-buddy-instructions.component";
import {BrowserBuddyActionsComponent} from "./browser-buddy-actions/browser-buddy-actions.component";
import {BrowserBuddyFooterComponent} from "./browser-buddy-footer/browser-buddy-footer.component";

@Component({
  selector: 'app-browser-buddy',
  templateUrl: './browser-buddy.component.html',
  styleUrls: ['./browser-buddy.component.css'],
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    BrowserBuddyHeaderComponent,
    BrowserBuddyInstructionsComponent,
    BrowserBuddyActionsComponent,
    BrowserBuddyFooterComponent,
  ],
  encapsulation: ViewEncapsulation.None
})
export class BrowserBuddyComponent implements OnInit {

  ngOnInit() {
    this.service.markHoveredElements();
    this.service.handleElementSelection();
  }

  constructor(public service: BrowserBuddyService) {
  }
}
