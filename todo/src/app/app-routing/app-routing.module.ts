import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ErrorComponent } from '../error/error.component';
import { ListToDosComponent } from '../list-to-dos/list-to-dos.component';
import { LogoutComponent } from '../logout/logout.component';
import { RouteGuardService } from '../service/route-guard.service';


//welcome
const routes: Routes=[
  {path :'', component: LoginComponent},
  //{path :'welcome', component: WelcomeComponent},
  {path :'welcome/:name', component: WelcomeComponent ,canActivate:[RouteGuardService]},//can activate specific url, RouteGaurdService
  {path :'login', component: LoginComponent},
  {path :'listtodos', component: ListToDosComponent,canActivate:[RouteGuardService]},
  {path :'logout', component: LogoutComponent,canActivate:[RouteGuardService]},
  {path :'**', component: ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
