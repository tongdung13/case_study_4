import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Football } from '../football';
import { FootballService } from '../football.service';

@Component({
  selector: 'app-create-football',
  templateUrl: './create-football.component.html',
  styleUrls: ['./create-football.component.scss']
})
export class CreateFootballComponent implements OnInit {

  football: any;
  constructor(private footballService: FootballService,
              private roter: Router) { }

  ngOnInit(): void {
    this.football = new Football();
  }

  addFootball()
  {
    this.footballService.createFootball(this.football).subscribe(
      data => {
        console.log(data);
        this.roter.navigate(['football']);
        this.football = new Football();
      }, error => console.log(error)
    )
  }

}
