
import { UpdateManageComponent } from './manages/update-manage/update-manage.component';
import { CreateManageComponent } from './manages/create-manage/create-manage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageListComponent } from './manages/manage-list/manage-list.component';

import {ScheduleListComponent} from './schedule/schedule-list/schedule-list.component';
import {CreateScheduleComponent} from './schedule/create-schedule/create-schedule.component';
import {UpdateScheduleComponent} from './schedule/update-schedule/update-schedule.component';
import { FootballListComponent } from './football/football-list/football-list.component';
import { CreateFootballComponent } from './football/create-football/create-football.component';
import { UpdateFootballComponent } from './football/update-football/update-football.component';
import { FootballDetailsComponent } from './football/football-details/football-details.component';

const routes: Routes = [
  { path: '', component: ManageListComponent, pathMatch: 'full'},
  { path: 'manage/edit/:id', component: UpdateManageComponent},
  { path: 'add', component: CreateManageComponent},
  {path: 'schedules', component: ScheduleListComponent},
  {path: 'adda' , component: CreateScheduleComponent},
  {path: 'schedules/edit/:id', component: UpdateScheduleComponent},
  { path: 'football', component: FootballListComponent},
  { path: 'addFootball', component: CreateFootballComponent},
  { path: 'updateFootball/:id', component: UpdateFootballComponent},
  { path: 'showFootball/:id', component: FootballDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
