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
    './assets/card.png', './assets/card.png', './assets/card.png', './assets/card.png', './assets/card.png', './assets/card.png', './assets/card.png', './assets/card.png', './assets/card.png', './assets/card.png',
  ];

  indiceAtual: number = 0;
  imagensPorPagina: number = 4;

  getImagensExibicao(): string[] {
    const indiceInicial = this.indiceAtual;
    const indiceFinal = indiceInicial + this.imagensPorPagina;
    return this.cardImages.slice(indiceInicial, indiceFinal);
  }

  previous() {
    if(this.indiceAtual > 0) {
      this.indiceAtual = (this.indiceAtual - this.imagensPorPagina + this.cardImages.length) % this.cardImages.length;
    }
  }

  next() {
    if(this.indiceAtual < (this.cardImages.length - this.imagensPorPagina)) {
      this.indiceAtual = (this.indiceAtual + this.imagensPorPagina) % this.cardImages.length;
    }
  }
}
