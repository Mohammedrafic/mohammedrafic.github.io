import { Injectable } from '@angular/core';
import { LoginModel } from '../Models/LoginModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private BaseURL = environment;
  constructor(private http: HttpClient) { }

  Login(loginRequest : any) : Observable<any>{
    return this.http.post(`${this.BaseURL}/Login/api/login`,loginRequest);
  } 
}
