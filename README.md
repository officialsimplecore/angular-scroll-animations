# Angular Scroll Animations Library

This library implements element animations that are triggered by or control user scroll.

## Features

- Animate on scroll: Simple directive that adds a class (CSS animation) to an element
- Scroll to section: Service that smooth scrolls the user to an element of the website based on the element's HTML id

## Demo
[Demo Application](https://www.angular-animate.netlify.app/)

## Installation
```$ npm install angular-scroll-animations```

Add the following to you module (`app.module.ts`)
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
...
...
import { AppComponent } from './app.component';

// Import Angular Scroll Animations Module
import { AngularScrollAnimationsModule } from "angular-scroll-animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Add module to imports list
    AngularScrollAnimationsModule
  ],
  providers: [...]
})
export class AppModule { }
```

## Usage Instructions
Coming soon... For now, please reference the example application in source code


## Author

[SimpleCore](https://simplecore.org): [https://simplecore.org](https://simplecore.org)

[KataniaAI](https://katania.org)

[CoreClassroom](https://coreclassroom.org)

[MyLanguageJournal](https://www.languagejournal.org)

