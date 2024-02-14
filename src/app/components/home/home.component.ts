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

  cardImages: string[] = [
    './assets/card1.png', './assets/card2.png', './assets/card3.png', './assets/card4.png', './assets/card5.png', './assets/card6.png', './assets/card7.png', './assets/card8.png', './assets/card9.png'
  ];

  cardBodyVisible1: boolean = false;
  cardBodyVisible2: boolean = false;
  cardBodyVisible3: boolean = false;
  cardBodyVisible4: boolean = false;
  cardBodyVisible5: boolean = false;

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
