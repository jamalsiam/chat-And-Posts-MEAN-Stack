import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth-service/auth.service';
import { ChatService } from './chat/service/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notificationData: any;
  notificationId = [];
   constructor(
    private service: DataService,
    public storage: LocalStorageService,
    private route: Router,
    private auth: AuthService,
    private socket: ChatService
  ) {
    this.notificationData = {
      name: 'Chat WebSite',
      event: 'meet new friends here',
      image: 'assets/icon.jpeg',
      time: 'Just Now'
    };

    this.getNotification(this.storage.get('chatUserId'));
    this.route.events.subscribe(val => {
      if (this.storage.get('chatUserId') && this.storage.get('token')) {
        this.service
          .checkToken({
            id: this.storage.get('chatUserId'),
            token: this.storage.get('token')
          })
          .subscribe(res => {
            if (!res) {
              this.auth.signOut();
            }
          });
      }
    });

  }

  getNotification(id: string) {

    this.socket.getNotification(id).subscribe(res => {
      this.notificationId.push(this.notificationId.length);
      console.log(this.notificationId);
      
      this.notificationData = {
      name:  res.data.form + ' ' + res.data.action ,
      event: res.data.post,
      image:  ((res.data.image) ? 'data:image/jpeg;base64,' + res.data.image : ''),
      time: 'Just Now'
      };
    });
  }


}
