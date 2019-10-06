import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';//import another module class 
import { ActivatedRoute } from '@angular/router';
import { WelcomedataService } from '../service/data/welcomedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message='Welcome Message';
  welcomeMessageFromService:string;
  name='';
  //ActivatedRoute
  constructor(private route:ActivatedRoute,
    private service:WelcomedataService) { }

  ngOnInit() {
    //console.log(this.message);
    this.name=this.route.snapshot.params['name'];
  }


  getWelcomeMessageWithParameter(){

    //console.log( this.service.executeHelloWorldBeanService());// it will not go to server until we subscribe
    this.service.executeHelloWorldServiceWithPath(this.name).subscribe(
      //response => this.handleSuccessfulResponse(response)
      response =>this.handleSuccessfulResponse(response),
      error =>this.handleErrorResponse(error)
    );
    console.log( 'Last line of Message!');
  }

  getWelcomeMessage(){

    //console.log( this.service.executeHelloWorldBeanService());// it will not go to server until we subscribe
    this.service.executeHelloWorldBeanService().subscribe(
      //response => this.handleSuccessfulResponse(response)
      response =>this.handleSuccessfulResponse(response),
      error =>this.handleErrorResponse(error)
    );
    console.log( 'Last line of Message!');
  }
  handleSuccessfulResponse(response){
    //console.log(response.message);
    this.welcomeMessageFromService=response.message;
  }

  handleErrorResponse(error){
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService=error.error.message;
  }
}
