import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetBackgroundImage]',
  standalone: true
})
export class SetBackgroundImageDirective implements OnInit {
  @Input()
  imageUrl!: string;
  constructor(private elementRef:ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
      this.renderer.setStyle(
          this.elementRef.nativeElement,
          'backgroundImage',
          `url(${this.imageUrl})`,
      );
      this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background-position',
          `center`,
      );
      this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background-repeat',
          `no-repeat`,
      );
      this.renderer.setStyle(
          this.elementRef.nativeElement,
          'background-size',
          `cover`,
      );


  }


}
