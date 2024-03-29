import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CrudAddComponent } from "./crud-add/crud-add.component";
import { CrudEditComponent } from "./crud-edit/crud-edit.component";
import { CrudGetComponent } from "./crud-get/crud-get.component";
import { RomanNumeralsComponent } from './roman-numerals/roman-numerals.component';

const routes: Routes = [
  {
    path: "business/create",
    component: CrudAddComponent
  },
  {
    path: "business/edit",
    component: CrudEditComponent
  },
  {
    path: "business/list",
    component: CrudGetComponent
  },
  {
    path: "business/delete/:id",
    component: CrudEditComponent
  },
  {
    path: "roman/numerals",
    component: RomanNumeralsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
