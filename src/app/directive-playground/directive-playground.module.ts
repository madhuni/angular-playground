import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivePlaygroundRoutingModule } from './directive-playground-routing.module';
import { DirectivePlaygroundComponent } from './directive-playground.component';
import { TypographyPipe } from './pipes/typography.pipe';
import { TextToolTipDirective } from './directives/text-tool-tip.directive';
import { DebounceDirective } from './directives/debounce.directive';

@NgModule({
  declarations: [DirectivePlaygroundComponent, TypographyPipe, TextToolTipDirective, DebounceDirective],
  imports: [
    CommonModule,
    DirectivePlaygroundRoutingModule
  ],
  exports: [TypographyPipe, TextToolTipDirective, DebounceDirective]
})
export class DirectivePlaygroundModule { }
