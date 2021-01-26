import { LoginService } from './login.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  email = '';
  password = '';

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getToken();
  }

  // tslint:disable-next-line:typedef
  getToken() {
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        localStorage.setItem('AccessToken',data.token)
        this.router.navigate(['manage'])
      },
      error => console.log(error));
  }

}
