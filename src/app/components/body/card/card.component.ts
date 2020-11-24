import { Component, OnInit, Input } from '@angular/core';
import { faShieldAlt, faTextHeight, faWeight, faHeart, faBomb, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  //Name of Pokemon
  @Input()
  name!: string;
  //Link image of Pokemon
  @Input()
  img!: string;
  //ID of Pokemon
  @Input()
  id!: number;
  //Types of Pokemon
  @Input()
  types!: Array<string>;
  //Heart of Pokemon
  @Input()
  life!: number;
  //Damage of Pokemon
  @Input()
  damage!: number;
  //Defense of Pokemon
  @Input()
  defense!: number;
  //Height of Pokemon
  @Input()
  height!: number;
  //Weight of Pokemon
  @Input()
  weight!: number;
  //Classification of Pokemon
  @Input()
  classification!: string;

  //All fa icon for the back of card
  faShieldAlt = faShieldAlt;
  faTextHeight = faTextHeight;
  faWeight = faWeight;
  faHeart = faHeart;
  faBomb = faBomb;
  faList = faList;
  constructor() {}
  ngOnInit(): void {}
}
