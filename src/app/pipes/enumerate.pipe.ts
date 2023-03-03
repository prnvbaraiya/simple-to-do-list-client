import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumerate',
})
export class EnumeratePipe implements PipeTransform {
  transform(arr: any[]): { index: number; value: any }[] {
    if (!Array.isArray(arr)) {
      return arr;
    }

    return arr.map((value, index) => {
      return { index, value };
    });
  }
}
