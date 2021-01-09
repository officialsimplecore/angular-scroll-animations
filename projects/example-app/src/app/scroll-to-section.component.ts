import {Component, OnInit} from '@angular/core';
import {ScrollControlService} from '../../../angular-scroll-animations/src/lib/_services/scroll-control.service';

@Component({
  selector: 'app-scroll-to-section',
  template: `
    <h1>Demo: Scroll to Section</h1>
    <button themeColor="secondary" size="sm" coreButton (click)="scrollToSection(1)">Section 1</button>
    <button themeColor="secondary" size="sm" coreButton (click)="scrollToSection(2)">Section 2</button>
    <button themeColor="secondary" size="sm" coreButton (click)="scrollToSection(3)">Section 3</button>
    <div style="margin-top: 30px">
      <section id="sec1" class="section">
        <h1>Section 1</h1>
        <p>You can click on the buttons above to scroll to a section</p>
        <p>Developers can choose to disable the polyfills to support the smooth scrolling behavior on older browsers and Safari.</p>
      </section>
      <section id="sec2" class="section">
        <h1>Section 2</h1>
        <p>This pinned section effect is made possible with native CSS position sticky</p>
      </section>
      <section id="sec3" class="section">
        <h1>Section 3</h1>
        <p>Support the creators at <a href="https://simplecore.org">SimpleCore.org</a></p>
      </section>
    </div>

  `,
  styles: [`div {
    overflow: visible;
  }

    .section {
    height: 100vh;
    border: black solid 1px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
      background-color: #ffffff;
  }
    .section > h1, p {
      text-align: center;
    }

  `]
})
export class ScrollToSectionComponent implements OnInit{
  constructor(private scrollControl: ScrollControlService) {
  }

  ngOnInit(): void {
    // Initialize polyfill
    this.scrollControl.scrollToSectionPolyInit();
  }

  public scrollToSection(n: number): void {
    this.scrollControl.scrollToSection("sec" + n);
  }

}
