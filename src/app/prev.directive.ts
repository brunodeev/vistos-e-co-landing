import { Directive, ElementRef, HostListener } from '@angular/core';
import { ImageServiceService } from './image-service.service';

@Directive({
  selector: '[appPrev]',
  standalone: true
})
export class PrevDirective {

  constructor(private element: ElementRef, private imageService: ImageServiceService) {}

  @HostListener('click')
  prevFunction() {
    var elm = this.element.nativeElement.parentElement.children[0];
    var item = elm.getElementsByClassName('item');
    elm.prepend(item[item.length - 1]);
  }

}
