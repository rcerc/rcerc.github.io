import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Step {
  r: number;
  q: number;
}

@Component({
  selector: 'app-extended-euclidean-algorithm[a][b][steps]',
  templateUrl: './extended-euclidean-algorithm.component.html',
  styleUrls: ['./extended-euclidean-algorithm.component.scss'],
  standalone: true,
  imports: [FormsModule, NgFor],
})
export class ExtendedEuclideanAlgorithmComponent implements OnChanges {
  @Input() a!: number;
  @Output() aChange = new EventEmitter();
  @Input() b!: number;
  @Output() bChange = new EventEmitter();
  @Input() steps!: Step[];
  u: number[] = [];
  i: number[] = [];

  ngOnChanges() {
    const u = [];
    u[this.steps.length - 2] = -this.steps[this.steps.length - 2].q;
    u[this.steps.length - 1] = 1;
    for (let i = this.steps.length - 2; i > 0; i--) {
      u[i - 1] = u[i + 1] + u[i] * -this.steps[i - 1].q;
    }

    this.u = u;
    this.i = u
      .map((_, i) => i)
      .slice(0, -2)
      .reverse();
  }

  prefixSign(i: number) {
    return i < 0 ? '- ' + -i : '+ ' + i;
  }
}
