import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import shell from 'highlight.js/lib/languages/shell';

import { NotebookService } from '../notebook/notebook.service';

hljs.registerLanguage('python', python);
hljs.registerLanguage('shell', shell);

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent implements AfterViewInit {
  @ViewChild('hljs') pre?: ElementRef<HTMLPreElement>;
  @ViewChild('wrapper') content?: ElementRef<HTMLDivElement>;
  @Input() index?: number;
  outputs?: string[];

  constructor(private readonly nb: NotebookService) {}

  async ngAfterViewInit() {
    const innerText = this.content?.nativeElement.innerText;
    if (innerText) {
      this.highlight(innerText);
    } else if (this.index !== undefined) {
      const cell = await this.nb.requestCell(this.index).toPromise();
      if (!cell) {
        console.error(`cell ${this.index} not found`);

        return;
      }
      const code = cell.source.join('');
      this.highlight(code);
      this.outputs = cell.outputs
        .map((o) => o.text?.join(''))
        .filter((o): o is string => o !== undefined);
    }
  }

  private highlight(code: string) {
    if (this.pre !== undefined) {
      const highlighted = hljs.highlightAuto(code).value;
      this.pre.nativeElement.innerHTML = highlighted;
    }
  }
}
