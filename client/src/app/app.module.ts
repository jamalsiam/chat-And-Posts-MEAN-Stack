import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MainComponent } from './user/main/main.component';
import { AsideBarComponent } from './chat/aside-bar/aside-bar.component';
import { HeaderComponent } from './header/header.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SharePostComponent } from './post/share-post/share-post.component';
import { ViewPostComponent } from './post/view-post/view-post.component';
import { AboutComponent } from './user/about/about.component';
import { OriginalPostComponent } from './post/original-post/original-post.component';
import { ViewImageComponent } from './post/view-image/view-image.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserComponent } from './user/user/user.component';
import { CommentComponent } from './post/comment/comment.component';
import { UserChatLabelComponent } from './chat/aside-bar/user-chat-label/user-chat-label.component';
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';
import { AuthService } from './auth/auth-service/auth.service';
import { ChatService } from './chat/service/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    MainComponent,
    AsideBarComponent,
    HeaderComponent,
    SignoutComponent,
    ProfileComponent,
    SharePostComponent,
    ViewPostComponent,
    AboutComponent,
    OriginalPostComponent,
    ViewImageComponent,
    UserInfoComponent,
    UserComponent,
    CommentComponent,
    UserChatLabelComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [DataService, ChatService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
