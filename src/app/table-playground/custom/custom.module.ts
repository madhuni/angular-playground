import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { CustomComponent } from './custom.component';
import { TableModule } from 'primeng/table';

/* Fontawesome Imports */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add an icon to the library for convenient access in other components
library.add(fas);

import { TablePipe } from 'src/app/pipes/table/table.pipe.module';

@NgModule({
  declarations: [CustomComponent],
  imports: [
    CommonModule,
    CustomRoutingModule,
    TableModule, 
    FontAwesomeModule,
    TablePipe
  ]
})
export class CustomModule {}
