import {Injectable} from '@angular/core';
import {PlatformManagerService} from './platform-manager.service';
import {ScriptInjectionService} from './script-injection.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollControlService {

  constructor(private platformManager: PlatformManagerService, private scriptInjector: ScriptInjectionService) {
  }

  public scrollToSection(sectionId: string, usePolyfill = false): void {
    if (this.platformManager.isScrollCompatibleDevice()) {
      if (usePolyfill) {
        this.scrollToSectionPolyInit();
      }
      document.getElementById(sectionId)?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  public scrollToSectionPolyInit(): void {
    // Lazy Load Smooth Scrolling Polyfill
    const scriptForLoad = 'smooth-scroll-polyfill';
    this.scriptInjector.load(scriptForLoad).then((data) => {
      console.log(`Loaded ${scriptForLoad}`, data);
    }).catch((error) => {
      console.log(error);
    });
  }

  public enableScroll(): void {
    if (this.platformManager.isScrollCompatibleDevice()) {
      document.body.removeAttribute('style');
      if (this.isTouchDevice()) {
        document.body.removeEventListener(
          'touchmove',
          this.preventTouchMove,
          this.listenerOptions
        );
      }
    }
  }

  public lockScroll(): void {
    if (this.platformManager.isScrollCompatibleDevice()) {
      document.body.setAttribute('style', 'overflow: hidden');
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      if (this.isTouchDevice()) {
        document.body.addEventListener(
          'touchmove',
          this.preventTouchMove,
          this.listenerOptions
        );
      }
    }
  }

  public preventTouchMove(touchEvent: TouchEvent): boolean {
    const event = touchEvent || { ...(window as any).event, touches: [] };

    const usingMultiTouchGestures: boolean = event.touches && event.touches.length > 1;
    if (usingMultiTouchGestures) {
      return true;
    }

    if (event.preventDefault) {
      event.preventDefault();
    }

    return false;
  }

  private listenerOptions = {
    capture: false,
    passive: false,
  };

  private isTouchDevice(): any {
    if (this.platformManager.isScrollCompatibleDevice()) {
      return !!window && ('ontouchstart' in window || navigator.maxTouchPoints);
    }
  }

  private buildLockStyle(): any {
    if (this.platformManager.isScrollCompatibleDevice()) {
      const style = document.createElement("style");
      style.setAttribute("data-debug", "Injected by Scrolling Service");
      style.textContent = `
        body {
          overflow: hidden !important;
        }
      `;
      return style;
    }

    return null;
  }
}
