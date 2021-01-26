
import { UpdateManageComponent } from './manages/update-manage/update-manage.component';
import { CreateManageComponent } from './manages/create-manage/create-manage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageListComponent } from './manages/manage-list/manage-list.component';

import {ScheduleListComponent} from './schedule/schedule-list/schedule-list.component';
import {CreateScheduleComponent} from './schedule/create-schedule/create-schedule.component';
import {UpdateScheduleComponent} from './schedule/update-schedule/update-schedule.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'manage', component: ManageListComponent},
  { path: 'manage/edit/:id', component: UpdateManageComponent},
  { path: 'add', component: CreateManageComponent},
  {path: 'schedules', component: ScheduleListComponent},
  {path: 'adda' , component: CreateScheduleComponent},
  {path: 'schedules/edit/:id', component: UpdateScheduleComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
