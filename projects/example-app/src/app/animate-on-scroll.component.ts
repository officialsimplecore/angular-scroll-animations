import { Component } from '@angular/core';

@Component({
  selector: 'app-animate-on-scroll',
  template: `
    <h1>Demo: Animate On Scroll</h1>
    <div animateOnScroll class="faded-out" animationName="released">
      <core-card>
        <h2>Title Card 1</h2>
        <input [(ngModel)]="exclaimText" id="exclaim" type="text" appearance="outline" placeholder="Exclaim" coreInput>
        <label for="exclaim" coreLabel>Exclaim</label>
        <p *ngIf="exclaimText">{{exclaimText + exclaimationMarks}}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis quis nisl ornare finibus. Quisque sagittis pharetra libero, non venenatis tortor consequat in. Vivamus nisi risus, ullamcorper aliquet erat at, porttitor gravida risus. In ut justo et mauris sollicitudin tincidunt. Duis sit amet sem vel augue maximus tempor. Sed varius lacus justo, quis pellentesque odio mollis a. Pellentesque vitae feugiat est, quis aliquam arcu. In ac elit ligula. Integer at commodo turpis. Morbi iaculis lorem diam, non suscipit eros sodales vel. Vivamus nulla orci, dictum eu sem non, commodo tristique enim.</p>
        <p>Phasellus erat nulla, scelerisque sed lectus eu, aliquet imperdiet diam. Phasellus a volutpat mi. Donec rutrum pellentesque mi, vitae sollicitudin tellus feugiat sed. Nullam commodo auctor lacinia. Quisque venenatis ante risus, at cursus ante sollicitudin eu. Mauris vestibulum, odio vel blandit porttitor, est purus vulputate ipsum, in tempus dolor nunc ut massa. Cras facilisis lorem nec commodo vulputate. Praesent vitae porta urna. Mauris commodo tempus quam molestie dictum.</p>
      </core-card>
    </div>
    <div animateOnScroll class="pushed-down" animationName="released">
      <core-card>
        <h2>Made By <a href="https://simplecore.org">SimpleCore</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis quis nisl ornare finibus. Quisque sagittis pharetra libero, non venenatis tortor consequat in. Vivamus nisi risus, ullamcorper aliquet erat at, porttitor gravida risus. In ut justo et mauris sollicitudin tincidunt. Duis sit amet sem vel augue maximus tempor. Sed varius lacus justo, quis pellentesque odio mollis a. Pellentesque vitae feugiat est, quis aliquam arcu. In ac elit ligula. Integer at commodo turpis. Morbi iaculis lorem diam, non suscipit eros sodales vel. Vivamus nulla orci, dictum eu sem non, commodo tristique enim.</p>
        <p>Praesent quis tincidunt orci, vitae varius erat. Donec blandit vitae purus ac ultricies. Morbi vel leo eu ex venenatis dapibus id vitae lorem. Maecenas viverra egestas mauris non feugiat. Suspendisse cursus lacinia erat placerat tempor. Nulla facilisi. Donec sem diam, mollis et felis eu, condimentum laoreet urna. Nunc suscipit blandit lacus, eget lobortis lacus dapibus sed. Cras tincidunt dolor ex, eget cursus erat auctor at.</p>
        <p>Phasellus erat nulla, scelerisque sed lectus eu, aliquet imperdiet diam. Phasellus a volutpat mi. Donec rutrum pellentesque mi, vitae sollicitudin tellus feugiat sed. Nullam commodo auctor lacinia. Quisque venenatis ante risus, at cursus ante sollicitudin eu. Mauris vestibulum, odio vel blandit porttitor, est purus vulputate ipsum, in tempus dolor nunc ut massa. Cras facilisis lorem nec commodo vulputate. Praesent vitae porta urna. Mauris commodo tempus quam molestie dictum.</p>
      </core-card>
    </div>
    <div animateOnScroll class="zoomed-in" animationName="released">
      <core-card>
        <h2>Used by <a href="https://languagejournal.org">MyLanguageJournal</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis quis nisl ornare finibus. Quisque sagittis pharetra libero, non venenatis tortor consequat in. Vivamus nisi risus, ullamcorper aliquet erat at, porttitor gravida risus. In ut justo et mauris sollicitudin tincidunt. Duis sit amet sem vel augue maximus tempor. Sed varius lacus justo, quis pellentesque odio mollis a. Pellentesque vitae feugiat est, quis aliquam arcu. In ac elit ligula. Integer at commodo turpis. Morbi iaculis lorem diam, non suscipit eros sodales vel. Vivamus nulla orci, dictum eu sem non, commodo tristique enim.</p>
        <p>Praesent quis tincidunt orci, vitae varius erat. Donec blandit vitae purus ac ultricies. Morbi vel leo eu ex venenatis dapibus id vitae lorem. Maecenas viverra egestas mauris non feugiat. Suspendisse cursus lacinia erat placerat tempor. Nulla facilisi. Donec sem diam, mollis et felis eu, condimentum laoreet urna. Nunc suscipit blandit lacus, eget lobortis lacus dapibus sed. Cras tincidunt dolor ex, eget cursus erat auctor at.</p>
        <p>Phasellus erat nulla, scelerisque sed lectus eu, aliquet imperdiet diam. Phasellus a volutpat mi. Donec rutrum pellentesque mi, vitae sollicitudin tellus feugiat sed. Nullam commodo auctor lacinia. Quisque venenatis ante risus, at cursus ante sollicitudin eu. Mauris vestibulum, odio vel blandit porttitor, est purus vulputate ipsum, in tempus dolor nunc ut massa. Cras facilisis lorem nec commodo vulputate. Praesent vitae porta urna. Mauris commodo tempus quam molestie dictum.</p>
      </core-card>
    </div>
    <div animateOnScroll class="pushed-left" animationName="released">
      <core-card>
        <h2>Used by <a href="https://katania.org">Katania AI Journal</a></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis quis nisl ornare finibus. Quisque sagittis pharetra libero, non venenatis tortor consequat in. Vivamus nisi risus, ullamcorper aliquet erat at, porttitor gravida risus. In ut justo et mauris sollicitudin tincidunt. Duis sit amet sem vel augue maximus tempor. Sed varius lacus justo, quis pellentesque odio mollis a. Pellentesque vitae feugiat est, quis aliquam arcu. In ac elit ligula. Integer at commodo turpis. Morbi iaculis lorem diam, non suscipit eros sodales vel. Vivamus nulla orci, dictum eu sem non, commodo tristique enim.</p>
        <p>Praesent quis tincidunt orci, vitae varius erat. Donec blandit vitae purus ac ultricies. Morbi vel leo eu ex venenatis dapibus id vitae lorem. Maecenas viverra egestas mauris non feugiat. Suspendisse cursus lacinia erat placerat tempor. Nulla facilisi. Donec sem diam, mollis et felis eu, condimentum laoreet urna. Nunc suscipit blandit lacus, eget lobortis lacus dapibus sed. Cras tincidunt dolor ex, eget cursus erat auctor at.</p>
        <p>Phasellus erat nulla, scelerisque sed lectus eu, aliquet imperdiet diam. Phasellus a volutpat mi. Donec rutrum pellentesque mi, vitae sollicitudin tellus feugiat sed. Nullam commodo auctor lacinia. Quisque venenatis ante risus, at cursus ante sollicitudin eu. Mauris vestibulum, odio vel blandit porttitor, est purus vulputate ipsum, in tempus dolor nunc ut massa. Cras facilisis lorem nec commodo vulputate. Praesent vitae porta urna. Mauris commodo tempus quam molestie dictum.</p>
      </core-card>
    </div>
  `,
  styles: [`core-card {
    margin: 20px;
  }`]
})
export class AnimateOnScrollComponent {
  public exclaimText: string;

  public get exclaimationMarks(): string {
    let exclaimationMarksString = "";
    for (let i = 0; i < this.exclaimText.length; i++) {
      exclaimationMarksString = exclaimationMarksString + "!";
    }
    return exclaimationMarksString;
  }
}
