import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription, fromEvent, EMPTY} from 'rxjs';
import {PlatformManagerService} from './platform-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollDataService implements OnDestroy {

  scrollEvent: Observable<any>;
  resizeEvent: Observable<any>;
  scrollPosition = 0;
  private scrollSub: Subscription = new Subscription();
  private resizeSub: Subscription = new Subscription();

  constructor(private platformManager: PlatformManagerService) {
    // Initialize scroll position
    this.setScrollPosition();

    this.scrollEvent = this.platformManager.isScrollCompatibleDevice() ? fromEvent(window, 'scroll') : EMPTY;

    // Subscribe to scroll event and update scroll position
    this.scrollSub = this.scrollEvent
      .subscribe(() => this.setScrollPosition());

    this.resizeEvent = this.platformManager.isScrollCompatibleDevice() ? fromEvent(window, 'resize') : EMPTY;

    // Subscribe to resize event and update scroll position
    this.resizeSub = this.resizeEvent
      .subscribe(() => this.setScrollPosition());
  }

  public get windowHeight(): number {
    return this.platformManager.isScrollCompatibleDevice() ?  window.innerHeight : 0;
  }

  public get windowWidth(): number {
    return this.platformManager.isScrollCompatibleDevice() ?  window.innerWidth : 0;
  }

  private setScrollPosition(): void {
    this.scrollPosition = this.platformManager.isScrollCompatibleDevice() ? window.pageYOffset : 0;
  }

  ngOnDestroy(): void {
    this.scrollSub.unsubscribe();
    this.resizeSub.unsubscribe();
  }
}
