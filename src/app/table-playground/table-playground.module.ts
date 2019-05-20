import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePlaygroundComponent } from './table-playground.component';

import { TablePlaygroundRoutingModule } from './table-playground-routing.module';

import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TablePlaygroundRoutingModule,
    MatButtonModule
  ],
  declarations: [TablePlaygroundComponent]
})
export class TablePlaygroundModule { }
