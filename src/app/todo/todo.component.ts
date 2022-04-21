import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  idUser: number = 0;
  todoDone!: boolean;

  constructor(
    private todoService: TodoService,
    private route:ActivatedRoute
  ) {
    let id = route.snapshot.paramMap.get("id");
    if(id) this.idUser = parseInt(id);
  }

  ngOnInit() {
    this.refresh();

  }

  addTodo(){
    if(this.newTodo){
      let todo = new Todo('',this.newTodo,false,this.idUser);
      this.todos.push(todo);
      this.newTodo = '';

      this.todoService.addTodo(todo).subscribe(todo =>{
        console.log(todo);
        this.refresh();
      })

    }
  }

  doTodo(id: number){
    this.todos[id].done = !this.todos[id].done;
    console.log(this.todos[id]);
    
    this.todoService.updateTodo(this.todos[id]).subscribe(todo=>{
      console.log(todo);
      this.refresh();

      
    })

  }

  deleteTodo(id: number){
    
    this.todoService.deleteTodo(this.todos[id].id).subscribe(todo =>{
      console.log(todo);
    });

    this.todos.splice(id,1);
  }

  refresh(){
    this.todoService
    .findUserId(this.idUser)
    .subscribe((todos: Todo[])=>{
      this.todos = todos;
    });
  }

}
