import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RnnNlpRoutingModule } from './rnn-nlp-routing.module';
import { RnnNlpComponent } from './rnn-nlp.component';

@NgModule({
  declarations: [RnnNlpComponent],
  imports: [CommonModule, RnnNlpRoutingModule],
})
export class RnnNlpModule {}
