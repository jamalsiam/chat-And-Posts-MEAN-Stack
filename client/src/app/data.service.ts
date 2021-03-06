import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()

export class DataService {

  user: any;
  followingPost: any;
  originPost: any;
   constructor(private http: Http, public storage: LocalStorageService) {
    this.user = { id: null, post: [], userInfo: {}, follow: { following: [], follower: [] } };
    if (this.storage.get('chatUserId') !== null || this.storage.get('chatUserId') !== undefined) {
      this.user['id'] = this.storage.get('chatUserId');

      this.getProfileInfo({ userId: '' + this.storage.get('chatUserId') }).subscribe(res => {

        const post = res.post;
        const userInfo = res.userInfo;

        for (let i = 0; i < post.length; i++) {
          post[i]['imageUser'] = userInfo.image;
          post[i]['username'] = userInfo.username;
          post[i]['userId'] = userInfo._id;
          post[i]['postId'] = post[i]._id;
        }

        this.user = res;
        this.user['post'] = post;
      });
    }

  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20'));
  }



  getProfileInfo(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/user/getuserinfo', record, { headers: headers }).map(res => res.json());
  }

  sharePost(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/post/sharepost', record, { headers: headers }).map(res => res.json());
  }
  getFollowingPosts(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/post/getFollowingPosts', record, { headers: headers }).map(res => res.json());
  }
  deletePost(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/post/deletepost', record, { headers: headers }).map(res => res.json());
  }
  randomSuggest() {
    return this.http.get('http://localhost:8000/api/post/randomSuggest').map(res => res.json());

  }
  checkIfFollow(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/follow/checkiffollow', record, { headers: headers }).map(res => res.json());
  }

  follow(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/follow/addorremovefollow', record, { headers: headers }).map(res => res.json());
  }

  changeProfileImage(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/user/changeprofileimage', record, { headers: headers }).map(res => res.json());
  }
  changeProfileCover(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/user/changeprofilecover', record, { headers: headers }).map(res => res.json());
  }
  changeInfoUser(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/user/changeprofileinfo', record, { headers: headers }).map(res => res.json());

  }
  changeUserInterests(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/user/changeuserinterests', record, { headers: headers }).map(res => res.json());

  }
  getUserProfile(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/user/getuserprofile', record, { headers: headers }).map(res => res.json());

  }
  likeAndCommentLength(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/post/likeandcommentlength', record, { headers: headers }).map(res => res.json());
  }
  putOrRemoveLike(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/post/putorremovelike', record, { headers: headers }).map(res => res.json());

  }
  shareComment(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/comment/sharecomment', record, { headers: headers }).map(res => res.json());

  }
  viewComments(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/comment/viewcomments', record, { headers: headers }).map(res => res.json());

  }
  checkToken(record) {
    let headers: Headers;
    headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/user/checktoken', record, { headers: headers }).map(res => res.json());
  }
}