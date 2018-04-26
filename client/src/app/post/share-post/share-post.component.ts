import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'sharePost',
  templateUrl: './share-post.component.html',
  styleUrls: ['./share-post.component.css']
})
export class SharePostComponent implements OnInit {
  textPost: string;
  photoPost: string;
  constructor(public service: DataService) { }
  sharePost() {
    this.service.sharePost({
      _id: this.service.user.id,
      postContent: {
        text: this.textPost,
        image: this.photoPost
      }
    })
      .subscribe(res => {
        const oldfollowingPost = this.service.followingPost;
        const oldPosts = this.service.user['post'];
        const newPost = [{

          userId: this.service.user.id,
          postContent: { text: this.textPost, image: this.photoPost },
          id_: '',
          date: 'Just Now',
          like: 0,
          comment: 0,
          imageUser: this.service.user.userInfo.image,
          username: this.service.user.userInfo.username
        }];

        this.service.followingPost = newPost.concat(oldfollowingPost);
        this.service.user.post = newPost.concat(oldPosts);
        this.textPost = '';
        this.photoPost = '';
      });
  }
  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.photoPost = btoa(binaryString);

  }
  ngOnInit() {
  }

}
