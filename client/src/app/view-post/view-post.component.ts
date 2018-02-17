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
  share:string="Share"
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
    console.log({followerId: id, followingId:this.service.user.id+"++ME"})
    this.service.checkIfFollow({followerId: id, followingId:this.service.user.id})
    .subscribe(res=>{
      this.btnFollowText=res.data;
    })
  }

  follow(id){  
   this.service.follow({followerId: id, followingId:this.service.user.id }).subscribe(res =>{
    this.btnFollowText=res.data;
   })
  } 
   
  
  viewProfile(userId:string){
    console.log(userId);
  }
  viewOriginPost(postId:string){
    console.log(postId);
  }
  sharePost(newPost){
    this.service.sharePost({_id:this.service.user.id,
      postContent:newPost})
   .subscribe(res =>{
    this.share="Shared"
   })
  }
  ngOnInit() {
    this.checkIfFollow(this.data.userId);
  }

}
