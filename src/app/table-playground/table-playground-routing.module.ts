import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePlaygroundComponent } from './table-playground.component';

const routes: Routes = [
  {
    path: '',
    component: TablePlaygroundComponent
  },
  {
    path: 'material',
    loadChildren: './material/material.module#MaterialModule'
  },
  {
    path: 'prime-ng',
    loadChildren: './prime-ng/prime-ng.module#PrimeNgModule'
  },
  {
    path: 'custom',
    loadChildren: './custom/custom.module#CustomModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablePlaygroundRoutingModule { }
