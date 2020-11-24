import { Component, OnInit } from '@angular/core';
import * as json from '../../../../assets/seed.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //Get the value of JSON
  valueCard: any = (json as any).default;
  constructor() { }

  inputValue: string = '';

  ngOnInit(): void {
  }

}
