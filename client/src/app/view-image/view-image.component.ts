import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'viewImage',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {
  @Input() data: any;
  btnFollowText = '';
  deleteCss: string;
  share: String = 'Share';
  constructor(public service: DataService, private router: Router) {}
  deletePost(userId, postId) {

    this.service.deletePost({ userId: userId, postId: postId }).subscribe(res => {
      if (res.data === 'Deleted') {
        this.deleteCss = 'delete';
      }
    });
  }

  checkIfFollow(id) {
    console.log({ followerId: id, followingId: this.service.user.id + '++ME' });
    this.service.checkIfFollow({ followerId: id, followingId: this.service.user.id })
      .subscribe(res => {
        this.btnFollowText = res.data;
      });
  }

  follow(id) {
    this.service.follow({ followerId: id, followingId: this.service.user.id }).subscribe(res => {
      this.btnFollowText = res.data;
    });
  }


  viewProfile(userId: string) {
    console.log(userId);
  }
  viewOriginPost(postId: string) {
    console.log(postId);
  }
  sharePost(newPost) {
    this.service.sharePost({
      _id: this.service.user.id,
      postContent: newPost
    })
      .subscribe(res => {
        this.share = 'Shared';
      });
  }
  ngOnInit() {
    this.checkIfFollow(this.data.userId);
  }

}
