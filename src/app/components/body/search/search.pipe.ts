import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {


  //Pipe to check if the input value is include in the list of array of pokemon
  transform(items: any[], inputValue: string): any[] {
    if(!items) return [];
    if(!inputValue) return items;
    inputValue = inputValue.toLowerCase();
    return items.filter( it => {
      return it.name.toLowerCase().includes(inputValue);
    });
  }
}
