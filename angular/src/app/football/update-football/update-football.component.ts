import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Football } from '../football';
import { FootballService } from '../football.service';

@Component({
  selector: 'app-update-football',
  templateUrl: './update-football.component.html',
  styleUrls: ['./update-football.component.scss']
})
export class UpdateFootballComponent implements OnInit {

  football!: any;
  id!: any;
  constructor(private service: FootballService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.football = new Football();

      this.service.showFootball(this.id).subscribe(
        data => {
          this.football = data;
        }, error => console.log(error)
      )
  }

  editFootball()
  {
    this.service.updateFootball(this.id, this.football).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['football']);
      }, error => console.log(error)
    )
  }
}
