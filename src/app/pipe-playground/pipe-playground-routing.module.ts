import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipePlaygroundComponent } from './pipe-playground.component';

const routes: Routes = [{
  path: '',
  component: PipePlaygroundComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipePlaygroundRoutingModule { }
