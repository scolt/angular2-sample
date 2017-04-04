import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], key: string): any[] {
    value = value.sort((a, b) => {
      return a[key] > b[key] ? -1 : 1;
    });
    return value;
  }
}
