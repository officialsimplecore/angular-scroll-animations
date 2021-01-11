/* Adapted from animate-on-scroll by abhazelton under MIT license */

import { Directive, Input, Renderer2, ElementRef, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import { Subscription } from 'rxjs';
import {ScrollDataService} from './_services/scroll-data.service';
import {PlatformManagerService} from "./_services/platform-manager.service";

@Directive({
  selector: '[animateOnScroll]'
})
export class ScrollAnimateDirective implements OnInit, OnDestroy, AfterViewInit {

  private offsetTop: number = 0;
  private animationClassAdded: boolean = false;
  private windowHeight: number = 0;
  private scrollSub: Subscription = new Subscription();
  private resizeSub: Subscription = new Subscription();

  private get id(): string {
    return this.elementRef.nativeElement.id;
  }

  @Input() startAnimation: string | null = 'pushed-down';
  @Input() endAnimation: string | null = 'released';

  @Input() scrollOffset: number = 70; // Position offset to start animation
  @Input() timeOffset: number = 0; // Time offset to start animation in milliseconds

  @Input() useScroll?: boolean;
  @Input() threshold ?: number;

  constructor(private platformService: PlatformManagerService, private elementRef: ElementRef, private renderer: Renderer2, private scroll: ScrollDataService) { }

  ngOnInit(): void {
    if (!this.platformService.isScrollCompatibleDevice()) {
      return;
    }

    if (!this.startAnimation || !this.endAnimation) {
      return;
    }

    // Add start animation classes
    this.addClasses(this.startAnimation);

    // Class has not been added
    this.animationClassAdded = false;
    this.useScroll = this.useScroll ? this.useScroll : ((this.useScroll !== false));
    this.threshold = this.threshold ? this.threshold | 0.5 : 0.5;
    // Using intersecting observer by default, else fallback to scroll Listener
    if ("IntersectionObserver" in window && this.useScroll) {
      const options: IntersectionObserverInit = {
        root:null,
        threshold:this.threshold,
        rootMargin:"0px"
      }
      const observer: IntersectionObserver =new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry => {
          if(!entry.isIntersecting)
            return;
          this.addAnimationClass();
        })
      }, options);
      observer.observe(this.elementRef.nativeElement);
      return;
    }

    // Check visibility on scroll
    this.scrollSub = this.scroll.scrollEvent
      .subscribe(() => this.checkVisibility());

    // Check visibility on window resize
    this.resizeSub = this.scroll.resizeEvent
      .subscribe(() => this.checkVisibility());

  }

  ngAfterViewInit(): void {
    // run visibility check initially in case the element is already visible in viewport
    setTimeout(() => this.checkVisibility(), 1);
  }

  ngOnDestroy(): void {
    this.scrollSub.unsubscribe();
    this.resizeSub.unsubscribe();
  }

  private checkVisibility(): void {
    if (this.animationClassAdded) {
      // Class already added
      return;
    }

    // Reset window height
    this.setWindowHeight();

    // Set element position
    this.setElementOffsetTop();

    const scrollTriggerValue = this.offsetTop + this.scrollOffset - this.windowHeight;

    if (this.scroll.scrollPosition >= scrollTriggerValue) {
      this.addAnimationClass();
    }
  }

  private addAnimationClass(): void {
    // stops execution if no class is provided
    if(!this.endAnimation)
      return;

    // Cache value
    this.animationClassAdded = true;
    this.animateEnd();
  }

  private animateEnd(): void {
    if (this.timeOffset > 0) {
      setTimeout(() => {
        this.addClasses(this.endAnimation);
      }, this.timeOffset);
    } else {
      this.addClasses(this.endAnimation);
    }
  }

  // Handle multiple animation classes
  private addClasses(classes: string): void {
    for (const c of classes.split(' ')) {
      this.renderer.addClass(this.elementRef.nativeElement, c);
    }
  }

  private removeClasses(classes: string): void {
    for (const c of classes.split(' ')) {
      this.renderer.removeClass(this.elementRef.nativeElement, c);
    }
  }

  private setWindowHeight(): void {
    this.windowHeight = this.scroll.windowHeight;
  }

  private setElementOffsetTop(): void {
    if (typeof this.elementRef.nativeElement.getBoundingClientRect === 'function') {
      const viewportTop = this.elementRef.nativeElement.getBoundingClientRect().top;
      const clientTop = this.elementRef.nativeElement.clientTop;

      // Set vertical position for selected element
      this.offsetTop = viewportTop + this.scroll.scrollPosition - clientTop;
    } else {
      this.offsetTop = 0;
    }
  }
}
