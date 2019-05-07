import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

import { CvaPlaygroundComponent } from './cva-playground.component';
import { CvaPlaygroundRoutingModule } from './cva-playground-routing.module';
import { DropdownFilterComponent } from './dropdown-filter/dropdown-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CvaPlaygroundRoutingModule,
    ButtonModule,
    InputTextModule,
    DropdownModule
  ],
  declarations: [CvaPlaygroundComponent, DropdownFilterComponent]
})

export class CvaPlaygroundModule { }
