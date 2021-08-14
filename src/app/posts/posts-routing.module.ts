import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rnn-nlp',
    loadChildren: () =>
      import('./rnn-nlp/rnn-nlp.module').then((m) => m.RnnNlpModule),
  },
  { path: '**', redirectTo: 'rnn-nlp' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
