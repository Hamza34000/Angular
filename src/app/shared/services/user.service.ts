import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(environment.urlApi + "/users");
  }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(environment.urlApi +"/users",user);
  }

  public deleteUser(id: string): Observable<User>{
    return this.http.delete<User>(environment.urlApi+'/users/'+id);
  }
}
