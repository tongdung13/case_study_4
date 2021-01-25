import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ManageListComponent } from './manages/manage-list/manage-list.component';
import { CreateManageComponent } from './manages/create-manage/create-manage.component';
import { UpdateManageComponent } from './manages/update-manage/update-manage.component';


import {FormsModule} from '@angular/forms';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateScheduleComponent } from './schedule/create-schedule/create-schedule.component';
import { UpdateScheduleComponent } from './schedule/update-schedule/update-schedule.component';



@NgModule({
  declarations: [
    AppComponent,

    ManageListComponent,
    CreateManageComponent,
    UpdateManageComponent,

    ScheduleListComponent,
    CreateScheduleComponent,
    UpdateScheduleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
