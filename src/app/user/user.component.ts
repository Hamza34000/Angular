import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../shared/models/todo';
import { User } from '../shared/models/user';
import { TodoService } from '../shared/services/todo.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  todos: Todo[] = [];
  constructor(
    private userService: UserService,
    private todoService: TodoService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: User[]) => this.users = users);
  }

  getTodo(){
    this.todoService.findAll().subscribe((todos: Todo[]) => this.todos = todos);
  }


  getTask(id:number){
    console.log(id);
    
    this.router.navigate(["/todos",{id:id}])
  }

  


}
