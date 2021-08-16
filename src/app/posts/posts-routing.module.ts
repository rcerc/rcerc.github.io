import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'classifying-text-with-neural-networks',
    loadChildren: () =>
      import(
        './classifying-text-with-neural-networks/classifying-text-with-neural-networks.module'
      ).then((m) => m.ClassifyingTextWithNeuralNetworksModule),
  },
  { path: '**', redirectTo: 'classifying-text-with-neural-networks' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
