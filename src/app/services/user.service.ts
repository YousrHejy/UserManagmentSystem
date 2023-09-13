import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5100/users';

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get<User[]>(this.apiUrl);
  }

  addTask(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, httpOptions);
  }
}
