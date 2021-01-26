import { Component, OnInit } from '@angular/core';
import { FootballService } from '../football.service';

@Component({
  selector: 'app-football-list',
  templateUrl: './football-list.component.html',
  styleUrls: ['./football-list.component.scss']
})
export class FootballListComponent implements OnInit {

  footballs: any;
  constructor(private footballService: FootballService,
              ) { }

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
