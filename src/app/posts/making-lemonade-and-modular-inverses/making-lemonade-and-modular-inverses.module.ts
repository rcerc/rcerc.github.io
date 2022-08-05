import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MakingLemonadeAndModularInversesRoutingModule } from './making-lemonade-and-modular-inverses-routing.module';
import { MakingLemonadeAndModularInversesComponent } from './making-lemonade-and-modular-inverses.component';
import { EuclideanAlgorithmComponent } from './euclidean-algorithm/euclidean-algorithm.component';
import { ExtendedEuclideanAlgorithmComponent } from './extended-euclidean-algorithm/extended-euclidean-algorithm.component';

@NgModule({
  declarations: [
    MakingLemonadeAndModularInversesComponent,
    EuclideanAlgorithmComponent,
    ExtendedEuclideanAlgorithmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MakingLemonadeAndModularInversesRoutingModule,
  ],
})
export class MakingLemonadeAndModularInversesModule {}
