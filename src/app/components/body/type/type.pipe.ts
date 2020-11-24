import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {


  //Pipe to check if the select value is equal to a type of pokemon in the list
  transform(items: any[], inputValue: string): any[] {
    if(!items) return [];
    if(!inputValue) return items;
    return items.filter( (it) => {
      return it.type.includes(inputValue);
    });
  }

}
