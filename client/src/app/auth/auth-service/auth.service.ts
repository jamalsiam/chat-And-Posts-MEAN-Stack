import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';

import { DataService } from '../../data.service';
//import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private _httpClient: HttpClient, private x: DataService, private storage: LocalStorageService) { }

  signIn(record) {
    return this._httpClient.post('http://localhost:8000/api/user/signin', record, {
      observe: 'body',
      responseType: 'json',
    });
  }

  signUp(record) {
    return this._httpClient.post('http://localhost:8000/api/user/signup', record, {
      observe: 'body',
      responseType: 'json',
    });
  }

  signUpAsGuest() {
    return this._httpClient.get('http://localhost:8000/api/user/signup', {
      observe: 'body',
      responseType: 'json',
    });
  }

  signOut() {
    this.storage.remove('chatUserId');
    this.x.user = {};
    this.x.followingPost = [];
  }
}