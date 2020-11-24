import { Component, OnInit } from '@angular/core';
import * as json from '../../../../assets/seed.json';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {

  //Get all value of JSON
  valueCard: any = (json as any).default;
  //List of types options
  optionLists: Array<any> = this.getAllOptions((json as any).default);
  constructor() { }
  inputValue: any;
  ngOnInit(): void {
  }

  //Get all types of the list of pokemon
  getAllOptions(Json: Array<any>): any {

    let allOptionsLists: any[] = [];

    Json.forEach((types: any) => {

      types.type.forEach((type: any) => {
        if(!allOptionsLists.includes(type)) {
          allOptionsLists.push(type);
        }
      });
    });
    console.log(allOptionsLists);
    return allOptionsLists;

  }
}
