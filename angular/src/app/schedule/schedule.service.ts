import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private baseUrl = 'http://127.0.0.1:8000/api/schedules';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getScheduleList(){
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
  // tslint:disable-next-line:typedef
  CreateSchedule(value: any){
    return this.http.post(`${this.baseUrl}`, value);
  }
  // tslint:disable-next-line:typedef
  updateSchedule(id: number, value: any){
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  // tslint:disable-next-line:typedef
  getSchedule(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  // tslint:disable-next-line:typedef
  deleteSchedule(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
