import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/list-to-dos/list-to-dos.component';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }


  retrieveAllToDos(username) {
    console.log('Execute Hello World Bean Service');
    return this.http.get<ToDo[]>(`http://127.0.0.1:8080/users/${username}/todos`);
  }




  deleteToDo(username, id) {
    console.log('deleteToDo Service');
    return this.http.delete(`http://127.0.0.1:8080/users/${username}/todos/${id}`);
  }
  retrieveToDo(username, id) {
    console.log('retrieveToDo Service');
    return this.http.get<ToDo>(`http://127.0.0.1:8080/users/${username}/todos/${id}`);
  }
}
