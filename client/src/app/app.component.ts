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
  ringingSection = false;
  nameCaller: string;
  imageCaller: string;
  idCaller: string;
  callType: string;
    constructor(
    private service: DataService,
    public storage: LocalStorageService,
    private route: Router,
    private auth: AuthService,
    private chat: ChatService,
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
    /*(2)*/
    this.chat.receiveSentNotificationByReceiver().subscribe(res => {
      this.chat.recordReceiver = res;
      this.nameCaller = res['name'];
      this.imageCaller = res['image'];
      this.idCaller = res['id'];
      this.callType = res['video'] ? 'video call' : 'call';
      this.ringingSection = true;


      setTimeout(() => {
        this.ringingSection = false;
      }, 20 * 1000);
    });

  }

  getNotification(id: string) {

    this.chat.getNotification(id).subscribe(res => {
      this.notificationId.push(this.notificationId.length);
      this.notificationData = {
        name: res.data.form + ' ' + res.data.action,
        event: res.data.post,
        image: ((res.data.image) ? 'data:image/jpeg;base64,' + res.data.image : ''),
        time: 'Just Now'
      };
    });
  }

  answer() {
    this.chat.videoCallSection = true;
    this.ringingSection = false;
    this.route.navigate(['/call/2']);
  }

  end() {
    this.ringingSection = false;
    this.chat.videoCallSection = false;
  }

}
