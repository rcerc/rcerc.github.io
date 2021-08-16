import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Output {
  text?: string[];
}

interface Cell {
  source: string[];
  outputs: Output[];
}

interface Notebook {
  cells: Cell[];
}

@Injectable({
  providedIn: 'root',
})
export class NotebookService {
  private cells: Observable<Cell[]>;

  constructor(private readonly http: HttpClient) {
    this.cells = this.http
      .get<Notebook>(
        'assets/posts/classifying-text-with-neural-networks/notebook.ipynb'
      )
      .pipe(map(({ cells }) => cells));
  }

  requestCell(i: number) {
    return this.cells.pipe(map((cells) => cells[i]));
  }
}
