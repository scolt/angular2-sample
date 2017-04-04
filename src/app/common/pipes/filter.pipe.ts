import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(value: any[], key: string, query: string): any[] {
    return value.filter((item) => {
      return item[key].toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
  }
};
