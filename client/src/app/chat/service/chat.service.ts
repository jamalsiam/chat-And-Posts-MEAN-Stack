import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { LocalStorageService } from "angular-2-local-storage";
import * as io from "socket.io-client";
import { Observable } from "rxjs";
import { DataService } from "../../data.service";
@Injectable()
export class ChatService {
  totalNotfy: any;
  socket: io;
  constructor(
    private http: Http,
    public storage: LocalStorageService,
    private userService: DataService
  ) {
    this.totalNotfy = [];
    this.socket = io("http://localhost:8000");
    this.socket.on("connection", function() {});
    this.userOnline();
    this.userOfflineByWindow();
  }

  userOnline() {
    if (this.userService.user.id) {
      this.socket.emit("UserConnectionStatus", {
        id: this.userService.user.id,
        status: true
      });
    }
  }
  userOfflineByWindow() {
    if (this.userService.user.id) {
      window.onbeforeunload = () => {
        return this.socket.emit("UserConnectionStatus", {
          id: this.userService.user.id,
          status: false
        });
      };
    }
  }
  userOffline() {
    if (this.userService.user.id) {
      this.socket.emit("UserConnectionStatus", {
        id: this.userService.user.id,
        status: false
      });
    }
  }
  checkUserOnline(id) {
    const observable = new Observable(observer => {
      this.socket.on(id, function(data) {
        observer.next(data);
      });
    });
    return observable;
  }
  sendMessage(record) {
    return this.http
      .post("http://localhost:8000/api/message/sendmessage", record)
      .map(res => res.json());
  }
  gitMessages(record) {
    return this.http
      .post("http://localhost:8000/api/message/getmessages", record)
      .map(res => res.json());
  }
  getMessageFromQueue(record) {
    return this.http
      .post("http://localhost:8000/api/message/getmessagefromqueue", record)
      .map(res => res.json());
  }
  getSortUser(record) {
    return this.http
      .post("http://localhost:8000/api/message/getsortuser", record)
      .map(res => res.json());
  }
  getUserTitle(record) {
    return this.http
      .post("http://localhost:8000/api/message/getusertitle", record)
      .map(res => res.json());
  }
}
