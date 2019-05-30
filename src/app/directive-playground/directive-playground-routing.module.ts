import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivePlaygroundComponent } from './directive-playground.component';

const routes: Routes = [{
  path: '',
  component: DirectivePlaygroundComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivePlaygroundRoutingModule { }
