import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()

export class DataService {
  
   user:any;
  constructor(private http: Http, public storage: LocalStorageService) {
    this.user={name:'jamalsiam'}
    if(this.storage.get('chatUserId') !== null || this.storage.get('chatUserId') !== undefined){
      this.getProfileInfo({userId:''+this.storage.get('chatUserId')}).subscribe(res =>{
        let d=res.data;
          this.user={username:d.username, address:d.address, email:d.email}
        })
    }
   
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
  }


  signUp(record)  { 
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/user/signup', record, {headers: headers}).map(res => res.json());
  }
  signUpAsGuest() {
     return this.http.get('/api/user/signupasguest').map(res => res.json());
   }
   signIn(record)  { 
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/user/signin', record, {headers: headers}).map(res => res.json());
  }
  getProfileInfo(record)  { 
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/user/getuserinfo', record, {headers: headers}).map(res => res.json());
  }
  signOut(){
    this.storage.remove('chatUserId');
    this.user={};
  }
}