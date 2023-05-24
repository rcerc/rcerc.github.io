import { Routes } from '@angular/router';

import { ROUTES as POSTS_ROUTES } from './posts/routes';

export const ROUTES: Routes = [
  {
    path: 'posts',
    children: POSTS_ROUTES,
  },
  {
    path: '**',
    redirectTo: 'posts',
  },
];
