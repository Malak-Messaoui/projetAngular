import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionComponent } from './suggestion.component';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';

const routes: Routes = [{ path: '', component: ListSuggestionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionRoutingModule { }
