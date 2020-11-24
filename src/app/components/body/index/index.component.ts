import { Component, OnInit } from '@angular/core';
import * as json from '../../../../assets/seed.json';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  //Value of JSON
  valueCard: any = (json as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
