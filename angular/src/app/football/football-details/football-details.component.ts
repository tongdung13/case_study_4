import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Football } from '../football';
import { FootballService } from '../football.service';

@Component({
  selector: 'app-football-details',
  templateUrl: './football-details.component.html',
  styleUrls: ['./football-details.component.scss']
})
export class FootballDetailsComponent implements OnInit {

  id!: any;
  football!: any;
  constructor(private service: FootballService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.football = new Football();

    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.showFootball(this.id).subscribe(
      data => {
        console.log(data);
        this.football = data;
      }, error => console.log(error)
    );
  }

  list() {
    this.id = this.route.snapshot.params['id'];
    this.router.navigate(['football']);
  }

}
