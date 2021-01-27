import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Football } from '../football';
import { FootballService } from '../football.service';
import {finalize} from 'rxjs/operators';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-create-football',
  templateUrl: './create-football.component.html',
  styleUrls: ['./create-football.component.scss']
})
export class CreateFootballComponent implements OnInit {

  football: any;
  selectedFile!: File;
  fb: any;
  srcImg!: string;
  downloadURL: Observable<string> | undefined;
  uploadPercent: any;
  constructor(private footballService: FootballService,
              private roter: Router,
              private storage: AngularFireStorage,
              private imageService: ImageService
              ) { }

  ngOnInit(): void {
    this.football = new Football();
  }

  // tslint:disable-next-line:typedef
  addFootball()
  {
    this.football.image = this.srcImg;
    console.log(this.football);
    this.footballService.createFootball(this.football).subscribe(
      data => {
        console.log(data);
        this.roter.navigate(['football']);
        this.football = new Football();
      }, error => console.log(error)
    );
  }

  // tslint:disable-next-line:typedef
  onFileSelected(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            this.srcImg = url;
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

}
