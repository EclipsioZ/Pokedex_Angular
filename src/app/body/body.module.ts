import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../components/body/search/search.component';
import { IdComponent } from '../components/body/id/id.component';
import { TypeComponent } from '../components/body/type/type.component';
import { IndexComponent } from '../components/body/index/index.component';
import { CardComponent } from '../components/body/card/card.component';
import { AlphabetCheckDirective } from '../components/body/search/alphabet-check.directive';
import { SearchPipe } from '../components/body/search/search.pipe';
import { IdPipe } from '../components/body/id/id.pipe';
import { TypePipe } from '../components/body/type/type.pipe';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [    
    SearchComponent,
    IdComponent,
    TypeComponent,
    IndexComponent,
    CardComponent,
    AlphabetCheckDirective,
    SearchPipe,
    IdPipe,
    TypePipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class BodyModule { }
