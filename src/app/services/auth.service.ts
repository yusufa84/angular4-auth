import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://localhost:5000/auth';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  login(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/login`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

  logout(token): Promise<any> {
    console.log("Log out in auth.service.ts, token " + token)
    let url: string = `${this.BASE_URL}/logout`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${token}`
    });
    console.log(headers);
    return this.http.get(url, {headers: headers}).toPromise();
    //return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

  register(user: User): Promise<any> {
    let url: string = `${this.BASE_URL}/register`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

  ensureAuthenticated(token): Promise<any> {
    let url: string = `${this.BASE_URL}/status`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(url, {headers: headers}).toPromise();
  }
}
