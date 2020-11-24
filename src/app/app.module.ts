import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent} from './components/body/main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { BodyModule } from './body/body.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DonneesService } from './services/donnees.service';

import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    BodyModule
  ],
  providers: [DonneesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
