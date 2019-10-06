import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class HelloWorldBean{
  constructor(public message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
    console.log('Execute Hello World Bean Service');
    return this.http.get<HelloWorldBean>("http://127.0.0.1:8080/hello-world-bean");
  }

  executeHelloWorldServiceWithPath(name){
    console.log('Execute Hello World Service With Path');
    return this.http.get<HelloWorldBean>(`http://127.0.0.1:8080/hello-world/path-variable/${name}`);
  }
 
}
