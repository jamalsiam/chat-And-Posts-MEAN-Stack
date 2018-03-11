import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MainComponent } from './main/main.component';
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { HeaderComponent } from './header/header.component';
import { SignoutComponent } from './signout/signout.component';
import { ProfileComponent } from './profile/profile.component';
import { SharePostComponent } from './share-post/share-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { AboutComponent } from './about/about.component';
import { OriginalPostComponent } from './original-post/original-post.component';
import { ViewImageComponent } from './view-image/view-image.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';

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
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
