import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PlatformManagerService {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {
  }
  public isScrollCompatibleDevice(): boolean {
    return isPlatformBrowser(this.platformId) && typeof window !== 'undefined';
  }

}
