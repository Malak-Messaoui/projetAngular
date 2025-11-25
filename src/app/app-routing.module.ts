import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeSuggestionsComponent } from './liste-suggestions/liste-suggestions.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'suggestion',component:ListeSuggestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
