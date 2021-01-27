import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private baseUrl = 'http://localhost:8000/api/football';
  constructor(private http: HttpClient) { }

  getAll()
  {
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*',
      'Access-Control-Allow-Methods' :'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(`${this.baseUrl}`,{headers:reqHeader});
  }

  createFootball(data: any)
  {
    return this.http.post(`${this.baseUrl}`, data);
  }

  showFootball(id: number)
  {
    return this.http.get(`${this.baseUrl}/show/${id}`);
  }

  updateFootball(id: number, data: any)
  {
    return this.http.put(`${this.baseUrl}/update/${id}`, data);
  }

  deleteFootball(id: number)
  {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
