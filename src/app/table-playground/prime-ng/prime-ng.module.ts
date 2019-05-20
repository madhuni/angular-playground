import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

/* Fontawesome Imports */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(fas);

import { PrimeNgRoutingModule } from './prime-ng-routing.module';
import { PrimeNgComponent } from './prime-ng.component';
import { TablePipe } from 'src/app/pipes/table/table.pipe.module';

@NgModule({
  declarations: [PrimeNgComponent],
  imports: [
    CommonModule,
    PrimeNgRoutingModule,
    TableModule,
    FontAwesomeModule,
    TablePipe
  ]
})
export class PrimeNgModule { }
