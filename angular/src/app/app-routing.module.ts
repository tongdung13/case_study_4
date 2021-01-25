import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ScheduleListComponent} from './schedule/schedule-list/schedule-list.component';
import {CreateScheduleComponent} from './schedule/create-schedule/create-schedule.component';
import {UpdateScheduleComponent} from './schedule/update-schedule/update-schedule.component';

const routes: Routes = [
  {path: 'schedules', component: ScheduleListComponent},
  {path: 'add' , component: CreateScheduleComponent},
  {path: 'schedules/edit/:id', component: UpdateScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
