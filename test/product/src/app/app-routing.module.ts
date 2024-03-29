import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";


const routes: Routes = [
  {path:"",component: ProductListComponent},
  {path:"create",component: ProductCreateComponent},
  {path:"edit/:id",component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
