import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserCreateComponent} from './user-create/user-create.component'
import {UserListComponent} from './user-list/user-list.component'
import {UserEditComponent} from './user-edit/user-edit.component'
import {UserViewComponent} from './user-view/user-view.component'


export const userRoutes: Routes = [

  {
    path: "userCreate",
    component: UserCreateComponent
  },
  {
    path: "userList",
    component: UserListComponent
  },
  {
    path: "userEdit/:name",
    component: UserEditComponent
  },
  {
    path: "userView/:name",
    component: UserViewComponent
  },
  {
    path: "**",
    redirectTo: "UserCreateComponent"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(userRoutes)],
  exports: [RouterModule]
})
export class UserModule { }
