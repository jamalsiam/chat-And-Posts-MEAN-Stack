import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css', '../about/about.component.css']
})

export class UserComponent implements OnInit {
  userObject: any = { userDate: { interests: [] }, postData: '' };
  tapRouteVal: String = 'Posts';
  constructor(public service: DataService, private route: ActivatedRoute, private router: Router) { }

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
  follow(followerId, followingId) {
    this.service.follow({ followerId, followingId })
      .subscribe(res => {
        console.log(res);
        console.log(this.userObject.followData);
        if (res.data) {
          this.userObject.followData = [res.newFollow].concat(this.userObject.followData);
        } else {
          const record = [];
          for (let i = 0; i < this.userObject.followData.length; i++) {
            if (this.userObject.followData[i].followerId === followerId && this.userObject.followData[i].followingId === followingId) {
              continue;
            } else {
              record.push(this.userObject.followData[i]);
            }
          }
          this.userObject.followData = record;
        }
        this.userObject.followingFromMe = res.data;
      });
  }


  routeTabs(a: string) {
    this.tapRouteVal = a;
  }
  ngOnInit() {
    this.route.params.subscribe(query => {
      if (this.service.user.id === query.id) {
        this.router.navigate(['profile']);
      }
      this.service.getUserProfile({ query, profile: this.service.user.id }).subscribe(res => {
        if (res.status === 'fail') {

        } else {
          this.userObject = res;
        }
      });
    });
  }

}
