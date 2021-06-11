import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user-routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';



@NgModule({
  declarations: [UserListComponent, UserViewComponent, UserEditComponent, UserCreateComponent],
  imports: [
    RouterModule.forChild(userRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
