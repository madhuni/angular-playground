import { Pipe, PipeTransform } from "@angular/core";

import { User } from '../models/user.model';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string) {
    const valArray = value.split('');
    const reverseArray = valArray.reverse();
    const finalString = reverseArray.join('');
    return finalString;
  }
}

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(arr: User[], type: string, propName: string): User[] {
    if (arr.length === 0) {
      return arr;
    }
    const resultArray = arr.sort(
      (a: User, b: User) => {
        switch (type) {
          case 'asc':
            return a[propName] > b[propName] ? 1 : -1;   
          case 'desc':
            return a[propName] < b[propName] ? 1 : -1;   
        }
      }
    )

    return resultArray;
  }
}