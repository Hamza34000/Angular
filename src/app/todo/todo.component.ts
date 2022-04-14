import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo';
import { TodoService } from '../shared/services/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  newTodo!: string;

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit() {
    this.todoService
    .findAll()
    .subscribe((todos: Todo[])=>{
      this.todos = todos;
    })
  }

  addTodo(){
    if(this.newTodo){
      let todo = new Todo('',this.newTodo,true);
      this.todos.push(todo);
      this.newTodo = '';

      this.todoService.addTodo(todo).subscribe(todo =>{
        console.log(todo);
      })

    }
  }

  doTodo(id: number){
    this.todos[id].done = !this.todos[id].done;
    console.log(this.todos[id]);
    
    this.todoService.updateTodo(this.todos[id]).subscribe(todo=>{
      console.log(todo);
    })

  }

  deleteTodo(id: number){
    
    this.todoService.deleteTodo(this.todos[id].id).subscribe(todo =>{
      console.log(todo);
    });

    this.todos.splice(id,1);
  }

}
