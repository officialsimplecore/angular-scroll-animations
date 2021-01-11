import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PlatformManagerService {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
  }
  public isScrollCompatibleDevice(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return false;
    }
    if (typeof window !== 'undefined') {
      return false;
    }
    return true;
  }

}
