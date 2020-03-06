import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImagErrorHandler]'
})
export class ImagErrorHandlerDirective {

  constructor(private elementRef: ElementRef) { }
  @HostListener('error') error() {
    const nativeElement = this.elementRef.nativeElement as HTMLElement;
    const imgNotFoundUrl = 'https://admin.espwebsite.com/images/ImageNotInCatalog160.png';
    if (nativeElement) {
      nativeElement.setAttribute('src', imgNotFoundUrl);
    }
  }
}
