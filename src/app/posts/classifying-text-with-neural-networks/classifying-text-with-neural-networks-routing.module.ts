import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClassifyingTextWithNeuralNetworksComponent } from './classifying-text-with-neural-networks.component';

const routes: Routes = [
  {
    path: '**',
    component: ClassifyingTextWithNeuralNetworksComponent,
    redirectTo: '',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassifyingTextWithNeuralNetworksRoutingModule {}
