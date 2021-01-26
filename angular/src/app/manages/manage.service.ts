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

  createManage(value: any){
    return this.http.post(`${this.baseUrl}`,value);
  }

  updateManage(id: number,value: any){
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  getManage(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  deleteManage(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
