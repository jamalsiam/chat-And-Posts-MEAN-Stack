
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()

export class MessageService {
  totalNotfy: any;
  constructor(private http: Http, public storage: LocalStorageService) {
    this.totalNotfy = [];
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
  }


  sendMessage(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/message/sendmessage', record, { headers: headers }).map(res => res.json());
  }
  gitMessages(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/message/getmessages', record, { headers: headers }).map(res => res.json());
  }
  getMessageFromQueue(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/message/getmessagefromqueue', record, { headers: headers }).map(res => res.json());

  }
  getSortUser(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/message/getsortuser', record, { headers: headers }).map(res => res.json());

  }
  getUserTitle(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/message/getusertitle', record, { headers: headers }).map(res => res.json());

  }
}
