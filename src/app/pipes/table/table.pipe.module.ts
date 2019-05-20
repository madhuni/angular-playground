import { NgModule } from "@angular/core";
import { TableHeadersPipe, TableSubheadersPipe, TableDataColumnsPipe } from 'src/app/pipes/table/table.pipe';

@NgModule({
    imports: [],
    declarations: [TableHeadersPipe, TableSubheadersPipe, TableDataColumnsPipe],
    exports: [TableHeadersPipe, TableSubheadersPipe, TableDataColumnsPipe]
})
export class TablePipe { }