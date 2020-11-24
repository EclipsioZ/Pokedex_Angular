import { Component, OnInit } from '@angular/core';
import * as json from '../../../../assets/seed.json';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class IdComponent implements OnInit {

  //Get JSON Value
  valueCard: any = (json as any).default;

  //Get all ID of pokemon
  allId: Array<any> = this.generateIdWithJson((json as any).default);

  //Get the max value of list
  maxId: number = this.allId.length;

  //Get the min value of the list
  minId: number = this.allId[0];

  constructor() { }
  inputValue: any;
  ngOnInit(): void {

  }

  //Function to generate the list of ID with the JSON file
  generateIdWithJson(Json: Array<any>): any {

    let allIdLists: any[] = [];

    Json.forEach((element: any) => {
      allIdLists.push(element.id);
    });
    console.log(allIdLists[1])
    return allIdLists;
  }

}
