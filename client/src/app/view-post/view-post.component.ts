import { Component, OnInit ,Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'viewPost',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  @Input() data: any;
  btnFollowText=""
  deleteCss:string;
  constructor(public service:DataService) {
    
  }
  deletePost(userId,postId){
    
   this.service.deletePost({userId:userId,postId:postId}).subscribe(res=>{
    if(res.data==="Deleted"){
      this.deleteCss="delete";
    }
   });
  }

  checkIfFollow(id){
    for(let i=0;i<this.service.user.follow.following;i++){
      if(this.service.user.follow.following[i]==id){
        
        this.btnFollowText="Unfolow";  
      }
      
    }
    this.btnFollowText="Follow";
  }
  follow(id){
    for(let i=0;i<this.service.user.follow.following;i++){
      if(this.service.user.follow.following[i]==id){
        this.service.user.follow.following[i].splice(i,i+1)
        this.btnFollowText="Follow";
      }
      else
      {
        this.btnFollowText="Unfollow";
        this.service.user.follow.following.push({followerId:id, followingId:this.service.user.id})
      }
      
    }
    
  } 
  
  viewProfile(userId:string){
    console.log(userId);
  }
  viewOriginPost(postId:string){
    console.log(postId);
  }
  sharePost(newPost){
    console.log(newPost);
  }
  ngOnInit() {
    this.checkIfFollow(this.data.userId);
  }

}
