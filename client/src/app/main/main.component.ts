import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  randomSuggestPost: any = [];
  constructor(public servece: DataService) {
    this.servece.getFollowingPosts({ id: this.servece.user.id })
      .subscribe(res => {
        this.servece.followingPost = res.following;
      });

  }



  randomSuggest() {
    this.servece.randomSuggest()
      .subscribe(res => {
        this.randomSuggestPost.push({
          userId: res.user._id,
          imageUser: res.user.imageUser,
          username: res.user.username,
          date: res.post.date,
          postContent: res.post.postContent,
          postId: res.post._id
        });
      });
  }

  ngOnInit() {
    for (let i = 1; i <= 3; i++) {
      this.randomSuggest();
    }
  }

}
