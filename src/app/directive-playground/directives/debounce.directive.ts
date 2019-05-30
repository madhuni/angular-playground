import { Directive, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDebounce]'
})
export class DebounceDirective {

  @Input() minLength: number = 1;
  @Input() delay: number = 1000;

  @Output() emitSearchQuery: EventEmitter<any> = new EventEmitter();

  timeout: any;

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('keydown', ['$event']) onKeyDown(e: any) {
    // console.log(this.el.nativeElement, e);
    // this.emitSearchQuery.emit(e.target.value);
  }

  @HostListener('keyup', ['$event']) onKeyUp(e: KeyboardEvent) {
    // console.log(this.el.nativeElement, e);
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    let value = (<HTMLInputElement> e.target).value;

    if (value.length >= this.minLength) {
      this.timeout = setTimeout(() => {
        this.emitSearchQuery.emit(value);
      }, this.delay);
    } else if (value.length === 0) {
      this.emitSearchQuery.emit(value);
    }
  }

}
