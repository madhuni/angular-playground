import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipePlaygroundRoutingModule } from './pipe-playground-routing.module';
import { PipePlaygroundComponent } from './pipe-playground.component';
import { PipeModule } from './pipe/pipe.module';

@NgModule({
  declarations: [PipePlaygroundComponent],
  imports: [
    CommonModule,
    PipePlaygroundRoutingModule,
    PipeModule
  ]
})
export class PipePlaygroundModule { }
