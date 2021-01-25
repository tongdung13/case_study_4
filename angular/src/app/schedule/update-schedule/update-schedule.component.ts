import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../schedule.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Schedule} from '../schedule';

@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.scss']
})
export class UpdateScheduleComponent implements OnInit {
schedule!: any;
id!: any;
  constructor(private service: ScheduleService,
              private router: Router,
              private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.id = this.router.snapshot.params.id;
    this.id = this.route.snapshot.params.id;
    this.schedule = new Schedule();
    this.service.getSchedule(this.id).subscribe(
      data => {
        this.schedule = data;
        console.log(this.schedule);
      }, error => console.log(error)
    );
  }
  // tslint:disable-next-line:typedef
  editSchedule(){
    this.service.updateSchedule(this.id, this.schedule).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['schedules']);
      }, error => console.log(error)
    );
  }

}
