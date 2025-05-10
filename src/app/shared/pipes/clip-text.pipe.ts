import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clipText',
})
export class ClipTextPipe implements PipeTransform {
  transform(value: string, args: number): string {
    return `${value.substring(0, args)}...`;
  }
}
