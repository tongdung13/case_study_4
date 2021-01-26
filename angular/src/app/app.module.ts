import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballListComponent } from './football/football-list/football-list.component';
import { FootballDetailsComponent } from './football/football-details/football-details.component';
import { CreateFootballComponent } from './football/create-football/create-football.component';
import { UpdateFootballComponent } from './football/update-football/update-football.component';
import { ManageListComponent } from './manages/manage-list/manage-list.component';
import { CreateManageComponent } from './manages/create-manage/create-manage.component';
import { UpdateManageComponent } from './manages/update-manage/update-manage.component';
import {FormsModule} from '@angular/forms';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateScheduleComponent } from './schedule/create-schedule/create-schedule.component';
import { UpdateScheduleComponent } from './schedule/update-schedule/update-schedule.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { AngularFireModule} from '@angular/fire'
import { AngularFireStorageModule} from '@angular/fire/storage'
import { AngularFirestore} from '@angular/fire/firestore'
import { from } from 'rxjs';
import { DropzoneDirective } from './dropzone.directive';



@NgModule({
  declarations: [
    AppComponent,

    FootballListComponent,
    FootballDetailsComponent,
    CreateFootballComponent,
    UpdateFootballComponent,
    ManageListComponent,
    CreateManageComponent,
    UpdateManageComponent,
    ScheduleListComponent,
    CreateScheduleComponent,
    UpdateScheduleComponent,
    NavbarComponent,
    DropzoneDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDathM3nYJlIRIwaufYkkyfcBuQ7F9YO0U",
        authDomain: "case-study-4.firebaseapp.com",
        databaseURL: "https://case-study-4-default-rtdb.firebaseio.com",
        projectId: "case-study-4",
        storageBucket: "case-study-4.appspot.com",
        messagingSenderId: "957175901836",
        appId: "1:957175901836:web:508761c183b2cfecd095a9",
        measurementId: "G-2XGZ9FNXD9"
      }
    ),
    AngularFireStorageModule,

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
