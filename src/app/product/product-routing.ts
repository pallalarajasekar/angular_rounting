import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductCreateComponent} from './product-create/product-create.component'
import {ProductListComponent} from './product-list/product-list.component'
import {ProductEditComponent} from './product-edit/product-edit.component'
import {ProductViewComponent} from './product-view/product-view.component'


export const ProductRoutes: Routes = [

  {
    path: "productCreate",
    component: ProductCreateComponent
  },
  {
    path: "productList",
    component: ProductListComponent
  },
  {
    path: "productEdit/:name",
    component: ProductEditComponent
  },
  {
    path: "productView/:name",
    component: ProductViewComponent
  },
  {
    path: "**",
    redirectTo: "ProductListComponent"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ProductRoutes)],
  exports: [RouterModule]
})
export class ProductModule { }
