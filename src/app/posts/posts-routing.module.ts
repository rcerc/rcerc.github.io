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
  {
    path: 'making-lemonade-and-modular-inverses',
    loadChildren: () =>
      import(
        './making-lemonade-and-modular-inverses/making-lemonade-and-modular-inverses.module'
      ).then((m) => m.MakingLemonadeAndModularInversesModule),
  },
  { path: '**', redirectTo: 'classifying-text-with-neural-networks' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
