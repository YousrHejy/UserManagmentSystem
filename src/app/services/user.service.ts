import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5100/users';

  constructor(private http: HttpClient) { }

  public getUsers(){
    return this.http.get<User[]>(this.apiUrl);
  }
}
