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
  newUser!: string;
  newMail!: string;
  constructor(
    private userService: UserService,
    private todoService: TodoService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.refresh();
  }

  getTodo(){
    this.todoService.findAll().subscribe((todos: Todo[]) => this.todos = todos);
  }


  getTask(id:number){
    console.log(id);
    
    this.router.navigate(["/todos",{id:id}])
  }

  addUser(){
    if(this.newUser){
      let user = new User(Math.floor(Math.random() * 1000) + 1,this.newUser,this.newMail);
      this.users.push(user);
      this.newUser = '';
      this.newMail = '';

      this.userService.addUser(user).subscribe(user =>{
        console.log(user);
        this.refresh();
      })

    }
  }

  deleteUser(id: number){
    
    console.log(id.toString());
    this.userService.deleteUser(id.toString()).subscribe(user =>{
      console.log(user);
      this.todos.splice(id,1);
      this.refresh();

    });

    
  }

  refresh(){
    this.userService.getUsers().subscribe((users: User[]) => this.users = users);
  }
  


}
