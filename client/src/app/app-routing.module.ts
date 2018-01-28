import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'signup' , 
    component: SignupComponent 
},
{
  path: 'signin' , 
  component: SigninComponent 
},
{
  path: '' , 
  component:MainComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
