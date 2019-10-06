package com.yasure.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ToDoResource {
	
	@Autowired
	private ToDoHardCodedService todoService;
	
	@GetMapping(path = "/users/{userName}/todos")
	public List<ToDo> getAllTodos(@PathVariable String userName){
		
		return todoService.findAll();
	}
	
	@GetMapping(path = "/users/{userName}/todos/{id}")
	public ToDo getTodos(@PathVariable String userName,
			@PathVariable Long id){
		
		return todoService.findById(id);
	}
	
	
	
	
	
	@DeleteMapping(path = "/users/{userName}/todos/{id}")
	public ResponseEntity<Void> deleteToDo(@PathVariable String userName,
			@PathVariable Long id) {
		ToDo todo= todoService.deleteById(id);
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}

}
