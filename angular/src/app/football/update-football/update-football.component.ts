import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Football } from '../football';
import { FootballService } from '../football.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-update-football',
  templateUrl: './update-football.component.html',
  styleUrls: ['./update-football.component.scss']
})
export class UpdateFootballComponent implements OnInit {

  football!: any;
  id!: any;

  selectedFile!: File;
  fb: any;
  srcImg!: string;
  downloadURL: Observable<string> | undefined;

  constructor(private service: FootballService,
              private router: Router,
              private route: ActivatedRoute,
              private storage: AngularFireStorage,
              private imageService: ImageService) { }

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
    this.football.image = this.srcImg;
    this.service.updateFootball(this.id, this.football).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['football']);
      }, error => console.log(error)
    )
  }

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
