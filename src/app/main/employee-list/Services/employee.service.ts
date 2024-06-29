import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private BaseURL = environment;
  constructor(private http: HttpClient) { }

  GetEmployeeList() : Observable<any[]>{
    return this.http.get<any[]>(`${this.BaseURL}/Employee/api/GetEmployeeList`);
  } 
}
