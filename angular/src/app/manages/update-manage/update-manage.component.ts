import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manage } from '../manage';
import { ManageService } from '../manage.service';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-update-manage',
  templateUrl: './update-manage.component.html',
  styleUrls: ['./update-manage.component.scss']
})
export class UpdateManageComponent implements OnInit {
  manage!: any;
  id!: any;

  constructor(private service: ManageService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.manage = new Manage();
    
    this.service.getManage(this.id).subscribe(
      data => {
        this.manage = data;
      },error => console.log(error)
    )
  }

  editManage(){
    this.service.updateManage(this.id,this.manage).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['manage']);
      },error => console.log(error)
    )
  }
}
