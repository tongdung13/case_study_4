import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private baseUrl = 'http://localhost:8000/api/football';
  constructor(private http: HttpClient) { }

  getAll()
  {
    return this.http.get(`${this.baseUrl}`);
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

  getFootballByName(name: string)
  {
    return this.http.post(`${this.baseUrl}`, name);
  }
}
