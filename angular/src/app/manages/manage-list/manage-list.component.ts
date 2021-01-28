import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageService } from '../manage.service';



@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.scss']
})
export class ManageListComponent implements OnInit {
 manages!: any;
  constructor(private manageService: ManageService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }
loadData(){
    this.manageService.getManageList().subscribe(
      data => {
        this.manages = data;
      },
      error => {
        console.log(error);
      }
    )
  }

    deleteManage(id: number){
    this.manageService.deleteManage(id).subscribe(
      data => {
        this.loadData();
      },error => console.log(error)
    )
  }
}
