import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username='surendra'
  password='pwd'
  errorMessage='Invalid Credentials'
  invalidLogin=false


// Router
// Angular.give me router
//Dependency Injection
constructor(private router : Router,
  private hardcodedAuthenticationService:HardcodedAuthenticationService){}

  ngOnInit() {
  }
  handleLogin(){
    console.log(this.username);
    console.log(this.password);
    //if(this.username==='surendra' && this.password==='pwd'){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
    
      //Redirect to Welcome page
      this.router.navigate(['welcome',this.username]);//page for redirection
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
    }
  }
}
