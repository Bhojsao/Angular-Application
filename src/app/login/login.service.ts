import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Login } from '../shared/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http:HttpClient) { }

  authenticate(login: Login) : Observable<any>{
    const url = '/AuthService/auth/login/authenticate?userName='+login.userName+'&password='+login.password;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', '*');

    return this.http.get(url)
      .pipe(map((res:HttpResponse<any>)=> {
           console.log(res);
           return res;
        }));     
  }
}
