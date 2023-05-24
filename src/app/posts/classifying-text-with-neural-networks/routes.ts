import { Routes } from '@angular/router';

import { ClassifyingTextWithNeuralNetworksComponent } from './classifying-text-with-neural-networks.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: ClassifyingTextWithNeuralNetworksComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
