import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineLatestandWithLatestFromComponent } from './combine-latestand-with-latest-from/combine-latestand-with-latest-from.component';
import { FormEventComponent } from './form-event/form-event.component';
import { SearchComponent } from './search/search.component';
import { ZipAndForkJoinComponent } from './zip-and-fork-join/zip-and-fork-join.component';

const routes: Routes = [

  {path : 'search' , component : SearchComponent},
  {path : 'zip' , component : ZipAndForkJoinComponent},
  {path : 'combine' , component : CombineLatestandWithLatestFromComponent},
  {path : 'frevent' , component : FormEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
