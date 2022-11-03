import { Directive, ElementRef, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextTrim]'
})
export class TextTrimDirective implements OnChanges {

  constructor(private elRef: ElementRef) { }

  ngOnChanges(): void {
    console.log(this.elRef.nativeElement);
  }

}
