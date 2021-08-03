import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[blueText]',
})
export class BlueTextDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'blue';
  }
}
