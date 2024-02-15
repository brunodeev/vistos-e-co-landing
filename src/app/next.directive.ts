import { Directive, ElementRef, HostListener } from '@angular/core';
import { ImageServiceService } from './image-service.service';

@Directive({
  selector: '[appNext]',
  standalone: true
})
export class NextDirective {

  constructor(private element: ElementRef, private imageService: ImageServiceService) {}

  @HostListener('click')
  nextFunction() {
    var elm = this.element.nativeElement.parentElement.children[0];
    var item = elm.getElementsByClassName('item');
    elm.append(item[0]);
  }

}
