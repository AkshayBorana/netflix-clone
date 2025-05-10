import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clipText',
})
export class ClipTextPipe implements PipeTransform {
  transform(value: string): string {
    return value.substring(0, 140);
  }
}
