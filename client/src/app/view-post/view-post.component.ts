import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'viewPost',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  @Input() data: any;
  btnFollowText = '';
  deleteCss: string;
  share: String = 'Share';
  likesLingth: number;
  commentsLength: number;
  checkUserLiked: boolean;
  constructor(public service: DataService, private router: Router) { }
  deletePost(userId, postId) {

    this.service.deletePost({ userId: userId, postId: postId }).subscribe(res => {
      if (res.data === 'Deleted') {
        this.deleteCss = 'delete';
      }
    });
  }

  viewProfile(userId: string) {
    if (userId !== this.service.user.id) {
      this.router.navigate(['user/id:' + userId]);
    } else {
      this.router.navigate(['profile']);
    }
  }
  viewOriginPost(post: any) {
    this.service.originPost = post;
    this.router.navigate(['originalpost']);
  }
  sharePost(newPost) {
    if (this.share !== 'Shared') {
      this.service.sharePost({
        _id: this.service.user.id,
        postContent: newPost
      })
        .subscribe(res => {
          this.share = 'Shared';
        });
    }
  }
  putOrRemoveLike(postId, userId) {
    if (this.checkUserLiked) {
      this.checkUserLiked = false;
      this.likesLingth--;
    } else {
      this.checkUserLiked = true;
      this.likesLingth++;
    }
    console.log( userId, postId );
    this.service.putOrRemoveLike({postId, userId}).subscribe(res => {
      this.getLikeAndCommentLength();
    });
  }
  getLikeAndCommentLength() {
    this.service.likeAndCommentLength({ postId: this.data.postId, profileId: this.service.user.id }).subscribe(res => {
      this.commentsLength = res.commentsLength;
      this.likesLingth = res.likesLength;
      this.checkUserLiked = res.checkUserLiked;
    });
  }
  ngOnInit() {
    this.likesLingth = 0;
    this.commentsLength = 0;
    this.checkUserLiked = false;
    this.getLikeAndCommentLength();
  }

}
