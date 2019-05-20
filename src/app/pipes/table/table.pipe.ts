import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableheaders'
})
export class TableHeadersPipe implements PipeTransform {

  transform(items: any[]): any {
    if(!items) {
      return items;
    }
    return items.filter((item) => {
      return (item.type == 'column' || item.type == 'supercolumn');
    });
  }
}

@Pipe({
  name: 'tablesubheaders'
})
export class TableSubheadersPipe implements PipeTransform {

  transform(items: any[]): any {
    if(!items) {
      return items;
    }
    return items.filter((item) => {
      return (item.type == 'subcolumn');
    });
  }
}

@Pipe({
  name: 'tabledatacolumns'
})
export class TableDataColumnsPipe implements PipeTransform {

  transform(items: any[]): any {
    if(!items) {
      return items;
    }
    return items.filter((item) => {
      return (item.type == 'column' || item.type == 'subcolumn');
    });
  }
}