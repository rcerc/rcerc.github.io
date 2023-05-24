import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FullscreenDirective } from './fullscreen/fullscreen.directive';
import { CellComponent } from './cell/cell.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-classifying-text-with-neural-networks',
  templateUrl: './classifying-text-with-neural-networks.component.html',
  styleUrls: ['./classifying-text-with-neural-networks.component.scss'],
  standalone: true,
  imports: [NgFor, CellComponent, FullscreenDirective],
})
export class ClassifyingTextWithNeuralNetworksComponent
  implements AfterViewInit
{
  readonly xValues = Array(32)
    .fill(0)
    .map((x, i) => i);

  constructor(title: Title) {
    title.setTitle('Classifying Text With Neural Networks');
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    document.head.appendChild(script);
  }

  sigmoid(x: number) {
    return 1 / (1 + Math.exp(-x));
  }

  sigmoid_prime(x: number) {
    const s_x = this.sigmoid(x);
    return s_x * (1 - s_x);
  }

  tanh(x: number) {
    return Math.tanh(x);
  }

  tanh_prime(x: number) {
    return 1 / Math.cosh(x) ** 2;
  }

  ln(x: number) {
    return Math.log(x);
  }

  ln_prime(x: number) {
    return 1 / x;
  }
}
