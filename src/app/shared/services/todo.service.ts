import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _urlTodosApi = environment.urlApi +'/todos';

  constructor(
    private http: HttpClient,
  ) { }

  public findAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this._urlTodosApi);
  }

  public addTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(this._urlTodosApi,todo);
  }

  public deleteTodo(id: string): Observable<Todo>{
    return this.http.delete<Todo>(this._urlTodosApi+'/'+id);
  }

  public updateTodo(todo : Todo): Observable<Todo>{
    return this.http.put<Todo>(this._urlTodosApi+'/'+todo.id,todo );
  }


  
}
