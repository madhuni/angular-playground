import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class TypographyPipe implements PipeTransform {

  transform(value: string, finalLength: number): string {
    if(value.length < finalLength) {
      return value;
    } else {
      return value.substr(0, finalLength) + '...';
    }
  }

}
