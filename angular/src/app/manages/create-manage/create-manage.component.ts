import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manage } from '../manage';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-create-manage',
  templateUrl: './create-manage.component.html',
  styleUrls: ['./create-manage.component.scss']
})
export class CreateManageComponent implements OnInit {
manage!: any;
  constructor(
    private manageService: ManageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.manage = new Manage();
  }

  addManage(){
    this.manageService.createManage(this.manage).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['manage']);
        this.manage = new Manage();
      },
      error => {
        console.log(error)
      }
    )
  }

}
