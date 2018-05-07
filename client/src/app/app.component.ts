import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notificationData: any;
  constructor(
    private service: DataService,
    public storage: LocalStorageService,
    private route: Router,
    private auth: AuthService
  ) {
    this.notificationData = {
      name: 'Chat WebSite',
      event: 'meet new friends here',
      image: 'https://www.codyhub.com/wp-content/uploads/2017/07/i2.jpg',
      time: 'Just Now'
    };
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

}
