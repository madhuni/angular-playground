import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CvaPlaygroundComponent } from './cva-playground.component';

const routes: Routes = [
  {
    path: '',
    component: CvaPlaygroundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CvaPlaygroundRoutingModule { }
