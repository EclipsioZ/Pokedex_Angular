import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphabetCheck]'
})
export class AlphabetCheckDirective {

  constructor() { }

  key: any;

  //Directive to check if the input value is just a charactere of alphabet
  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    if ((this.key >= 15 && this.key <= 64) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
      event.preventDefault();
    }
  }

}
