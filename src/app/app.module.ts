import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListComponent } from './src/app/components/item-list/item-list.component';
import { AddComponent } from './src/app/components/add/add.component';
import { FormInputComponent } from './src/app/components/form-input/form-input.component';
import { EditComponent } from './src/app/components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    AddComponent,
    FormInputComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
