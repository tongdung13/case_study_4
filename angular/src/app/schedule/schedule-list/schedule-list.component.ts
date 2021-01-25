import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../schedule.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {
schedules: any;
  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.loadData();
  }
  // tslint:disable-next-line:typedef
  loadData(){
    this.scheduleService.getScheduleList().subscribe(
      data => {
        this.schedules = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  deleteSchedulet(id: number){
    this.scheduleService.deleteSchedule(id).subscribe(
      data => {
        this.loadData();
      }, error => console.log(error)
    );
  }

}
