import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../about/about.component.css']
})
export class UserComponent implements OnInit {
  userObject: any = { userDate: {interests: []}, postData : '' };
  tapRouteVal: String = 'Posts';
  constructor(public service: DataService, private route: ActivatedRoute) { }

  followerLength(followData) {
    let followerCuont = 0;
    if (!followData) {
      return 0;
    }
    for (let i = 0; i < followData.length; i++) {
      if (followData[i].followerId === this.userObject.userDate._id) {
        followerCuont++;
      }
    }
    return followerCuont;
  }
  followingLength(followData) {
    let followigCuont = 0;
    if (!followData) {
      return 0;
    }

    for (let i = 0; i < followData.length; i++) {
      if (followData[i].followingId === this.userObject.userDate._id) {
        followigCuont++;
      }
    }
    return followigCuont;
  }
  fetchPost(postData, userDate) {
    const userPosts = [];
    for (let i = 0; i < postData.length; i++) {
      userPosts.push({
        userId: userDate._id || '',
        imageUser: userDate.image,
        username: userDate.username,
        date: postData[i].date,
        postContent: postData[i].postContent,
        postId: postData[i]._id
      });
    }
    return userPosts;
  }



  routeTabs(a: string) {
    this.tapRouteVal = a;
  }
  ngOnInit() {
    this.route.params.subscribe(query => {
      this.service.getUserProfile({ query, profile: this.service.user.id }).subscribe(res => {
        if (res.status === 'fail') {

        } else {
          this.userObject = res;
        }
      });
    });
  }

}
