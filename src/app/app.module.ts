import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZipAndForkJoinComponent } from './zip-and-fork-join/zip-and-fork-join.component';
import { SearchComponent } from './search/search.component';
import { CombineLatestandWithLatestFromComponent } from './combine-latestand-with-latest-from/combine-latestand-with-latest-from.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEventComponent } from './form-event/form-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipAndForkJoinComponent,
    SearchComponent,
    CombineLatestandWithLatestFromComponent,
    FormEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
