import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {

  //Pipe to check if the inputValue is equal to ID of pokemon
  transform(items: any[], inputValue: number): any[] {
    if(!items) return [];
    if(!inputValue) return items;
    return items.filter( it => {
      return it.id == inputValue;
    });
  }

}
