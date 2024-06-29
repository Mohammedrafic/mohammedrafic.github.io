import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private BaseURL = environment.BaseURL;
  constructor(private http: HttpClient) { }

  GetEmployeeList() : Observable<any[]>{
    return this.http.get<any[]>(`${this.BaseURL}/Employee/api/GetEmployeeList`);
  } 

  GetEmployeeById(Id : number) : Observable<any[]>{
    return this.http.get<any>(`${this.BaseURL}/Employee/api/GetEmployeeById/${Id}`);
  } 

  UpdateStarred(id : number) : Observable<any[]>{
    return this.http.get<any>(`${this.BaseURL}/Employee/api/UpdateStarred/${id}`);
  } 
}
