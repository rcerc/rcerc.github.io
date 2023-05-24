import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Step {
  r: number;
  q: number;
}

@Component({
  selector: 'app-euclidean-algorithm[a][b]',
  templateUrl: './euclidean-algorithm.component.html',
  styleUrls: ['./euclidean-algorithm.component.scss'],
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
})
export class EuclideanAlgorithmComponent implements OnChanges {
  @Input() a!: number;
  @Output() aChange = new EventEmitter();
  @Input() b!: number;
  @Output() bChange = new EventEmitter();
  @Output() gcdChange = new EventEmitter();
  steps: Step[] = [];
  @Output() stepsChange = new EventEmitter();

  ngOnChanges() {
    const steps = [];
    steps[-2] = { r: this.a, q: 0 };
    steps[-1] = { r: this.b, q: 0 };
    for (let k = 0; ; k++) {
      steps.push({ r: 0, q: 0 });
      steps[k].q = Math.floor(steps[k - 2].r / steps[k - 1].r);
      steps[k].r = steps[k - 2].r % steps[k - 1].r;
      if (!steps[k].r) {
        this.gcdChange.emit(steps[k - 1].r);

        break;
      }
    }
    this.steps = steps;
    this.stepsChange.emit(steps);
  }
}
