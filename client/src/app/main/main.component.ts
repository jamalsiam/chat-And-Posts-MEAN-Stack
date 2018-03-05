import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  randomSuggestPost: any = [];
  gropFollowerpost: any = [];
  constructor(public servece: DataService) {}



  randomSuggest() {
    this.servece.randomSuggest()
      .subscribe(res => {
        this.randomSuggestPost.push({
          userId: res.user._id,
          imageUser: res.user.image,
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
    this.servece.getFollowingPosts({ id: this.servece.user.id })
      .subscribe(res => {
        const data = res.data[0];
        for (let user = 0; user < data.userInfo.length; user++) {
          for (let post = 0; post < data.postInfo.length; post++) {
            if (data.userInfo[user]._id === data.postInfo[post].userId) {
              this.gropFollowerpost.push({
                userId : data.userInfo[user]._id,
                imageUser : data.userInfo[user].image,
                username : data.userInfo[user].username,
                date : data.postInfo[post].date,
                postContent : data.postInfo[post].postContent,
                postId : data.postInfo[post]._id
              });
            }
          }
        }

      });
  }

}
