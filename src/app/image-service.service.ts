import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  currentImageIndex: number = 0;

  constructor() { }
}
