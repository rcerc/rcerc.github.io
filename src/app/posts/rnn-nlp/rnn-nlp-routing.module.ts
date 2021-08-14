import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RnnNlpComponent } from './rnn-nlp.component';

const routes: Routes = [{ path: '**', component: RnnNlpComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RnnNlpRoutingModule {}
