# Angular Scroll Animations Library

This library implements element animations that are triggered by or control user scroll.

## Features

- Animate on scroll: Simple directive that adds a class (CSS animation) to an element
- Scroll to section: Service that smooth scrolls the user to an element of the website based on the element's HTML id

## Demo
[Demo Application](https://angular-animations.netlify.app/animate-scroll)

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
Animation trigger on scroll:
- In template (`.html`):
```html
<div animateOnScroll startAnimation="faded-out" endAnimation="released" [scrollOffset]="50" [timeOffset]="10">
```
- Add `animateOnScroll` directive attribute to enable functionality (required)
- `startAnimation` attribute is the CSS class name of the prior state (required)
- `endAnimation` attribute is the CSS class name of the final state after animation (required)
- `scrollOffset` attribute is the offset from the intersection between the bottom of the screen and the element start
- `timeOffset` attribute is the time delay after hitting intersection point

Animate scroll to section:
- In template (`.html`):
```html
<button (click)="scrollToSection(1)">Scroll To Section 1</button>
<section id="sec-1">
</section>
```
- In typescript (`.ts`)
```typescript
constructor(private scrollControl: ScrollControlService) {}

ngOnInit(): void {
  // Initialize polyfill
  this.scrollControl.scrollToSectionPolyInit();
}

public scrollToSection(n: number): void {
  this.scrollControl.scrollToElement("sec-" + n);
}
```
- Add a native id attribute to any element (required)
- Use dependency injection to inject the `ScrollControlService` into the component (required)
- Create a method that calls the `scrollToElement` method on the service (required)
  - The `scrollToElement` method takes a string argument of the HTML id of the element to scroll to
- Initialize lazy-loaded polyfills for smooth scrolling behavior in ngOnInit(). Reference above code.
  - This polyfill is optional, but can be lazy loaded to support older browsers and Safari



## Author

[SimpleCore](https://simplecore.org): [https://simplecore.org](https://simplecore.org)

[KataniaAI](https://katania.org)

[CoreClassroom](https://coreclassroom.org)

[MyLanguageJournal](https://www.languagejournal.org)

## Repository
[GitHub](https://github.com/officialsimplecore/angular-scroll-animations)
[NPM](https://www.npmjs.com/package/angular-scroll-animations)
