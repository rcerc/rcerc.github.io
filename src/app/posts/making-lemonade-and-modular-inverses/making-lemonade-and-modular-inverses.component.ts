import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ExtendedEuclideanAlgorithmComponent } from './extended-euclidean-algorithm/extended-euclidean-algorithm.component';
import { EuclideanAlgorithmComponent } from './euclidean-algorithm/euclidean-algorithm.component';

@Component({
  selector: 'app-making-lemonade-and-modular-inverses',
  templateUrl: './making-lemonade-and-modular-inverses.component.html',
  styleUrls: ['./making-lemonade-and-modular-inverses.component.scss'],
  standalone: true,
  imports: [EuclideanAlgorithmComponent, ExtendedEuclideanAlgorithmComponent],
})
export class MakingLemonadeAndModularInversesComponent
  implements AfterViewInit
{
  a = 1295;
  b = 300;
  steps = [];
  gcd = NaN;

  constructor(title: Title) {
    title.setTitle('Making Lemonade and Modular Inverses');
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    document.head.appendChild(script);
  }
}
