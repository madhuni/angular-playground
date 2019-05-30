import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'cva',
    loadChildren: './cva-playground/cva-playground.module#CvaPlaygroundModule'
  },
  {
    path: 'table',
    loadChildren: './table-playground/table-playground.module#TablePlaygroundModule'
  },
  {
    path: 'angular-pipe',
    loadChildren: './pipe-playground/pipe-playground.module#PipePlaygroundModule'
  },
  {
    path: 'custom-directives',
    loadChildren: './directive-playground/directive-playground.module#DirectivePlaygroundModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
