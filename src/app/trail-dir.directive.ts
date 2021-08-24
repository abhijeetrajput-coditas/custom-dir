import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTrailDir]'
})
export class TrailDirDirective {

  constructor(private el: ElementRef) {
      el.nativeElement.style.color = "black"
      el.nativeElement.style.backgroundColor = "red"
}
}
