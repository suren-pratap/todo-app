import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class ToDo{
  constructor( public id : number,
    public description : string,  
    public done : boolean,
    public targetDate : Date){   
   
  }
}


@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})


export class ListToDosComponent implements OnInit {

  todos: ToDo[];
  message:string
  // = [
  //  new ToDo(1,'Learn ALGORITHMS',false,new Date()),
  //  new ToDo(2,'Learn DS',false,new Date()),
  //  new ToDo(3,'Learn System Design',false,new Date())
  //   // { id: 1, description: 'Learn ALGORITHMS' },
  //   // { id: 2, description: 'Learn DS' },
  //   // { id: 3, description: 'Learn System Design' }
  // ]

  // todo={
  //   id:1,
  //   description:'Learn ALGORITHMS AND DS'
  // }

  constructor(private todoService:TodoDataService,
    private router:Router) { }

  ngOnInit() {
    this.refreshToDos()
  }

  refreshToDos(){
    this.todoService.retrieveAllToDos('surendra').subscribe(
      
      response =>{
        console.log(response);
        this.todos=response;
      }
   )
  }

  deleteToDo(id){
    console.log(`delete todo ${id}`);
    this.todoService.deleteToDo('surendra',id).subscribe(
      response =>{
        console.log(response);
        this.message=`Delete of todo ${id} Suceessful!`
        this.refreshToDos()
      }
    );
  }

  updateToDo(id){
    console.log(`update todo ${id}`);
    this.router.navigate(['listtodos',id])
  }

}
