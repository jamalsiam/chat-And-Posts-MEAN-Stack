import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  {
    path: '' , 
    component:MainComponent 
  },
  {
    path: 'signup' , 
    component: SignupComponent
  },
  {
    path: 'signin' , 
    component: SigninComponent 
  },
  {
    path:'signout',
    component:SignoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
