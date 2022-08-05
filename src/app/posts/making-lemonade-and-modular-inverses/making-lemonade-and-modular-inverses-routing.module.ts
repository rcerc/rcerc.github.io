import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MakingLemonadeAndModularInversesComponent } from './making-lemonade-and-modular-inverses.component';

const routes: Routes = [
  {
    path: '**',
    component: MakingLemonadeAndModularInversesComponent,
    redirectTo: '',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakingLemonadeAndModularInversesRoutingModule {}
