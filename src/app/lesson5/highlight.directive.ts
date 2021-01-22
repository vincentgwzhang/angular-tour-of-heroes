import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appHighlight') specialColor: string;

  @Input('highlightColor') highlightColor: string;// 这里很很很重要， selector === inpu === 'appHighlight'

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.specialColor || this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}