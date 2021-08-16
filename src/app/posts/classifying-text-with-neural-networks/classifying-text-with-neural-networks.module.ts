import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassifyingTextWithNeuralNetworksRoutingModule } from './classifying-text-with-neural-networks-routing.module';
import { ClassifyingTextWithNeuralNetworksComponent } from './classifying-text-with-neural-networks.component';
import { CellComponent } from './cell/cell.component';
import { FullscreenDirective } from './fullscreen/fullscreen.directive';

@NgModule({
  declarations: [
    ClassifyingTextWithNeuralNetworksComponent,
    CellComponent,
    FullscreenDirective,
  ],
  imports: [CommonModule, ClassifyingTextWithNeuralNetworksRoutingModule],
})
export class ClassifyingTextWithNeuralNetworksModule {}
