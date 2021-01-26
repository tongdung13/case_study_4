import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FootballService } from '../football.service';

@Component({
  selector: 'app-football-list',
  templateUrl: './football-list.component.html',
  styleUrls: ['./football-list.component.scss']
})
export class FootballListComponent implements OnInit {

  footballs: any;
  constructor(private footballService: FootballService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.footballService.getAll().subscribe(
      data => {
        this.footballs = data;

      }, error => console.log(error)
    )
  }

  deleteFootball(id: number)
  {
    this.footballService.deleteFootball(id).subscribe(
      data => {
        this.loadData();
      }, error => console.log(error)
    )
  }


}
