package com.yasure.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
//Act as Database
@Service
public class ToDoHardCodedService {

	private static List<ToDo> todos=new ArrayList<>();
	
	private static int idCounter=0;
	
	static {
		todos.add(new ToDo(Long.valueOf(++idCounter), "surendra", "Learn ALGORITHMS 1", new Date(), false));
		todos.add(new ToDo(Long.valueOf(++idCounter), "surendra", "Learn DS 1", new Date(), false));
		todos.add(new ToDo(Long.valueOf(++idCounter), "surendra", "Learn System Design 1", new Date(), false));
	}
	
	public List<ToDo> findAll(){
		return todos;
		
	}
	
	public ToDo deleteById(Long id) {
		ToDo todo=findById(id);
		if(todo==null) return null;
		if(todos.remove(todo)) {
		return todo;
		}
		return null;
	}

	public ToDo findById(Long id) {
		for(ToDo todo  :todos ) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}
}
