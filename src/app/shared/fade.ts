import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFade]',
})
export class Fade {
  constructor(el: ElementRef) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.nativeElement.style.opacity = 1;
        el.nativeElement.style.transform = 'translateY(0)';
      }
    });

    el.nativeElement.style.opacity = 0;
    el.nativeElement.style.transform = 'translateY(40px)';
    el.nativeElement.style.transition = '0.6s';

    observer.observe(el.nativeElement);
  }
}
