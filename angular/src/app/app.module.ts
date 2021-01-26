import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballListComponent } from './football/football-list/football-list.component';
import { FootballDetailsComponent } from './football/football-details/football-details.component';
import { CreateFootballComponent } from './football/create-football/create-football.component';
import { UpdateFootballComponent } from './football/update-football/update-football.component';

@NgModule({
  declarations: [
    AppComponent,
    FootballListComponent,
    FootballDetailsComponent,
    CreateFootballComponent,
    UpdateFootballComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
