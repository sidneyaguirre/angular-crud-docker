import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CrudAddComponent } from "./crud-add/crud-add.component";
import { CrudGetComponent } from "./crud-get/crud-get.component";
import { CrudEditComponent } from "./crud-edit/crud-edit.component";

import { BusinessService } from "./business.service";
import { StudentAddComponent } from './student-add/student-add.component';
import { CrudDeleteComponent } from './crud-delete/crud-delete.component';
import { RomanNumeralsComponent } from './roman-numerals/roman-numerals.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudAddComponent,
    CrudGetComponent,
    CrudEditComponent,
    StudentAddComponent,
    CrudDeleteComponent,
    RomanNumeralsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule {}
