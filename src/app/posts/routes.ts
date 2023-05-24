import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./posts.component').then((mod) => mod.PostsComponent),
  },
  {
    path: 'making-lemonade-and-modular-inverses',
    loadChildren: () =>
      import('./making-lemonade-and-modular-inverses/routes').then(
        (mod) => mod.ROUTES
      ),
  },
  {
    path: 'classifying-text-with-neural-networks',
    loadChildren: () =>
      import('./classifying-text-with-neural-networks/routes').then(
        (mod) => mod.ROUTES
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
