import { Injectable } from '@angular/core';
// this decorator maked=s it service
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username, password) {
    // console.log('Before'+this.isUserLoggedIn());
    if (username === 'surendra' && password === 'pwd') {
      sessionStorage.setItem('authenticateUser',username);
      // console.log('After'+this.isUserLoggedIn());
      return true;
    }
    else {
      return false;
    }
  }

  isUserLoggedIn(){
   let user= sessionStorage.getItem('authenticateUser');
   return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
   }
}
