import { Meals } from './../interface/meals';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Meals[], term: string): Meals[] {
     return value.filter((item)=>item.strMeal.toLowerCase().includes(term.toLowerCase())) ;
    ;
  }

}
