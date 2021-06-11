import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ProductRoutes } from "./product-routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';



@NgModule({
  declarations: [ProductCreateComponent, ProductListComponent, ProductEditComponent, ProductViewComponent],
  imports: [
    RouterModule.forChild(ProductRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
