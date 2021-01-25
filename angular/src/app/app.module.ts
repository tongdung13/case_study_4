import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateScheduleComponent } from './schedule/create-schedule/create-schedule.component';
import { UpdateScheduleComponent } from './schedule/update-schedule/update-schedule.component';



@NgModule({
  declarations: [
    AppComponent,
    ScheduleListComponent,
    CreateScheduleComponent,
    UpdateScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
