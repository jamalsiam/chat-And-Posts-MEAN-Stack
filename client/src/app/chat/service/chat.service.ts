import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
@Injectable()
export class ChatService {
  totalNotfy: any;
  constructor(private http: Http, public storage: LocalStorageService) {
    this.totalNotfy = [];
  }

  sendMessage(record) {
    return this.http.post('http://localhost:8000/api/message/sendmessage', record).map(res => res.json());
  }
  gitMessages(record) {
    return this.http.post('http://localhost:8000/api/message/getmessages', record).map(res => res.json());
  }
  getMessageFromQueue(record) {
    return this.http.post('http://localhost:8000/api/message/getmessagefromqueue', record).map(res => res.json());
  }
  getSortUser(record) {
    return this.http.post('http://localhost:8000/api/message/getsortuser', record ).map(res => res.json());
  }
  getUserTitle(record) {
    return this.http.post('http://localhost:8000/api/message/getusertitle', record).map(res => res.json());
  }
}
