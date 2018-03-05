import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';
import { SignoutComponent } from './signout/signout.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { OriginalPostComponent } from './original-post/original-post.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signout',
    component: SignoutComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'originalpost',
    component: OriginalPostComponent
  },
  
  {
    path: '**',
    component: MainComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
