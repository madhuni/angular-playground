import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgTableModule } from './prime-ng-table/prime-ng-table.module';
import { MaterialTableModule } from './material-table/material-table.module';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgTableModule,
    MaterialTableModule
  ],
  declarations: []
})
export class TablePlaygroundModule { }
