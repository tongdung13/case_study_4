import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ManageService {

  private baseUrl = "http://127.0.0.1:8000/api/manages";

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getManageList(){
    var auth_token = localStorage.getItem('AccessToken');
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*',
      'Access-Control-Allow-Methods' :'GET,POST,OPTIONS,DELETE,PUT',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + auth_token
    });
    return this.http.get(`${this.baseUrl}`,{headers:reqHeader });
  }

  // tslint:disable-next-line:typedef
  createManage(value: any){
    return this.http.post(`${this.baseUrl}`, value);
  }

  // tslint:disable-next-line:typedef
  updateManage(id: number, value: any){
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  // tslint:disable-next-line:typedef
  getManage(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:typedef
  deleteManage(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
