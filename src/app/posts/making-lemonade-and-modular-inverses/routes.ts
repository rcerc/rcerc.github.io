import { Routes } from '@angular/router';

import { MakingLemonadeAndModularInversesComponent } from './making-lemonade-and-modular-inverses.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: MakingLemonadeAndModularInversesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
