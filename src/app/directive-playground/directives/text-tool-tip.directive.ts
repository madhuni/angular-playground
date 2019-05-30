import { Directive, ElementRef, Renderer2, OnInit, ViewChild, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appTextToolTip]'
})
export class TextToolTipDirective implements OnInit{

  @Input() completeText: string;
  @Input() textLimit: number;

  toolTipDiv: ElementRef;
  toolTipText: ElementRef;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.createToolTipElement();
  }

  createToolTipElement() {
    this.toolTipDiv = this.renderer.createElement('div');
    this.toolTipText = this.renderer.createText(this.completeText);
    this.renderer.addClass(this.toolTipDiv, 'custom-tool-tip');
    this.renderer.appendChild(this.toolTipDiv, this.toolTipText);
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(e: MouseEvent) {
    if (this.completeText.length > this.textLimit) {
      this.setupToolTip(e);
    }
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e: MouseEvent) {
    if (this.completeText.length > this.textLimit) {
      this.removeToolTip(e);
    }
  }

  setupToolTip(e: MouseEvent) {
    this.renderer.appendChild(this.el.nativeElement, this.toolTipDiv);
  }

  removeToolTip(e: MouseEvent) {
    this.renderer.removeChild(this.el.nativeElement, this.toolTipDiv);
  }
}
