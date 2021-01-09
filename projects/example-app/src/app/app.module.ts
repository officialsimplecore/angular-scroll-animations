import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreButtonModule, CoreCardModule, CoreInputModule} from "simplecore-ui";
import {ScrollToSectionComponent} from "./scroll-to-section.component";
import {AnimateOnScrollComponent} from "./animate-on-scroll.component";
import {AngularScrollAnimationsModule} from "angular-scroll-animations";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ScrollToSectionComponent,
    AnimateOnScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreButtonModule,
    CoreCardModule,
    CoreInputModule,
    AngularScrollAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
