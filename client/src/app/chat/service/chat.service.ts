import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { DataService } from '../../data.service';
@Injectable()
export class ChatService {
  totalNotfy: any;
  listOfAllUserInMessage: any;
  socket: io;
  videoCallSection = false;
  isSender = false;
  callKey: any;
  recordCaller: any;
  recordReceiver: any;
  constructor(
    private http: Http,
    public storage: LocalStorageService,
    private userService: DataService
  ) {
    this.totalNotfy = [];
    this.listOfAllUserInMessage = [];
    this.socket = io('http://localhost:8000');
    this.socket.on('connection', function () { });
    this.userOnline();
    this.userOfflineByWindow();
  }

  userOnline() {
    if (this.userService.user.id) {
      this.socket.emit('UserConnectionStatus', {
        id: this.userService.user.id,
        status: true
      });
    }
  }
  userOfflineByWindow() {
    if (this.userService.user.id) {
      window.onbeforeunload = () => {
        return this.socket.emit('UserConnectionStatus', {
          id: this.userService.user.id,
          status: false
        });
      };
    }
  }
  userOffline() {
    if (this.userService.user.id) {
      this.socket.emit('UserConnectionStatus', {
        id: this.userService.user.id,
        status: false
      });
    }
  }

 /*(1)*/
 sendNotificationCallFromCaller(data) {
  if (this.userService.user.id) {
    this.socket.emit('requestCall', {
      data
    });
  }
}

/*(2)*/
receiveSentNotificationByReceiver() {
  const observable = new Observable<{ id: string; status: boolean }>(
    observer => {
      this.socket.on(this.userService.user.id + 'requestCall', function (data) {
        observer.next(data);
      });
    }
  );
  return observable;
}

/*(3)*/
sendResponseOfNotificationCallToSender(data) {
  if (this.userService.user.id) {
    this.socket.emit('responseCall', data);
  }
}

/*(4)*/
receiveResponseOfNotificationCall() {
  const observable = new Observable<{ id: string; status: boolean }>(
    observer => {
      this.socket.on(this.userService.user.id + 'responseCall', function (data) {
        observer.next(data);
      });
    }
  );
  return observable;
}



  checkUserOnline(id) {
    const observable = new Observable<{ id: string; status: boolean }>(
      observer => {
        this.socket.on(id, function (data) {
          observer.next(data);
        });
      }
    );
    return observable;
  }
  sendNotification(data) {
    this.socket.emit('notification', data);
  }

  getNotification(data) {
    const observable = new Observable<any>(
      observer => {
        this.socket.on(data + 'notification', function (res) {
          observer.next(res);
        });
      }
    );
    return observable;
  }
  checkUserNotifyNumberMessage(user1, user2) {
    const observable = new Observable(observer => {
      this.socket.on(user1 + '-' + user2 + '-NotifyNumber', function (data) {
        observer.next(data);
      });
    });
    return observable;
  }
  sendNotifyMessage(user1Id, user2Id, email, message) {
    if (user2Id && user2Id) {
      this.socket.emit('NotifyNumber', {
        channelName: user1Id + '-' + user2Id + '-NotifyNumber',
        info: {
          email,
          user1Id,
          user2Id,
          message
        }
      });
    }
  }

  receiveMessage(user1Id, user2Id) {
    const observable = new Observable<any>(observer => {
      this.socket.on(`${user1Id}-${user2Id}-NotifyNumbercontent`, function (
        data
      ) {
        observer.next(data);
      });
    });
    return observable;
  }

  addUserToListMessenger(user1) {
    const observable = new Observable(observer => {
      this.socket.on(user1 + 'list', function (data) {
        observer.next(data);
      });
    });
    return observable;
  }
  sendMessage(record) {
    return this.http
      .post('http://localhost:8000/api/message/sendmessage', record)
      .map(res => res.json());
  }
  gitMessages(record) {
    return this.http
      .post('http://localhost:8000/api/message/getmessages', record)
      .map(res => res.json());
  }
  deleteMessageFromQueue(record) {
    return this.http
      .post('http://localhost:8000/api/message/deletemessagefromqueue', record)
      .map(res => res.json());
  }
  getSortUser(record) {
    return this.http
      .post('http://localhost:8000/api/message/getsortuser', record)
      .map(res => res.json());
  }
  getUserTitle(record) {
    return this.http
      .post('http://localhost:8000/api/message/getusertitle', record)
      .map(res => res.json());
  }
}
