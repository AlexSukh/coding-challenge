import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserBuddyComponent } from './components/browser-buddy/browser-buddy.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserBuddyButtonActionComponent } from './components/browser-buddy/browser-buddy-actions/browser-buddy-button-action/browser-buddy-button-action.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserBuddyComponent,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
