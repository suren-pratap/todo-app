package com.yasure.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
	
	
	//@RequestMapping(method = RequestMethod.GET,path = "hello-world")
	@GetMapping(path = "hello-world")
	public String getHelloWorld() {
		return "Hello World!";
	}
	
	@GetMapping(path = "hello-world-bean")
	public HelloWorldBean getHelloWorldBean() {
		//throw new RuntimeException("RuntimeException");
		return new HelloWorldBean("Hello World Bean");
	}
	
	@GetMapping(path = "hello-world/path-variable/{name}")
	public HelloWorldBean getHelloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s",name));
	}

}
