import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (value) {
      if (value.length > parseInt(args[0])) {
        return value.substring(0, parseInt(args[0])) + "...";
      }
    }
    return value;
  }

}
