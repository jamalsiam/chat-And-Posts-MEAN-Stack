import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '../../chat/service/chat.service';

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
  commentText: string;
  viewComments: boolean;
  commentSet: any;
  notificationData: any;
  constructor(public service: DataService, private router: Router, private socket: ChatService) { }
  deletePost(userId, postId) {

    this.service.deletePost({ userId: userId, postId: postId }).subscribe(res => {
      if (res.data === 'Deleted') {
        this.deleteCss = 'delete';
      }
    });
  }

  viewProfile(userId: string) {
    if (userId !== this.service.user.id) {
      this.router.navigate(['user/' + userId]);
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
          this.notificationData = {
            name: 'User Shered The Post',
            event: this.data.postContent.text.slice(0, 50) + '...',
            image: ((this.service.user.userInfo.image) ? 'data:image/jpeg;base64,' +  this.service.user.userInfo.image : ''),
            time: 'Just Now'
          };
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
      this.socket.sendNotification({
        to: this.data.userId,
        form: this.service.user.userInfo.username,
        image: this.service.user.userInfo.image,
        action: 'put like',
        post: this.data.postContent.text.slice(0, 50) + '...'
      });

    }

    this.service.putOrRemoveLike({ postId, userId }).subscribe(res => {
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
  shareComment(postId, userId) {
    if (this.commentText) {
      this.service.shareComment({ postId, userId, commentContent: { text: this.commentText } }).subscribe(res => {
        this.socket.sendNotification({
          to: this.data.userId,
          form: this.service.user.userInfo.username,
          image: this.service.user.userInfo.image,
          action: 'write comment on your Post',
          post: (this.data.postContent.text.slice(0, 25) + ' > ' + this.commentText ).slice(0, 50) + '...'
        });

        this.commentsLength++;
        this.commentSet.push({
          comment: {
            commentContent: { text: this.commentText },
            date: 'Now',
            postId: postId,
            userId: userId,
          },
          image: this.service.user.userInfo.image,
          username: this.service.user.userInfo.username
        });
        this.commentText = '';
      });
    }

  }
  getComments() {
    this.service.viewComments({ postId: this.data.postId }).subscribe(res => {
      this.commentSet = res.data;

      this.viewComments = true;
    });

  }
  ngOnInit() {
    this.likesLingth = 0;
    this.commentsLength = 0;
    this.checkUserLiked = false;
    this.commentText = '';
    this.getLikeAndCommentLength();
  }

}
