import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MainComponent } from './user/main/main.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserComponent } from './user/user/user.component';
import { OriginalPostComponent } from './post/original-post/original-post.component';
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';
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
    path: 'messages/:id',
    component: ChatRoomComponent
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
