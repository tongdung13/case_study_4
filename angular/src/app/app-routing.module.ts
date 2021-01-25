import { UpdateManageComponent } from './manages/update-manage/update-manage.component';
import { CreateManageComponent } from "./manages/create-manage/create-manage.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//  import { Manage } from "./manages/manage";
import { ManageListComponent } from "./manages/manage-list/manage-list.component";



const routes: Routes = [
  { path: "manage",component: ManageListComponent},
  { path: "manage/edit/:id",component: UpdateManageComponent},
  { path: "add",component: CreateManageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
