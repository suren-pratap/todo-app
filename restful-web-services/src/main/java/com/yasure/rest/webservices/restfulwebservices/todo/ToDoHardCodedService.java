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
		todos.add(new ToDo(Long.valueOf(++idCounter), "surendra", "Learn ALGORITHMS", new Date(), false));
		todos.add(new ToDo(Long.valueOf(++idCounter), "surendra", "Learn DS", new Date(), false));
		todos.add(new ToDo(Long.valueOf(++idCounter), "surendra", "Learn System Design", new Date(), false));
	}
	
	public List<ToDo> findAll(){
		return todos;
		
	}
}
