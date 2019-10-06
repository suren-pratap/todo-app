import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

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

  constructor(private todoService:TodoDataService) { }

  ngOnInit() {
    this.todoService.retrieveAllToDos('surendra').subscribe(
      
      response =>{
        console.log(response);
        this.todos=response;
      }
   )
  }

}
