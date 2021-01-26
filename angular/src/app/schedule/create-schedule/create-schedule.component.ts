import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../schedule.service';
import {Route, Router} from '@angular/router';
import {Schedule} from '../schedule';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.scss']
})
export class CreateScheduleComponent implements OnInit {
schedule: any;
  constructor(
    private scheduleService: ScheduleService,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.schedule = new Schedule();
  }
  // tslint:disable-next-line:typedef
  addSchedule(){
    this.scheduleService.CreateSchedule(this.schedule).subscribe(
      data => {
        console.log(data);
        // @ts-ignore
        this.router.navigate(['schedules']);
        this.schedule = new Schedule();
      },
      error => {
        console.log(error);
      }
    );
  }

}
