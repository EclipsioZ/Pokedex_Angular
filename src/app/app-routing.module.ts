import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdComponent } from './components/body/id/id.component';
import { SearchComponent } from './components/body/search/search.component';
import { TypeComponent } from './components/body/type/type.component';
import { IndexComponent } from './components/body/index/index.component';


//Router of all route in the header menu to redirect on the good component
const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'id', component: IdComponent},
  {path: 'search', component: SearchComponent},
  {path: 'type', component: TypeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
