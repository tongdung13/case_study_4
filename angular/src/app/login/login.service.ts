import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private baseUrl = 'http://127.0.0.1:8000/api/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const data = {
      email,
      password
    };
    return this.http.post(`${this.baseUrl}`, data, { headers: reqHeader, responseType: 'json' });
  }

}
