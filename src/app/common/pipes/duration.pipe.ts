import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    value = value / 1000;
    let hours = Math.floor(value / 3600);
    let minutes = Math.floor((value - (hours * 3600)) / 60);

    return (hours ? `${hours}h ` : '') + (minutes && `${minutes}m `);
  }
}
