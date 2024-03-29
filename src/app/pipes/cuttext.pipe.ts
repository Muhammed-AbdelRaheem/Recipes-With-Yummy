import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuttext'
})
export class CuttextPipe implements PipeTransform {

  transform(value: string, num: number): string {
    return value?.split(' ').slice(0,num).join(' ');
  }

}
