import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  cardBodyVisible1: boolean = false;
  cardBodyVisible2: boolean = false;
  cardBodyVisible3: boolean = false;
  cardBodyVisible4: boolean = false;
  cardBodyVisible5: boolean = false;

  cardImages: string[] = [
    './assets/card.png', './assets/card.png'
  ];

  changeCard1() {
    this.cardBodyVisible1 = !this.cardBodyVisible1;
  }
  changeCard2() {
    this.cardBodyVisible2 = !this.cardBodyVisible2;
  }
  changeCard3() {
    this.cardBodyVisible3 = !this.cardBodyVisible3;
  }
  changeCard4() {
    this.cardBodyVisible4 = !this.cardBodyVisible4;
  }
  changeCard5() {
    this.cardBodyVisible5 = !this.cardBodyVisible5;
  }
}
