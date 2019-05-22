import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReversePipe, SortPipe } from './pipes';

@NgModule({
  declarations: [
    ReversePipe,
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReversePipe,
    SortPipe
  ]
})
export class PipeModule { }
