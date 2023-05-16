import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = ''
  @Input() defaultColor = ''

  constructor(private element: ElementRef ) 
  { 
    this.element.nativeElement.style.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.CambiaColore(this.appHighlight || this.defaultColor || 'purple')
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.CambiaColore('transparent')
  }

  CambiaColore(colore: string)
  {
    this.element.nativeElement.style.backgroundColor = colore
  }

}


