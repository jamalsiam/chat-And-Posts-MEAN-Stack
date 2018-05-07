import { Component, OnInit, Input } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input('data') data: any;
  eventNotnotificationNumer = 0;
  constructor(public storage: LocalStorageService) {
    if (this.storage.get('chatUserId') && this.storage.get('token')) {
      this.eventnotificationMethod();
    }
  }

  eventnotificationMethod() {
    for (let i = 1; i <= 2; i++) {
      setTimeout(() => {
        this.eventNotnotificationNumer = i;
      }, i * i * 1000);
    }
  }
  closeNotification() {
    this.eventNotnotificationNumer = 0;
  }
  ngOnInit() {
  }

}
